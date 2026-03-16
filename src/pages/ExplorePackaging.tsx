import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

export const ExplorePackaging = () => {
  return (
    <body className="text-neutral-600 text-sm not-italic normal-nums font-light accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-gotham_ssm_a md:text-base md:leading-[25.6px]">
      <div className="absolute text-sm bg-[#84b82e] box-border caret-transparent h-[110px] leading-[22.4px] w-full z-[-1] left-0 top-0 md:text-base md:leading-[25.6px]"></div>
      <Header />

      <div className="relative text-sm box-border caret-transparent leading-[22.4px] mx-auto md:text-base md:leading-[25.6px]">
        {/* Hero Section */}
        <div className="relative text-sm bg-gradient-to-b from-[#5b8fc4] to-[#7ba9d4] box-border caret-transparent clear-both leading-[22.4px] min-h-[400px] w-full pt-[110px] px-[25px] md:text-base md:leading-[25.6px] md:min-h-[500px] md:px-[85px]">
          <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] md:text-base md:leading-[25.6px] md:mb-0">
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
            <p className="text-sm box-border caret-transparent leading-[22.4px] text-center mb-[22.4px] md:text-base md:leading-[25.6px]">
              <span className="text-[48px] box-border caret-transparent leading-[76.8px] font-medium text-white uppercase">
                Explore Packaging
              </span>
            </p>
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
          </div>
          <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[900px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] italic">
                Explore Packaging offers you personalized customer care through every stage of your product delivery lifecycle.
              </span>
            </p>
          </div>
        </div>
        {/* Timeline */}
        <div className="relative w-full px-6 md:px-[85px] py-10">
          <div className="max-w-4xl mx-auto">
            {/* Vertical left line — centered on the dot (dot is 48px wide, so line at 24px from left of the padded container) */}
            <div className="absolute left-[24px] top-0 bottom-0 w-[3px] bg-blue-200"></div>

            {/* Steps */}
            {[
              {
                step: "01",
                label: "Discover",
                text: "Our team works with you to understand your brand, product requirements, and packaging goals. We help you explore options and find the perfect packaging solution.",
              },
              {
                step: "02",
                label: "Design",
                text: "Our design experts collaborate with you to create stunning packaging that reflects your brand identity and stands out on the shelf.",
              },
              {
                step: "03",
                label: "Develop",
                text: "We create pre-production samples for your approval, ensuring every detail meets your specifications before full production begins.",
              },
              {
                step: "04",
                label: "Deliver",
                text: "Your packaging is manufactured to the highest quality standards and delivered on time, ready to showcase your products.",
              },
            ].map(({ step, label, text }) => (
              <div key={step} className="relative flex items-start mb-14 md:mb-20">

                {/* Step dot — sits on the vertical line */}
                <div className="flex-shrink-0 z-10 w-12 h-12 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  {step}
                </div>

                {/* Content card + image to the right of the dot */}
                <div className="flex flex-col md:flex-row gap-6 w-full ml-6 md:ml-10">
                  <div className="bg-white rounded-xl shadow-md p-8 md:max-w-[420px] w-full">
                    <h2 className="text-2xl font-semibold uppercase text-blue-600 mb-3">{label}</h2>
                    <p className="text-base leading-relaxed text-neutral-600">{text}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full text-center py-[50px] md:text-base md:leading-[25.6px]">
          <p className="text-sm box-border caret-transparent leading-[22.4px] mb-6 md:text-base md:leading-[25.6px]">
            <span className="text-2xl box-border caret-transparent leading-[38.4px] font-medium">
              Ready to explore your packaging options?
            </span>
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#84b82e] text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Contact Us Today
          </a>
        </div>

      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
