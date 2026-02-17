import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full pt-[35px] px-[25px] md:text-base md:leading-[25.6px] md:px-[85px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] md:text-base md:leading-[25.6px] md:mb-0">
        <DesktopMenu />
        <MobileMenuButton />
      </div>
    </div>
  );
};
