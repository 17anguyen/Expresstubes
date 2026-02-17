import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Create mailto link with form data
    const mailtoLink = `mailto:aliviaxuanthomas@gmail.com?subject=${encodeURIComponent(`Contact Form: ${data.subject}`)}&body=${encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || 'N/A'}\n` +
      `Company: ${data.company || 'N/A'}\n` +
      `Subject: ${data.subject}\n\n` +
      `Message:\n${data.message}`
    )}`;

    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };





  return (
    <body className="text-neutral-600 text-sm not-italic normal-nums font-light accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-gotham_ssm_a md:text-base md:leading-[25.6px]">
      <div className="absolute text-sm bg-[#84b82e] box-border caret-transparent h-[110px] leading-[22.4px] w-full z-[-1] left-0 top-0 md:text-base md:leading-[25.6px]"></div>
      <Header />
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] mx-auto md:text-base md:leading-[25.6px]">
        <div className="relative text-sm bg-gradient-to-b from-[#5b8fc4] to-[#7ba9d4] box-border caret-transparent clear-both leading-[22.4px] min-h-[400px] w-full pt-[110px] px-[25px] md:text-base md:leading-[25.6px] md:px-[85px]">
          <div className="relative text-sm box-border caret-transparent float-left leading-[22.4px] w-full mb-[25px] md:text-base md:leading-[25.6px] md:mb-0">
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
            <p className="text-sm box-border caret-transparent leading-[22.4px] text-center mb-[22.4px] md:text-base md:leading-[25.6px]">
              <span className="text-[40px] box-border caret-transparent leading-[64px]">
                <span className="font-medium box-border caret-transparent">
                  <span className="text-white box-border caret-transparent">
                    CONTACT US
                  </span>
                </span>
              </span>
            </p>
            <div className="relative text-sm box-border caret-transparent h-[50px] leading-[22.4px] w-full md:text-base md:leading-[25.6px]"></div>
          </div>
        </div>

        <div className="relative text-sm box-border caret-transparent clear-both leading-[22.4px] w-full px-[25px] py-[50px] md:text-base md:leading-[25.6px] md:px-[85px]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <p className="text-base mb-8">
                  Have questions about our products or services? Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="tubes">Tubes</option>
                      <option value="bottles">Bottles</option>
                      <option value="jars">Jars</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#84b82e] text-white font-semibold px-8 py-4 rounded uppercase hover:opacity-90 transition-opacity disabled:opacity-70"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? "Thank you we will return your message shortly!" : "Send Message"}
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-base">
                      <a href="tel:18003654080" className="text-blue-600 hover:underline">
                        253.850.5270
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-base">
                      <a href="mailto:info@expresstubes.com" className="text-blue-600 hover:underline">
                        info@expresstubes.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-base">
                      Express Tubes<br />
                      8655 So. 208th St.<br />
                      Kent, WA 98031<br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                    <p className="text-base">
                      Monday - Friday: 7:30 AM - 4:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/express-tubes-inc./"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <span className="text-xl">in</span>
                    </a>
                    <a
                      href="https://twitter.com/ExpressTubes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    >
                      <span className="text-xl">𝕏</span>
                    </a>
                    <a
                      href="https://www.instagram.com/expresstubes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    >
                      <span className="text-xl">📷</span>
                    </a>
                  </div>
                </div>
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
