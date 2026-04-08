import Image from "next/image";

export function FinalCtaLogoMark() {
  return (
    <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-[1.75rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,236,255,0.84))] shadow-[var(--shadow-card)]">
      <div className="absolute inset-3 rounded-[1.15rem] border border-[var(--color-border-subtle)] bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.92),transparent_38%),linear-gradient(180deg,rgba(247,243,255,0.88),rgba(239,232,255,0.72))]" />
      <div className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(150,100,250,0.14)] blur-2xl" />
      <Image
        alt="TechServ"
        className="relative h-auto w-14"
        height={24}
        priority={false}
        sizes="56px"
        src="/techserv-logo.svg"
        width={56}
      />
    </div>
  );
}
