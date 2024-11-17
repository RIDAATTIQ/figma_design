import React from "react";



import Image from "next/image";
import image from "../public/rs-wrap.svg"; 
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
  return (
    <div>
        <Navbar/>
        < div className="flex flex-col md:flex-row items-center md:items-start justify-between pt-14 px-6 md:px-16 gap-8">
 
          <div className="flex-1">
            <h1 className="text-left font-bold text-black text-4xl md:text-6xl max-w-xl">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className="text-[#787054] text-lg md:text-2xl font-[Libre Bodoni] font-medium leading-[1.6] tracking-wide text-left max-w-4xl mt-6">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button
              className="mt-6 px-8 py-3 text-white rounded-tl-lg bg-[#A29875] hover:bg-[#8f7e60] focus:ring-2 focus:ring-[#A29875]"
             
            >
              Explore Now
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src={'rs-wrap.svg'} alt="Wrap Design" width={500} height={800} />
          </div>
        </div>
      </div>
    
  );
};

export default Page;