import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Image from "next/image";
import { HeroParallax } from "@/components/HeroParallax";
import Highlights from "@/components/Highlights";
import { VortexDemo } from "@/components/Vortex";

const products = [
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product1",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/cb533cbc490177112.png",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product2",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/223e39a3499898112.jpeg",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product1",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/cb533cbc490177112.png",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product2",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/223e39a3499898112.jpeg",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product1",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/cb533cbc490177112.png",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product2",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/223e39a3499898112.jpeg",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product1",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/cb533cbc490177112.png",
  },
  {
    title: "ERSTKLASSIGES DESIGN",
    link: "https://example.com/product2",
    thumbnail:
      "https://palazzo-altura-di-maria.de/file/i/223e39a3499898112.jpeg",
  },
];
const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
];
const contents = [
  {
    title: "Lage",
    description:
      "Der Palazzo Altura di Maria entsteht in einer bevorzugten Wohngegend in Nördlingen, die eine harmonische Verbindung von naturnaher Umgebung und der Nähe zur Stadt bietet. Genießen Sie die Ruhe und Privatsphäre eines naturnahen Standorts und profitieren Sie gleichzeitig von der Nähe zu Einkaufsmöglichkeiten, Restaurants und anderen urbanen Annehmlichkeiten.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Natur und Umfeld",
    description:
      "Die Wohnanlage Palazzo Altura Di Maria ist von einer idyllischen und naturnahen Umgebung umgeben. Grüne Wiesen oder nahegelegene Waldgebiete bieten die Möglichkeit für Spaziergänge, Joggen oder andere Aktivitäten im Freien. Genießen Sie die frische Luft und die Ruhe der Natur direkt vor Ihrer Haustür..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl text-center">Loki Music Academy</h1> */}
      <HeroParallax products={products} />
      <Instructors />
      <VortexDemo />
      <FeaturedCourses />
      <WhyChooseUs />
      <Highlights />
      <TestimonialCards />
      <UpcomingWebinars />
      <Footer />
    </main>
  );
}
