import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const Trends = () => {
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
                Packaging Trends
              </span>
            </p>
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[800px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-xl box-border caret-transparent leading-[32px] text-white">
                Stay ahead with the latest innovations in packaging design and technology
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
                Discover the cutting-edge trends shaping the future of packaging. From sustainable materials to innovative designs, we're at the forefront of packaging evolution.
              </span>
            </p>
          </div>

          {/* Featured Trends */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">

            {/* Mono Packaging */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/mono-packaging-image.jpg"
                    alt="Mono Packaging"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-6 uppercase text-blue-600">
                  Mono Packaging
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Mono-material packaging is revolutionizing the industry by using a single type of plastic throughout the entire package. This approach dramatically improves recyclability and reduces environmental impact.
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  By eliminating mixed materials, mono packaging ensures that tubes, bottles, and jars can be easily sorted and recycled in existing recycling streams.
                </p>
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-3 uppercase text-neutral-800">
                  Key Benefits:
                </h3>
                <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-6">
                  <li className="mb-2">Enhanced recyclability</li>
                  <li className="mb-2">Simplified sorting process</li>
                  <li className="mb-2">Reduced environmental footprint</li>
                  <li className="mb-2">Meets circular economy goals</li>
                  <li className="mb-2">Consumer-friendly sustainability</li>
                </ul>
                <a
                  href="/mono-packaging"
                  className="inline-block bg-blue-600 text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                >
                  Learn More About Mono Packaging
                </a>
              </div>
            </div>

            {/* Fine Mist Sprayer Tubes */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/fine-mist-sprayer-image.jpg"
                    alt="Fine Mist Sprayer Tubes"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-6 uppercase text-blue-600">
                  Fine Mist Sprayer Tubes
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  The latest innovation in tube packaging combines the convenience of tubes with the precision of fine mist sprayers. Perfect for skincare, sunscreen, and beauty products.
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  This hybrid solution offers controlled application, reduced product waste, and an enhanced user experience that consumers love.
                </p>
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-3 uppercase text-neutral-800">
                  Key Features:
                </h3>
                <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-6">
                  <li className="mb-2">Even, controlled application</li>
                  <li className="mb-2">Reduced product waste</li>
                  <li className="mb-2">Hygienic, no-touch dispensing</li>
                  <li className="mb-2">Premium user experience</li>
                  <li className="mb-2">Ideal for liquid and lotion formulations</li>
                </ul>
                <a
                  href="/fine-mist-sprayer-tubes"
                  className="inline-block bg-blue-600 text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                >
                  Explore Fine Mist Sprayers
                </a>
              </div>
            </div>

            {/* Sustainable Materials */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/sustainable-materials-image.jpg"
                    alt="Sustainable Materials"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-6 uppercase text-[#84b82e]">
                  Sustainable Materials
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  The shift toward sustainable packaging materials is accelerating. Brands are increasingly choosing PCR (Post-Consumer Recycled) content, bio-based plastics, and fully recyclable materials.
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  We offer a comprehensive range of eco-friendly options that don't compromise on quality or aesthetics.
                </p>
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-3 uppercase text-neutral-800">
                  Available Options:
                </h3>
                <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-6">
                  <li className="mb-2">PCR content up to 100%</li>
                  <li className="mb-2">Bio-based plastics</li>
                  <li className="mb-2">Ocean-bound plastic alternatives</li>
                  <li className="mb-2">Biodegradable materials</li>
                  <li className="mb-2">FSC-certified paper components</li>
                </ul>
                <a
                  href="/why-choose-green"
                  className="inline-block bg-[#84b82e] text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                >
                  Discover Green Options
                </a>
              </div>
            </div>

            {/* Minimalist Design */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/minimalist-design-image.jpg"
                    alt="Minimalist Design"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-6 uppercase text-blue-600">
                  Minimalist Design
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Clean, simple packaging design continues to dominate the market. Minimalist aesthetics communicate transparency, purity, and sophistication.
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  This trend emphasizes essential information, clean typography, and strategic use of white space to create impactful shelf presence.
                </p>
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-3 uppercase text-neutral-800">
                  Design Elements:
                </h3>
                <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-6">
                  <li className="mb-2">Clean, uncluttered layouts</li>
                  <li className="mb-2">Limited color palettes</li>
                  <li className="mb-2">Simple, elegant typography</li>
                  <li className="mb-2">Strategic white space</li>
                  <li className="mb-2">Focus on product transparency</li>
                </ul>
              </div>
            </div>

            {/* Smart Packaging */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                  {/* <img
                    src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/smart-packaging-image.jpg"
                    alt="Smart Packaging"
                    className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                  /> */}
                </div>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-6 uppercase text-blue-600">
                  Smart Packaging
                </h2>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Technology integration in packaging is creating new opportunities for brand engagement. QR codes, NFC tags, and AR experiences connect physical products to digital content.
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                  Smart packaging enhances consumer interaction, provides product authentication, and enables supply chain transparency.
                </p>
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-3 uppercase text-neutral-800">
                  Technology Features:
                </h3>
                <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-6">
                  <li className="mb-2">QR codes for product information</li>
                  <li className="mb-2">NFC tags for authentication</li>
                  <li className="mb-2">AR experiences</li>
                  <li className="mb-2">Track and trace capabilities</li>
                  <li className="mb-2">Interactive consumer engagement</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Industry Insights */}
          <div className="relative text-sm bg-[#f5f5f5] box-border caret-transparent clear-both leading-[22.4px] w-full py-[60px] px-[40px] mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-8 text-center uppercase text-neutral-800">
              Industry Insights
            </h2>
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-5xl font-bold box-border caret-transparent leading-[80px] mb-2 text-blue-600">
                  73%
                </p>
                <p className="text-base font-medium box-border caret-transparent leading-[25.6px]">
                  of consumers prefer sustainable packaging
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-5xl font-bold box-border caret-transparent leading-[80px] mb-2 text-blue-600">
                  85%
                </p>
                <p className="text-base font-medium box-border caret-transparent leading-[25.6px]">
                  of brands are investing in eco-friendly materials
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-5xl font-bold box-border caret-transparent leading-[80px] mb-2 text-blue-600">
                  92%
                </p>
                <p className="text-base font-medium box-border caret-transparent leading-[25.6px]">
                  of consumers read packaging labels before purchase
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full text-center py-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[22.4px] mb-6 md:text-base md:leading-[25.6px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] font-medium">
                Ready to embrace the latest packaging trends?
              </span>
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#84b82e] text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity mr-4"
            >
              Contact Our Team
            </a>
            <a
              href="/products"
              className="inline-block bg-blue-600 text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
            >
              View Products
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
