import { NavItem } from "@/sections/Header/components/NavItem";

export const DesktopMenu = () => {
  return (
    <nav className="text-sm items-center box-border caret-transparent inline-flex leading-[22.4px] w-[calc(100%_-_102px)] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent shrink-0 h-[67px] leading-[16.8px] w-[234px] overflow-hidden mr-[35px] md:text-base md:leading-[19.2px]">
        <a href="/home" className="block h-full w-full">
          <img
            src="https://expresstubes.com/content/Images/exp-white-logo22.png"
            alt="ExpressTubes - Experts in custom packaging"
            className="h-full w-full object-contain"
          />
        </a>
      </div>
      <NavItem label="Explore Packaging" href="/explore-packaging" />
      <NavItem
        label="Why Choose Green?"
        href="/why-choose-green"
        hasDropdown={true}
        dropdownItems={[
          { label: "Overview", href: "/why-choose-green" },
          { label: "Choose Green", href: "/choose-green" },
          { label: "Sustainable Options", href: "/sustainable-options" },
        ]}
      />
      <NavItem
        label="Products"
        href="/products"
        hasDropdown={true}
        dropdownItems={[
          { label: "Overview", href: "/products" },
          { label: "Tubes", href: "/catalog/tubes" },
          { label: "Bottles", href: "/catalog/bottles" },
          { label: "Jars", href: "/catalog/jars" },
        ]}
      />
      <NavItem
        label="Trends"
        href="/trends"
        hasDropdown={true}
        dropdownItems={[
          { label: "Overview", href: "/trends" },
          { label: "Mono Packaging", href: "/mono-packaging" },
          {
            label: "Fine Mist Sprayer Tubes",
            href: "/fine-mist-sprayer-tubes",
          },
        ]}
      />
      <NavItem
        label="Upcoming Events"
        href="/upcoming-events"
        additionalClassName="ml-auto"
      />
      <NavItem
        label="Contact"
        href="/contact"
        hasDropdown={true}
        dropdownItems={[
          { label: "Contact Us", href: "/contact" },
          { label: "News", href: "/news" },
          { label: "Credits", href: "/credits" },
        ]}
      />
      <a
        href="tel:18003654080"
        className="relative text-white text-xs font-medium box-border caret-transparent hidden leading-[19.2px] min-h-0 min-w-0 text-center uppercase ml-0 hover:opacity-80 transition-opacity md:block md:min-h-[auto] md:min-w-[auto] md:ml-auto"
      >
        1.800.365.4080
      </a>
    </nav>
  );
};
