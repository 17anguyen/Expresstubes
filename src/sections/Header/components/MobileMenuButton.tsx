export const MobileMenuButton = () => {
  return (
    <button className="absolute text-sm bg-white shadow-[rgba(0,0,0,0.3)_1px_1px_5px_1px] box-border caret-transparent h-[62px] leading-[62px] text-center w-[62px] rounded-[50%] right-0 top-[5px] flex items-center justify-center md:text-base md:hidden">
      <svg
        className="w-6 h-6 text-lime-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};
