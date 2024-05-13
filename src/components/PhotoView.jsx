"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Photo() {
  // Assume images is an array containing URLs of your photos
  const images = [
    "https://palazzo-altura-di-maria.de/file/i/68934d3a350727312.jpg",
    "https://palazzo-altura-di-maria.de/file/i/0cdd47ce279627312.jpg",
    "https://palazzo-altura-di-maria.de/file/i/09b74ca1a10727312.jpg",
  ];

  return (
    <section id="wohnungen" className="bg-[#111827] py-20">
      <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-20 text-white">
        WOHNUNGEN
      </h1>
      <PhotoProvider>
        <div className="md:flex mx-10 justify-around flex-wrap">
          {images.map((item, index) => (
            <div key={index} className="w-full  md:w-1/2 cursor-zoom-in p-2">
              <PhotoView src={item}>
                {/* Display a thumbnail or placeholder if needed */}
                <img src={item} className="w-full rounded-2xl h-auto" alt="" />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
