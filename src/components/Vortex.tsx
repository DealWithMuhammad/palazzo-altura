import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-0rem)] rounded-md  h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={1250}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center">
          ERSTKLASSIGES WOHNEN IM NATURNAHEN UMFELD NAHE DER STADT
        </h2>
        <p className="text-white text-sm md:text-xl max-w-5xl mt-6 text-center">
          Willkommen zu unserem Exposé über die Wohnanlage Palazzo Altura Di
          Maria, die erstklassiges Wohnen im naturnahen Umfeld in der Nähe der
          Stadt bietet. Diese exklusive Wohnanlage kombiniert hochwertige
          Wohnungen mit 70 qm bis 160 qm Wohnfläche, eine idyllische Umgebung
          und eine erstklassige Lage.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Contact Us
          </button>
          <button className="px-4 py-2  text-white ">Learn More</button>
        </div>
      </Vortex>
    </div>
  );
}
