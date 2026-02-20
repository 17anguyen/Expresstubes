import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const Products = () => {
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
                Products
              </span>
            </p>
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[800px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-xl box-border caret-transparent leading-[32px] text-white">
                Discover our comprehensive range of custom packaging solutions
              </span>
            </p>
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full px-[25px] py-[50px] md:text-base md:leading-[25.6px] md:px-[85px]">

          {/* Product Categories */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">

            {/* Tubes Section */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-8 text-center uppercase text-blue-600">
                Tubes
              </h2>
              <p className="text-base box-border caret-transparent leading-[25.6px] text-center mb-12 max-w-[800px] mx-auto">
                Our custom tubes are perfect for cosmetics, pharmaceuticals, food products, and more. Available in various sizes, materials, and finishes.
              </p>

              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">

                {/* Laminate Tubes */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      {/* <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/laminate-tubes.jpg"
                        alt="Laminate Tubes"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      /> */}
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      Laminate Tubes
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Multi-layer laminate tubes offer excellent barrier properties and are ideal for products requiring extended shelf life. Available with various printing options.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">Superior barrier protection</li>
                      <li className="mb-2">High-quality printing capabilities</li>
                      <li className="mb-2">Customizable sizes and shapes</li>
                      <li className="mb-2">Various cap options available</li>
                    </ul>
                    <a
                      href="/catalog/tubes/laminate"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

                {/* Plastic Tubes */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      {/* <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/plastic-tubes.jpg"
                        alt="Plastic Tubes"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      /> */}
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      Plastic Tubes
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Durable and versatile plastic tubes made from PE or PP materials. Perfect for a wide range of applications with excellent squeeze-ability.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">100% recyclable materials</li>
                      <li className="mb-2">Excellent product compatibility</li>
                      <li className="mb-2">Cost-effective solution</li>
                      <li className="mb-2">Available with PCR content</li>
                    </ul>
                    <a
                      href="/catalog/tubes/plastic"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

                {/* Aluminum Tubes */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      {/* <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/aluminum-tubes.jpg"
                        alt="Aluminum Tubes"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      /> */}
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      Aluminum Tubes
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Premium aluminum tubes provide the ultimate barrier protection and a luxurious feel. Ideal for high-end cosmetics and pharmaceutical products.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">Maximum barrier protection</li>
                      <li className="mb-2">Premium appearance</li>
                      <li className="mb-2">100% recyclable</li>
                      <li className="mb-2">Excellent for sensitive formulations</li>
                    </ul>
                    <a
                      href="/catalog/tubes/aluminum"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottles Section */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-8 text-center uppercase text-blue-600">
                Bottles
              </h2>
              <p className="text-base box-border caret-transparent leading-[25.6px] text-center mb-12 max-w-[800px] mx-auto">
                Custom plastic bottles in a variety of shapes, sizes, and materials. Perfect for personal care, beauty, and household products.
              </p>

              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">

                {/* PET Bottles */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/pet-bottles.jpg"
                        alt="PET Bottles"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      PET Bottles
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Lightweight and crystal-clear PET bottles offer excellent clarity and are perfect for showcasing your products. Fully recyclable and available with PCR content.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">Crystal-clear transparency</li>
                      <li className="mb-2">Lightweight and shatter-resistant</li>
                      <li className="mb-2">100% recyclable</li>
                      <li className="mb-2">Wide range of sizes and shapes</li>
                    </ul>
                    <a
                      href="/catalog/bottles/pet"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

                {/* HDPE Bottles */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/hdpe-bottles.jpg"
                        alt="HDPE Bottles"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      HDPE Bottles
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Durable HDPE bottles provide excellent chemical resistance and are ideal for a wide range of products including lotions, shampoos, and household cleaners.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">Excellent chemical resistance</li>
                      <li className="mb-2">Impact-resistant and durable</li>
                      <li className="mb-2">Available in natural or colored</li>
                      <li className="mb-2">PCR options available</li>
                    </ul>
                    <a
                      href="/catalog/bottles/hdpe"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Jars Section */}
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[100px] md:text-base md:leading-[25.6px]">
              <h2 className="text-4xl font-semibold box-border caret-transparent leading-[64px] mb-8 text-center uppercase text-blue-600">
                Jars
              </h2>
              <p className="text-base box-border caret-transparent leading-[25.6px] text-center mb-12 max-w-[800px] mx-auto">
                Premium plastic jars for creams, balms, and other thick formulations. Available in various sizes with multiple closure options.
              </p>

              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">

                {/* PP Jars */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 order-2 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10 md:order-1">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/pp-jars.jpg"
                        alt="PP Jars"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 order-1 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10 md:order-2">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      Polypropylene Jars
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Versatile PP jars offer excellent clarity and chemical resistance. Perfect for creams, lotions, and other cosmetic formulations.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">High clarity and gloss</li>
                      <li className="mb-2">Chemical resistant</li>
                      <li className="mb-2">Wide mouth for easy filling</li>
                      <li className="mb-2">Multiple closure options</li>
                    </ul>
                    <a
                      href="/catalog/jars/pp"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

                {/* PET Jars */}
                <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[60px] md:text-base md:leading-[25.6px]">
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pr-10">
                    <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full p-[3px] md:text-base md:leading-[25.6px]">
                      <img
                        src="https://c.animaapp.com/mlhq4evaFT0BfQ/assets/pet-jars.jpg"
                        alt="PET Jars"
                        className="text-sm box-border caret-transparent leading-[22.4px] max-w-full md:text-base md:leading-[25.6px]"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-6/12 md:mb-0 md:pl-10">
                    <h3 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-4 uppercase text-neutral-800">
                      PET Jars
                    </h3>
                    <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                      Crystal-clear PET jars provide excellent product visibility and are lightweight yet durable. Ideal for showcasing premium formulations.
                    </p>
                    <ul className="text-base box-border caret-transparent leading-[25.6px] list-disc pl-6 mb-4">
                      <li className="mb-2">Exceptional clarity</li>
                      <li className="mb-2">Lightweight and shatter-resistant</li>
                      <li className="mb-2">100% recyclable</li>
                      <li className="mb-2">Premium appearance</li>
                    </ul>
                    <a
                      href="/catalog/jars/pet"
                      className="inline-block text-blue-600 text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Customization Options */}
          <div className="relative text-sm bg-[#f5f5f5] box-border caret-transparent clear-both leading-[22.4px] w-full py-[60px] px-[40px] mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-8 text-center uppercase text-neutral-800">
              Customization Options
            </h2>
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-blue-600">
                  Printing
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  Offset, silk screen, hot stamping, and digital printing options available for stunning graphics.
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-blue-600">
                  Colors
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  Custom color matching available. Choose from standard colors or create your own unique shade.
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-blue-600">
                  Finishes
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  Matte, glossy, soft-touch, metallic, and specialty finishes to enhance your brand.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full text-center py-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[22.4px] mb-6 md:text-base md:leading-[25.6px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] font-medium">
                Ready to create your custom packaging?
              </span>
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#84b82e] text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
