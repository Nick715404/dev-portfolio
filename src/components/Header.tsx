import Link from "next/link";
import { Logo, MotionBox, Navigation } from "./index";

const Header = () => {
  return (
    <header className="absolute top-8 left-0 w-full z-[5] lg:top-4">
      <MotionBox delay={0.2}>
        <div className="flex items-center justify-between gap-5 container-big">
          <Logo />
          <Navigation />
          <Link className="font-medium text-2xl hover:scale-105 transition lg:text-base md:hidden" href='#contact'>Contact with me</Link>
        </div>
      </MotionBox>
    </header>
  );
};

export { Header };