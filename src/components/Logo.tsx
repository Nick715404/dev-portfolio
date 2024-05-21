import Link from "next/link";

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link className="font-medium text-black text-2xl hover:scale-105 transition lg:text-lg md:text-lg sm:hidden" href='/'>
      Nikita Simonov.
    </Link>
  );
};

export { Logo };