import { Hero, Socials, About, Stack, Projects, MotionBox } from "@/components";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mt-20 lg:mt-32 sm:mt-28">
      <Hero>
        <div className="mb-20 lg:mb-8">
          <MotionBox>
            <h1 className="text-[4.8rem] font-medium leading-tight mb-8 xl:text-[4rem] lg:text-[1.8rem] lg:leading-snug lg:mb-4">
              👋 Hey, I'm Nikita. <br className="lg:hidden" />
              Frontend Developer who works <br className="lg:hidden" />
              with <b>React</b> and <b>Next. </b><br className="lg:hidden" />
              Based in Chelyabinsk, Russia.
            </h1>
          </MotionBox>
          <MotionBox delay={0.3}>
            <span>◎︎ Last updated — May 2023</span>
          </MotionBox>
        </div>
        <div className="flex justify-end w-full">
          <MotionBox delay={0.5}>
            <Socials mode="light" />
          </MotionBox>
        </div>
      </Hero>

      <About>
        <div className="w-[50%] flex flex-col justify-between gap-5 h-full lg:w-full">
          <MotionBox delay={0.2}>
            <h2 className="text-6xl font-medium mb-16 md:text-4xl md:mb-6">About me</h2>
            <p className="text-medium text-2xl mb-8 md:mb-4 md:text-lg sm:text-base">
              I am a front-end developer with more than a year of experience in commercial development in a web studio. I develop applications and websites using React, Next and WordPress.
            </p>
            <p className="text-medium text-2xl mb-8 md:mb-4 md:text-lg sm:text-base">
              I have experience supervising a team of junior developers. Guided the guys in implementing the architecture and functionality of the application.
            </p>
            <p className="text-medium text-2xl mb-12 md:text-lg sm:text-base md:mb-6">
              I enjoy traveling, playing guitar and just having fun!
            </p>
          </MotionBox>
          <MotionBox delay={0.25}>
            <button className="border border-white text-lg px-14 py-3 rounded-xl font-medium transition outline-none w-fit hover:bg-white hover:text-black md:w-full md:mb-4">
              See my Resume
            </button>
          </MotionBox>
        </div>
        <div className="relative bg-gray-500 rounded-[2rem] lg:rounded-[1rem] lg:aspect-[1/1] w-[35%] aspect-[1/1.2] overflow-hidden xl:w-[45%] lg:w-full lg:mb-10 md:mt-4">
          <MotionBox delay={0.4}>
            <Image
              className="absolute aspect-[1/1.35] scale-[2] lg:left-1/2 lg:-translate-x-1/2 pointer-events-none"
              width={500}
              height={500}
              src='/developer.png'
              alt="Nikita picture"
              priority
            />
          </MotionBox>
        </div>
      </About>
      <Stack />
      <Projects />
    </main>
  );
};