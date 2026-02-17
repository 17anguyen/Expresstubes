import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ExplorePackaging } from "@/pages/ExplorePackaging";
import { WhyChooseGreen } from "@/pages/WhyChooseGreen";
import { Products } from "@/pages/Products";
import { Trends } from "@/pages/Trends";
import { UpcomingEvents } from "@/pages/UpcomingEvents";
import { Contact } from "@/pages/Contact";

const HomePage = () => {
  return (
    <body className="text-neutral-600 text-sm not-italic normal-nums font-light accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-gotham_ssm_a md:text-base md:leading-[25.6px]">
      <div className="absolute text-sm bg-[#84b82e] box-border caret-transparent h-[110px] leading-[22.4px] w-full z-[-1] left-0 top-0 md:text-base md:leading-[25.6px]"></div>
      <Header />
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] mx-auto md:text-base md:leading-[25.6px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gotham_ssm_a after:md:text-base after:md:leading-[25.6px]">
        <Hero />
        <Features />
        <About />
      </div>
      <Footer />
      <ScrollToTop />
    </body>
  );
};

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore-packaging" element={<ExplorePackaging />} />
        <Route path="/why-choose-green" element={<WhyChooseGreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
