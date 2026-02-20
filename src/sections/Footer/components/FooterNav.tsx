export const FooterNav = () => {
  return (
    <nav className="text-sm [align-items:normal] box-border caret-transparent inline-flex flex-col flex-wrap leading-[22.4px] w-full md:text-base md:items-center md:flex-row md:leading-[25.6px]">
      <a
        href="/home"
        className="text-xs font-medium box-border caret-transparent block shrink-0 h-[67px] leading-[19.2px] w-full overflow-hidden mr-[15px] mb-[30px]"
      >
        <img
          src="/logo.png"
          alt="ExpressTubes - Experts in custom packaging"
          className="h-full object-contain"
        />
      </a>
      <a
        href="/explore-packaging"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Explore Packaging
      </a>
      <a
        href="/why-choose-green"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Why Choose Green?
      </a>
      <a
        href="/products"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Products
      </a>
      <a
        href="/trends"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Trends
      </a>
      <a
        href="/upcoming-events"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Upcoming Events
      </a>
      <a
        href="/contact"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Contact
      </a>
      <a
        href="tel://800-365-4080"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase hover:underline"
      >
        1.800.365.4080
      </a>
    </nav>
  );
};
