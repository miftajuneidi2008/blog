import React from "react";
import HeroImage from "@/assets/images/hero-image.jpg";
import ai from "@/assets/images/pexels-luis-gomes-166706-546819.jpg";
import pro from "@/assets/images/pexels-ngeshlew-289927.jpg";
import data from "@/assets/images/pexels-pixabay-158826.jpg";
import all from "@/assets/images/pexels-pixabay-373543.jpg";

import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="relative mx-auto mt-2 max-w-7xl overflow-x-clip object-cover">
        <div className="relative h-[70vh] w-full">
          <Image
            src={HeroImage}
            fill
            alt="Hero Image"
            loading="eager"
            className="h-full w-full rounded-md"
          />
          <div className="absolute inset-0 flex items-baseline-last rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-6 cursor-pointer group">
            <div className="mb-4 flex flex-col gap-2 group">
              <div className="rouded-md w-max rounded-md border border-slate-400 px-4 py-2 font-semibold text-white ">
                web development
              </div>

              <h3 className="text-2xl font-bold text-white">Shake It Off</h3>
              <p className="text-md text-white group-hover:underline">
                A deep dive into the world of modern web development.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex w-full flex-col items-center gap-6">
          <h3 className="text-xl font-bold text-indigo-600 md:text-4xl">
            Popular Articles
          </h3>

          <div className="flex w-full max-w-5xl justify-center gap-4 md:gap-6">
            <div className="group relative h-90 w-[60%] cursor-pointer">
              <Image
                src={all}
                width={800}
                height={600}
                alt="Featured article"
                className="image-animation h-full w-full rounded-lg object-cover"
              />
              <div className="image-animation ablolute-background">
                <div className="flex flex-col gap-2 p-2">
                  <h3 className="text-xl font-bold text-white">
                    Next js 16 full guide
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex w-[40%] cursor-pointer flex-col gap-2">
              <div className="group relative h-44 w-full">
                <Image
                  src={pro}
                  width={600}
                  height={400}
                  alt="Secondary article 1"
                  className="image-animation h-full w-full rounded-md object-cover"
                />
                <div className=" image-animation ablolute-background">
                  <div className="flex flex-col gap-2 p-2">
                    <h3 className="text-xl font-bold text-white">
                      Next js 16 full guide
                    </h3>
                  </div>
                </div>
              </div>
              <div className="group relative h-44 w-full">
                <Image
                  src={data}
                  width={600}
                  height={400}
                  alt="Secondary article 2"
                  className="image-animation h-44 w-full rounded-md object-cover"
                />
                <div className="image-animation ablolute-background">
                  <div className="flex flex-col gap-2 p-2">
                    <h3 className="text-xl font-bold text-white">
                      Next js 16 full guide
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 flex flex-wrap items-center justify-center gap-4">
          <button className="btn">All</button>
          <button className="btn">Programming</button>
          <button className="btn">Data Structures</button>
          <button className="btn">Artificial Intelligence</button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          <div className="flex cursor-pointer flex-col gap-2 border border-slate-100 rounded-md">
            <Image
              src={ai}
              alt="ai image"
              className="h-48 w-full rounded-md object-cover"
            />
            <p className="text-[15px] px-1 font-[500]">
              This is an image of artificial intelligence
            </p>
          </div>
          <div className="flex cursor-pointer flex-col gap-2 bg-slate-50 p-1">
            <Image
              src={pro}
              alt="ai image"
              className="h-48 w-full rounded-md object-cover"
            />
            <p className="text-[15px]">
              this is an image of artificial intelligence
            </p>
          </div>
          <div className="flex cursor-pointer flex-col gap-2 bg-slate-50 p-1">
            <Image
              src={data}
              alt="ai image"
              className="h-48 w-full rounded-md object-cover"
            />
            <p className="text-[15px]">
              this is an image of artificial intelligence
            </p>
          </div>
          <div className="flex cursor-pointer flex-col gap-2 bg-slate-50 p-1">
            <Image
              src={all}
              alt="ai image"
              className="h-48 w-full rounded-md object-cover"
            />
            <p className="text-[15px]">
              this is an image of artificial intelligence
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
