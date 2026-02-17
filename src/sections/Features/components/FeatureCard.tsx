export type FeatureCardProps = {
  text: string;
  containerVariant: string;
  span1Variant: string;
  span2Variant: string;
  span3Variant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <p
      className={`text-white text-sm bg-blue-500 bg-none box-border caret-transparent leading-[22.4px] mb-[22.4px] px-8 py-4 md:text-base md:bg-transparent md:leading-[25.6px] ${props.containerVariant}`}
    >
      <span className={`box-border caret-transparent ${props.span1Variant}`}>
        <span className={`box-border caret-transparent ${props.span2Variant}`}>
          <span
            className={`box-border caret-transparent ${props.span3Variant}`}
          >
            {props.text}
          </span>
        </span>
      </span>
    </p>
  );
};
