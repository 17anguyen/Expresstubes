import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

export const WhyChooseGreen = () => {
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
                Why Choose Green?
              </span>
            </p>
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full px-[25px] py-[50px] md:text-base md:leading-[25.6px] md:px-[85px]">

          {/* Introduction */}
          <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[900px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] italic text-neutral-700">
                At Express Tubes, we're committed to sustainable packaging solutions that protect both your products and our planet.
              </span>
            </p>
          </div>

          {/* Green Benefits Section */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-8 text-center uppercase text-[#84b82e]">
              Our Green Commitment
            </h2>

            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">

              {/* Recyclable Materials */}
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    <img
                      src="data:image/png;base64,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"
                      alt="Recyclable Materials"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-[150px] mb-6 md:text-base md:leading-[25.6px]"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-blue-600">
                    100% Recyclable Materials
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    All our tubes, bottles, and jars are made from recyclable materials. We use PE, PP, and PET plastics that can be easily recycled, reducing environmental impact.
                  </p>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    <img
                      src="https://as1.ftcdn.net/jpg/05/02/19/34/1000_F_502193400_qsJijsE45Kgkr5wXbgQwbvy3XiWfO3a3.jpg"
                      alt="Recyclable Packaging"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                    />
                  </div>
                </div>
              </div>

              {/* PCR Content */}
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    {/* <img
                      src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/pcr-image.jpg"
                      alt="PCR Content"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                    /> */}
                  </div>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    {/* <img
                      src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/pcr-icon.png"
                      alt="PCR"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-[150px] mb-6 md:text-base md:leading-[25.6px]"
                    /> */}
                  </div>
                  <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-blue-600">
                    Post-Consumer Recycled Content
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    We offer packaging options with PCR (Post-Consumer Recycled) content, giving new life to previously used materials and closing the recycling loop.
                  </p>
                </div>
              </div>

              {/* Sustainable Manufacturing */}
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    {/* <img
                      src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/sustainable-icon.png"
                      alt="Sustainable Manufacturing"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-[150px] mb-6 md:text-base md:leading-[25.6px]"
                    /> */}
                  </div>
                  <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-blue-600">
                    Sustainable Manufacturing
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    Our manufacturing partners follow strict environmental standards, minimizing waste and energy consumption throughout the production process.
                  </p>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    {/* <img
                      src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/sustainable-image.jpg"
                      alt="Sustainable Manufacturing Process"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                    /> */}
                  </div>
                </div>
              </div>

              {/* Biodegradable Options */}
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    {/* <img
                      src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/biodegradable-image.jpg"
                      alt="Biodegradable Options"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                    /> */}
                  </div>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                    {/* <img
                      src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/biodegradable-icon.png"
                      alt="Biodegradable"
                      className="text-sm box-border caret-transparent leading-[22.4px] max-w-[150px] mb-6 md:text-base md:leading-[25.6px]"
                    /> */}
                  </div>
                  <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-blue-600">
                    Biodegradable Options
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    Explore our range of biodegradable packaging solutions that naturally break down over time, reducing long-term environmental impact.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Statistics Section */}
          <div className="relative text-sm bg-[#f5f5f5] box-border caret-transparent clear-both leading-[22.4px] w-full py-[60px] px-[40px] mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-8 text-center uppercase text-neutral-800">
              Our Environmental Impact
            </h2>
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] text-center md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-5xl font-bold box-border caret-transparent leading-[80px] mb-2 text-[#84b82e]">
                  100%
                </p>
                <p className="text-base font-medium box-border caret-transparent leading-[25.6px] uppercase">
                  Recyclable Materials
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] text-center md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-5xl font-bold box-border caret-transparent leading-[80px] mb-2 text-[#84b82e]">
                  50%+
                </p>
                <p className="text-base font-medium box-border caret-transparent leading-[25.6px] uppercase">
                  PCR Content Available
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] text-center md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-5xl font-bold box-border caret-transparent leading-[80px] mb-2 text-[#84b82e]">
                  30%
                </p>
                <p className="text-base font-medium box-border caret-transparent leading-[25.6px] uppercase">
                  Reduced Carbon Footprint
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-8 text-center uppercase text-neutral-800">
              Certifications & Standards
            </h2>
            <p className="text-base box-border caret-transparent leading-[25.6px] text-center mb-8 max-w-[800px] mx-auto">
              Our commitment to sustainability is backed by industry-recognized certifications and adherence to the highest environmental standards.
            </p>
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full text-center p-[3px] md:text-base md:leading-[25.6px]">
              {/* <img
                src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/certifications.png"
                alt="Environmental Certifications"
                className="text-sm box-border caret-transparent leading-[22.4px] max-w-[600px] mx-auto md:text-base md:leading-[25.6px]"
              /> */}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full text-center py-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[22.4px] mb-6 md:text-base md:leading-[25.6px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] font-medium">
                Ready to make the switch to sustainable packaging?
              </span>
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#84b82e] text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
