import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="relative text-white text-sm bg-[#84b82e] box-border caret-transparent leading-[22.4px] mx-auto md:text-base md:leading-[25.6px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full pt-[60px] pb-20 px-[25px] md:text-base md:leading-[25.6px] md:pb-[180px] md:px-[85px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
        <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] md:text-base md:leading-[25.6px] md:mb-0">
          <FooterNav />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
