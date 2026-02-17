export type NavItemProps = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
  additionalClassName?: string;
};

export const NavItem = (props: NavItemProps) => {
  return (
    <div
      className={`relative text-sm box-border caret-transparent hidden leading-[16.8px] mr-[35px] md:block md:text-base md:leading-[19.2px]${props.additionalClassName ? ` ${props.additionalClassName}` : ""}`}
    >
      <a
        href={props.href}
        className="text-white text-xs font-medium box-border caret-transparent leading-[14.4px] text-center uppercase hover:opacity-80 transition-opacity"
      >
        {props.label}
      </a>
      {props.hasDropdown && props.dropdownItems && (
        <div className="absolute text-sm bg-white/90 shadow-[rgba(0,0,0,0.3)_1px_1px_5px_1px] box-border caret-transparent hidden group-hover:block leading-[16.8px] mt-4 px-5 py-[15px] md:text-base md:leading-[19.2px] z-10">
          <nav className="text-sm box-border caret-transparent leading-[16.8px] md:text-base md:leading-[19.2px]">
            {props.dropdownItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[10.4px] font-medium box-border caret-transparent block leading-[18.72px] text-left uppercase text-nowrap hover:underline text-neutral-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
