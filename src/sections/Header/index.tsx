import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="absolute text-sm box-border caret-transparent h-[110px] leading-[22.4px] w-full z-[1] mx-auto left-0 top-0 md:text-base md:leading-[25.6px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
      <Navbar />
    </header>
  );
};
