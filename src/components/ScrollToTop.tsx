export const ScrollToTop = () => {
  return (
    <a className="fixed text-sm box-border caret-transparent hidden leading-[22.4px] opacity-80 w-[50px] right-[25px] bottom-[25px] md:text-base md:leading-[25.6px]">
      <img
        src="/Content/Images/back-to-top-icon.png"
        alt="Back to Top"
        className="text-sm box-border caret-transparent leading-[22.4px] w-full md:text-base md:leading-[25.6px]"
      />
    </a>
  );
};
