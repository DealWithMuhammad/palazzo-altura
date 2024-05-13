"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Photo() {
  // Assume images is an array containing objects with 'src' and 'heading' properties
  const images = [
    {
      src: "https://palazzo-altura-di-maria.de/file/i/68934d3a350727312.jpg",
      heading: "3-ZIMMER",
    },
    {
      src: "https://palazzo-altura-di-maria.de/file/i/0cdd47ce279627312.jpg",
      heading: "3,5-ZIMMER",
    },
    {
      src: "https://palazzo-altura-di-maria.de/file/i/09b74ca1a10727312.jpg",
      heading: "PENTHOUSE",
    },
  ];

  return (
    <section id="wohnungen" className="bg-[#000] py-20">
      <h1 className="mt-2 text-4xl text-center mb-20 md:text-7xl leading-8 font-extrabold tracking-tight text-white">
        WOHNUNGEN
      </h1>
      <PhotoProvider>
        <div className="md:flex mx-10 justify-around flex-wrap">
          {images.map((item, index) => (
            <div
              key={index}
              className="w-full  md:w-1/3 cursor-zoom-in p-2 relative"
            >
              <PhotoView placeholder={"testing"} src={item.src}>
                {/* Display a thumbnail or placeholder if needed */}
                <img
                  src={item.src}
                  className="w-full rounded-2xl h-auto"
                  alt=""
                />
              </PhotoView>
              <h2 className="text-xl font-bold stroke-black text-[#fff] absolute bottom-7 left-0 right-0 text-center mb-2">
                {item.heading}
              </h2>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
