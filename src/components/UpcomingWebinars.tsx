"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Was ist das Palazzo Altura Di Maria?",
      description:
        "Das Palazzo Altura Di Maria ist eine exklusive Wohnanlage, die erstklassiges Wohnen im naturnahen Umfeld in der Nähe der Stadt bietet.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Welche Wohnungsgrößen werden angeboten?",
      description:
        "Die Wohnungen in Palazzo Altura Di Maria bieten eine Vielfalt von 53 qm bis 163 qm Wohnfläche, um den unterschiedlichen Bedürfnissen gerecht zu werden.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Welche Highlights bietet das Palazzo Altura Di Maria?",
      description:
        "Das Palazzo Altura Di Maria bietet erstklassiges Design, hochwertige Ausstattung, einen erstklassigen Dachgarten und eine erstklassige Garage mit Ladeanschlüssen für Elektrofahrzeuge.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Welche Annehmlichkeiten bietet die Lage?",
      description:
        "Die Wohnanlage liegt in einer bevorzugten Wohngegend in Nördlingen, die eine harmonische Verbindung von naturnaher Umgebung und der Nähe zur Stadt bietet. Grüne Wiesen und nahegelegene Waldgebiete laden zu Aktivitäten im Freien ein.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    {
      title: "Wie kann ich mehr über diese Immobilie erfahren?",
      description:
        "Sie können sich telefonisch unter 0160 4603901 melden oder das Kontaktformular ausfüllen, um weitere Informationen zu erhalten.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FAQs
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Häufig gestellte Fragen
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
