import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <div className="relative text-sm bg-gradient-to-b from-[#5b8fc4] to-[#7ba9d4] bg-no-repeat bg-cover box-border caret-transparent clear-both leading-[22.4px] min-h-[600px] w-full bg-center pt-[110px] px-[25px] md:text-base md:leading-[25.6px] md:min-h-[800px] md:px-[85px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
      <HeroContent />
    </div>
  );
};
