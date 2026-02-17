import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

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
        </div>

        {/* Main Content */}
        <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full px-[25px] py-[50px] md:text-base md:leading-[25.6px] md:px-[85px]">
          {/* Introduction */}
          <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[900px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] italic">
                Explore Packaging offers you personalized customer care through every stage of your product delivery lifecycle.
              </span>
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">

            {/* Step 1: Discover */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/discover-icon.png"
                    alt="Discover"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-[200px] mb-6 md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
                <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                  Discover
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Our team works with you to understand your brand, product requirements, and packaging goals. We help you explore options and find the perfect packaging solution.
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/discover-image.jpg"
                    alt="Discover Process"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/design-image.jpg"
                    alt="Design Process"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/design-icon.png"
                    alt="Design"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-[200px] mb-6 md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
                <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                  Design
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Our design experts collaborate with you to create stunning packaging that reflects your brand identity and stands out on the shelf.
                </p>
              </div>
            </div>

            {/* Step 3: Develop */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/develop-icon.png"
                    alt="Develop"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-[200px] mb-6 md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
                <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                  Develop
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  We create pre-production samples for your approval, ensuring every detail meets your specifications before full production begins.
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/develop-image.jpg"
                    alt="Develop Process"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
            </div>

            {/* Step 4: Deliver */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/deliver-image.jpg"
                    alt="Deliver Process"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/deliver-icon.png"
                    alt="Deliver"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-[200px] mb-6 md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
                <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                  Deliver
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Your packaging is manufactured to the highest quality standards and delivered on time, ready to showcase your products.
                </p>
              </div>
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
      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
