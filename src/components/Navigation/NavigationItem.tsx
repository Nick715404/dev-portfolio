'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  label: string;
  isActive?: boolean;
};

const NavigationItem = ({ label, path }: Props) => {
  const activeLocation = usePathname();
  const className = activeLocation === path ?
    'bg-black text-white' :
    'bg-transparent text-black hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300';

  return <Link className={`${className} text-lg px-14 py-3 w-[50%] rounded-xl font-medium transition outline-none md:px-8 md:py-2 md:text-base sm:w-full sm:py-3`} href={path}>{label}</Link>;
};

export { NavigationItem };