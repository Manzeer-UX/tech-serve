export const MAX_GRADIENT_STOPS = 8;
export const MAX_LINES_PER_WAVE = 12;

export const floatingLinesVertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const floatingLinesFragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const int MAX_LINES = 12;

mat2 rotate2d(float angle) {
  return mat2(cos(angle), sin(angle), -sin(angle), cos(angle));
}

vec3 getLineColor(float t) {
  if (lineGradientCount <= 0) {
    return vec3(0.3137, 0.0, 0.9961);
  }

  if (lineGradientCount == 1) {
    return lineGradient[0];
  }

  float clampedT = clamp(t, 0.0, 0.9999);
  float scaled = clampedT * float(lineGradientCount - 1);
  int idx = int(floor(scaled));
  float blend = fract(scaled);
  int idx2 = min(idx + 1, lineGradientCount - 1);
  return mix(lineGradient[idx], lineGradient[idx2], blend);
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;
  float movement = time * 0.1;
  float amplitude = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + offset + movement) * amplitude;

  if (shouldBend) {
    vec2 delta = screenUv - mouseUv;
    float influence = exp(-dot(delta, delta) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float distanceToLine = uv.y - y;
  return 0.014 / max(abs(distanceToLine) + 0.012, 0.001) + 0.005;
}

void renderWave(
  inout vec3 color,
  vec2 uv,
  vec2 mouseUv,
  int count,
  float distanceBetween,
  vec3 wavePosition,
  float offsetBase,
  float alpha
) {
  for (int i = 0; i < MAX_LINES; ++i) {
    if (i >= count) {
      break;
    }

    float fi = float(i);
    float t = fi / max(float(count - 1), 1.0);
    vec2 rotatedUv = uv * rotate2d(wavePosition.z * log(length(uv) + 1.0));
    color += getLineColor(t) * wave(
      rotatedUv + vec2(distanceBetween * fi + wavePosition.x, wavePosition.y),
      offsetBase + 0.17 * fi,
      uv,
      mouseUv,
      interactive
    ) * alpha;
  }
}

void main() {
  vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;
  uv.y *= -1.0;

  if (parallax) {
    uv += parallaxOffset;
  }

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }

  vec3 color = vec3(0.0);

  if (enableBottom) {
    renderWave(color, uv, mouseUv, bottomLineCount, bottomLineDistance, bottomWavePosition, 1.35, 0.12);
  }

  if (enableMiddle) {
    renderWave(color, uv, mouseUv, middleLineCount, middleLineDistance, middleWavePosition, 1.75, 0.22);
  }

  if (enableTop) {
    vec2 mirroredUv = uv;
    mirroredUv.x *= -1.0;
    renderWave(color, mirroredUv, mouseUv, topLineCount, topLineDistance, topWavePosition, 0.95, 0.11);
  }

  gl_FragColor = vec4(color, min(length(color) * 1.25, 1.0));
}
`;
