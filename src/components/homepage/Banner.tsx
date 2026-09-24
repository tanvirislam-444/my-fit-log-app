import bannerImg from '@/assets/banner.png'
import Image from 'next/image';
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ['latin'],
})

const Banner = () => {
    return (
<div className="mx-4 my-5 md:mx-8 lg:mx-10 bg-[#9ca3af10] p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-40">

  <div className="w-full md:w-1/2">
    <p className="text-[#C2F800] pb-4 md:pb-5">
      WORKOUT LIBRARY
    </p>

    <h1 className={`${oswald.className} text-3xl md:text-4xl lg:text-5xl lg:w-150 font-bold pb-4 md:pb-5`}>
      TRAIN WITH INTENT. LOG EVERY SET.
    </h1>

    <p className="text-[#9CA3AF] w-full lg:w-110 pb-5 leading-relaxed">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      into today’s plan, and watch the week’s work add up.
    </p>

    <button className="bg-[#C2F800] text-black px-5 py-2.5 rounded-md font-semibold text-sm">
      BROWSE WORKOUTS
    </button>
  </div>


  <div className=" md:w-1/2 flex justify-center">
    <Image
      src={bannerImg}
      alt="banner"
      className=" max-w-sm lg:max-w-sm h-auto"
    />
  </div>

</div>
    );
};

export default Banner;