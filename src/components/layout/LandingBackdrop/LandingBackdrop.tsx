export function LandingBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="orb-primary absolute -left-28 top-18 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-22" />
      <div className="orb-secondary absolute right-[-6rem] top-16 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-18" />
      <div className="orb-floor absolute bottom-[-8rem] left-1/2 h-[24rem] w-[56rem] -translate-x-1/2 rounded-full blur-3xl opacity-44" />
    </div>
  );
}
