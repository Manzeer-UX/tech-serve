export function LandingBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="orb-primary absolute -left-20 top-12 h-[18rem] w-[18rem] rounded-full blur-3xl opacity-22 sm:-left-28 sm:top-18 sm:h-[30rem] sm:w-[30rem]" />
      <div className="orb-secondary absolute right-[-4rem] top-12 h-[16rem] w-[16rem] rounded-full blur-3xl opacity-18 sm:right-[-6rem] sm:top-16 sm:h-[26rem] sm:w-[26rem]" />
      <div className="orb-floor absolute bottom-[-6rem] left-1/2 h-[16rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl opacity-44 sm:bottom-[-8rem] sm:h-[24rem] sm:w-[56rem]" />
    </div>
  );
}
