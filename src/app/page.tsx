// import Image from "next/image";
// import Instructors from "@/components/Instructors";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import { HeroParallax } from "@/components/HeroParallax";
import Contact from "@/components/Contact/Contact";
import Highlights from "@/components/Highlights";
import { VortexDemo } from "@/components/Vortex";
import courseData from "@/data/music_courses.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl text-center">Loki Music Academy</h1> */}
      {/* <Instructors /> */}
      <HeroParallax
        products={[
          ...courseData.courses.slice(0, 5),
          ...courseData.courses.slice(0, 5),
        ]}
      />

      <VortexDemo />
      <FeaturedCourses />
      <WhyChooseUs />
      <Highlights />
      <TestimonialCards />
      <Contact />
      <UpcomingWebinars />
      <Footer />
    </main>
  );
}
