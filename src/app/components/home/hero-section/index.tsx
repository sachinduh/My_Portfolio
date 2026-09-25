import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="no-print absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.04] dark:opacity-[0.05] text-[100px] sm:text-[160px] md:text-[220px] font-black tracking-tighter uppercase whitespace-nowrap text-black dark:text-white"
      >
        SACHINDU HIMSARA
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-8 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Sachindu</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>UI/UX Designer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              I’m a passionate UI/UX Designer focused on creating simple, intuitive, and
              user-centered digital experiences. I enjoy understanding user needs, solving
              design problems, and transforming ideas into clean and engaging interfaces.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={getImgPath("/images/home/banner/Picture1.jpg")}
              alt="banner-img"
              width={685}
              height={650}
              className="w-full max-w-[550px] xl:max-w-[650px] h-auto object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
