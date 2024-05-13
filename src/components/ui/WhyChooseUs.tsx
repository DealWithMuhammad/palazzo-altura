"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const musicAcademyContent = [
  {
    title: "DDIE LAGE",
    description:
      "Der Palazzo Altura di Maria entsteht in einer bevorzugten Wohngegend in Nördlingen, die eine harmonische Verbindung von naturnaher Umgebung und der Nähe zur Stadt bietet. Genießen Sie die Ruhe und Privatsphäre eines naturnahen Standorts und profitieren Sie gleichzeitig von der Nähe zu Einkaufsmöglichkeiten, Restaurants und anderen urbanen Annehmlichkeiten.",
  },
  {
    title: "Natur und Umfeld",
    description:
      "Die Wohnanlage Palazzo Altura Di Maria ist von einer idyllischen und naturnahen Umgebung umgeben. Grüne Wiesen oder nahegelegene Waldgebiete bieten die Möglichkeit für Spaziergänge, Joggen oder andere Aktivitäten im Freien. Genießen Sie die frische Luft und die Ruhe der Natur direkt vor Ihrer Haustür.",
  },
];

function WhyChooseUs() {
  return (
    <div id="lage">
      <StickyScroll content={musicAcademyContent} />
    </div>
  );
}

export default WhyChooseUs;
