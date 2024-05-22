import { MotionBox } from "@/components";

export default function MusicianPage() {
  return (
    <main className="mt-20">
      <div className="container-big">

        <h1 className="flex items-center gap-4 py-60 text-7xl font-medium md:text-4xl md:py-28">
          <MotionBox delay={0.4}>
            <span>In development. <br className="hidden md:block" /></span>
          </MotionBox>
          <MotionBox delay={0.5}>
            <span>Be patient 😉.</span>
          </MotionBox>
        </h1>
      </div>
    </main>
  );
};