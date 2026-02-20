import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const Contact = () => {
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
                Contact Us
              </span>
            </p>
            <p className="text-sm box-border caret-transparent leading-[28.8px] text-center mb-[22.4px] max-w-[800px] mx-auto md:text-lg md:leading-[32px]">
              <span className="text-xl box-border caret-transparent leading-[32px] text-white">
                Let's discuss your packaging needs
              </span>
            </p>
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full px-[25px] py-[50px] md:text-base md:leading-[25.6px] md:px-[85px]">
          
          {/* Contact Information and Form */}
          <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full mb-[80px] md:text-base md:leading-[25.6px]">
            
            {/* Contact Info */}
            <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pr-0 md:text-base md:leading-[25.6px] md:w-5/12 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-6 uppercase text-blue-600">
                Get In Touch
              </h2>
              <p className="text-base box-border caret-transparent leading-[25.6px] mb-8">
                Our packaging experts are ready to help you find the perfect solution for your products. Contact us today to get started.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-neutral-800">
                  Phone
                </h3>
                <p className="text-lg box-border caret-transparent leading-[28.8px] mb-2">
                  <a href="tel:18003654080" className="text-blue-600 hover:underline">
                    1.800.365.4080
                  </a>
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] text-neutral-600">
                  Monday - Friday: 9:00 AM - 5:00 PM EST
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-neutral-800">
                  Email
                </h3>
                <p className="text-lg box-border caret-transparent leading-[28.8px] mb-2">
                  <a href="mailto:info@expresstubes.com" className="text-blue-600 hover:underline">
                    info@expresstubes.com
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-neutral-800">
                  Address
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-1">
                  Express Tubes Inc.
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px] mb-1">
                  123 Packaging Way
                </p>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  New York, NY 10001
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-neutral-800">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/express-tubes-inc./" className="text-blue-600 hover:opacity-80 transition-opacity">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/ExpressTubes" className="text-blue-600 hover:opacity-80 transition-opacity">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/expresstubes/" className="text-blue-600 hover:opacity-80 transition-opacity">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] pl-0 md:text-base md:leading-[25.6px] md:w-7/12 md:mb-0 md:pl-10">
              <div className="bg-[#f5f5f5] p-8">
                <h2 className="text-2xl font-semibold box-border caret-transparent leading-[38.4px] mb-6 uppercase text-neutral-800">
                  Send Us A Message
                </h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium box-border caret-transparent leading-[22.4px] mb-2 uppercase text-neutral-800">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full text-base box-border caret-transparent leading-[25.6px] border border-neutral-300 px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium box-border caret-transparent leading-[22.4px] mb-2 uppercase text-neutral-800">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full text-base box-border caret-transparent leading-[25.6px] border border-neutral-300 px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium box-border caret-transparent leading-[22.4px] mb-2 uppercase text-neutral-800">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full text-base box-border caret-transparent leading-[25.6px] border border-neutral-300 px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium box-border caret-transparent leading-[22.4px] mb-2 uppercase text-neutral-800">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full text-base box-border caret-transparent leading-[25.6px] border border-neutral-300 px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="interest" className="block text-sm font-medium box-border caret-transparent leading-[22.4px] mb-2 uppercase text-neutral-800">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full text-base box-border caret-transparent leading-[25.6px] border border-neutral-300 px-4 py-3 focus:outline-none focus:border-blue-600"
                    >
                      <option value="">Please Select</option>
                      <option value="tubes">Tubes</option>
                      <option value="bottles">Bottles</option>
                      <option value="jars">Jars</option>
                      <option value="sustainable">Sustainable Packaging</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium box-border caret-transparent leading-[22.4px] mb-2 uppercase text-neutral-800">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full text-base box-border caret-transparent leading-[25.6px] border border-neutral-300 px-4 py-3 focus:outline-none focus:border-blue-600 resize-vertical"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#84b82e] text-white text-base font-semibold box-border caret-transparent leading-[25.6px] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Why Choose Us Section */}
          <div className="relative text-sm bg-[#f5f5f5] box-border caret-transparent clear-both leading-[22.4px] w-full py-[60px] px-[40px] mb-[80px] md:text-base md:leading-[25.6px]">
            <h2 className="text-3xl font-semibold box-border caret-transparent leading-[48px] mb-8 text-center uppercase text-neutral-800">
              Why Choose Express Tubes?
            </h2>
            <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-blue-600">
                  Low Minimums
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  Starting minimums of just 5,000 for tubes and 10,000 for bottles and jars.
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-blue-600">
                  Quick Turnaround
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  PPS in 2-3 weeks and full production in 30-35 days.
                </p>
              </div>
              <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] px-4 md:text-base md:leading-[25.6px] md:w-4/12 md:mb-0">
                <h3 className="text-xl font-semibold box-border caret-transparent leading-[32px] mb-4 uppercase text-blue-600">
                  Expert Support
                </h3>
                <p className="text-base box-border caret-transparent leading-[25.6px]">
                  Dedicated packaging experts to guide you through every step.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </body>
  );
};
