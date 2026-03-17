import { Link } from "react-router-dom";

export const FooterNav = () => {
  return (
    <nav className="text-sm [align-items:normal] box-border caret-transparent inline-flex flex-col flex-wrap leading-[22.4px] w-full md:text-base md:items-center md:flex-row md:leading-[25.6px]">
      <Link
        to="/"
        className="text-xs font-medium box-border caret-transparent block shrink-0 h-[67px] leading-[19.2px] w-full overflow-hidden mr-[15px] mb-[30px]"
      >
        <img
          src="/logo2.png"
          alt="ExpressTubes - Experts in custom packaging"
          className="h-full object-contain"
        />
      </Link>
      <Link
        to="/explore-packaging"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Explore Packaging
      </Link>
      {/* <Link
        to="/why-choose-green"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Why Choose Green?
      </Link> */}
      <Link
        to="/products"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Products
      </Link>
      <Link
        to="/trends"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Trends
      </Link>
      <Link
        to="/upcoming-events"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Upcoming Events
      </Link>
      <Link
        to="/contact"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase mr-[15px] hover:underline"
      >
        Contact
      </Link>
      <a
        href="tel:18003654080"
        className="text-xs font-medium box-border caret-transparent block leading-[19.2px] uppercase hover:underline"
      >
        1.800.365.4080
      </a>
    </nav>
  );
};
