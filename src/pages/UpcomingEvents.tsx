import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const UpcomingEvents = () => {
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
                Upcoming Events
              </span>
            </p>
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[800px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-xl box-border caret-transparent leading-[32px] text-white">
                Join us at industry trade shows and events
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
                Meet our team at upcoming trade shows and industry events. We'd love to discuss your packaging needs in person.
              </span>
            </p>
          </div>

          {/* Events List */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
            
            {/* Event 1 */}
            <div className="relative text-sm bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] box-border caret-transparent clear-both leading-[22.4px] w-full mb-[40px] p-[40px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-3/12 md:mb-0 md:pr-10">
                  <div className="text-sm bg-[#84b82e] box-border caret-transparent leading-[22.4px] text-center p-6 md:text-base md:leading-[25.6px]">
                    <p className="text-white text-5xl font-bold box-border caret-transparent leading-[80px] mb-2">
                      15
                    </p>
                    <p className="text-white text-xl font-medium box-border caret-transparent leading-[32px] uppercase">
                      March
                    </p>
                    <p className="text-white text-base font-normal box-border caret-transparent leading-[25.6px]">
                      2026
                    </p>
                  </div>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-9/12 md:mb-0 md:pl-10">
                  <h3 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                    Cosmoprof North America
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Location:</strong> Las Vegas Convention Center, Las Vegas, NV
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Booth:</strong> #2145
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    Join us at North America's leading beauty trade show. Discover our latest sustainable packaging solutions and meet with our packaging experts to discuss your custom needs.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    Schedule a Meeting
                  </a>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative text-sm bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] box-border caret-transparent clear-both leading-[22.4px] w-full mb-[40px] p-[40px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-3/12 md:mb-0 md:pr-10">
                  <div className="text-sm bg-[#84b82e] box-border caret-transparent leading-[22.4px] text-center p-6 md:text-base md:leading-[25.6px]">
                    <p className="text-white text-5xl font-bold box-border caret-transparent leading-[80px] mb-2">
                      22
                    </p>
                    <p className="text-white text-xl font-medium box-border caret-transparent leading-[32px] uppercase">
                      April
                    </p>
                    <p className="text-white text-base font-normal box-border caret-transparent leading-[25.6px]">
                      2026
                    </p>
                  </div>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-9/12 md:mb-0 md:pl-10">
                  <h3 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                    Natural Products Expo West
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Location:</strong> Anaheim Convention Center, Anaheim, CA
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Booth:</strong> #3782
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    The world's largest natural, organic and healthy products event. See our eco-friendly packaging solutions including PCR content options and biodegradable materials.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    Schedule a Meeting
                  </a>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative text-sm bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] box-border caret-transparent clear-both leading-[22.4px] w-full mb-[40px] p-[40px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-3/12 md:mb-0 md:pr-10">
                  <div className="text-sm bg-[#84b82e] box-border caret-transparent leading-[22.4px] text-center p-6 md:text-base md:leading-[25.6px]">
                    <p className="text-white text-5xl font-bold box-border caret-transparent leading-[80px] mb-2">
                      10
                    </p>
                    <p className="text-white text-xl font-medium box-border caret-transparent leading-[32px] uppercase">
                      June
                    </p>
                    <p className="text-white text-base font-normal box-border caret-transparent leading-[25.6px]">
                      2026
                    </p>
                  </div>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-9/12 md:mb-0 md:pl-10">
                  <h3 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                    Luxe Pack New York
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Location:</strong> Javits Center, New York, NY
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Booth:</strong> #1520
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    The premier event for creative packaging. Explore our luxury packaging options including aluminum tubes, premium finishes, and innovative design solutions.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    Schedule a Meeting
                  </a>
                </div>
              </div>
            </div>

            {/* Event 4 */}
            <div className="relative text-sm bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] box-border caret-transparent clear-both leading-[22.4px] w-full mb-[40px] p-[40px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-3/12 md:mb-0 md:pr-10">
                  <div className="text-sm bg-[#84b82e] box-border caret-transparent leading-[22.4px] text-center p-6 md:text-base md:leading-[25.6px]">
                    <p className="text-white text-5xl font-bold box-border caret-transparent leading-[80px] mb-2">
                      18
                    </p>
                    <p className="text-white text-xl font-medium box-border caret-transparent leading-[32px] uppercase">
                      September
                    </p>
                    <p className="text-white text-base font-normal box-border caret-transparent leading-[25.6px]">
                      2026
                    </p>
                  </div>
                </div>
                <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-9/12 md:mb-0 md:pl-10">
                  <h3 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-4 uppercase text-blue-600">
                    Pack Expo International
                  </h3>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Location:</strong> McCormick Place, Chicago, IL
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-3">
                    <strong>Booth:</strong> #4521
                  </p>
                  <p className="text-base box-border caret-transparent leading-[25.6px] mb-4">
                    The largest packaging trade show in North America. See our complete range of tubes, bottles, and jars, plus learn about our latest innovations in sustainable packaging.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold box-border caret-transparent leading-[22.4px] uppercase px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    Schedule a Meeting
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Past Events Section */}
          <div className="relative text-sm bg-[#f5f5f5] box-border caret-transparent clear-both leading-[22.4px] w-full py-[60px] px-[40px] mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-8 text-center uppercase text-neutral-800">
              Past Events
            </h2>
            <p className="text-base box-border caret-transparent leading-[25.6px] text-center mb-6 max-w-[800px] mx-auto">
              Thank you to everyone who visited us at our recent events. We look forward to seeing you at our upcoming shows!
            </p>
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 text-center md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-2 text-neutral-800">
                  Beauty Expo 2025
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] text-neutral-600">
                  Miami, FL
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 text-center md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-2 text-neutral-800">
                  Sustainable Packaging Summit
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] text-neutral-600">
                  San Francisco, CA
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 text-center md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <p className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-2 text-neutral-800">
                  Cosmoprof Worldwide
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] text-neutral-600">
                  Bologna, Italy
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full text-center py-[50px] md:text-base md:leading-[25.6px]">
            <p className="text-sm box-border caret-transparent leading-[22.4px] mb-6 md:text-base md:leading-[25.6px]">
              <span className="text-2xl box-border caret-transparent leading-[38.4px] font-medium">
                Want to meet us at an upcoming event?
              </span>
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#84b82e] text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Contact Us to Schedule
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
