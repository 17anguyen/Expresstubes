import { AboutContent } from "@/sections/About/components/AboutContent";

export const About = () => {
  return (
    <div className="relative text-sm bg-[url('https://dms.channelready.com/Assets/Media/25/Image/blue-background-v5.jpg')] bg-no-repeat bg-cover box-border caret-transparent clear-both leading-[22.4px] w-full bg-center px-[25px] md:text-base md:leading-[25.6px] md:px-[85px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
      <AboutContent />
    </div>
  );
};
