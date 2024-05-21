import { socialsData } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";

type Props = {
  mode: 'light' | 'dark'
}

const Socials = ({ mode }: Props) => {

  const className = mode === 'dark' ? 'bg-white' : 'bg-transparent';

  return (
    <ul className="flex items-center gap-4">
      {
        socialsData.map((link, index) => (
          <li key={index}>
            <Link href={link.path} className={`${className} w-10 h-10 flex items-center justify-center rounded-lg transition hover:scale-[1.15]`}>
              <Image
                className="rounded-[4px]"
                width={30}
                height={30}
                src={link.icon}
                alt=""
              />
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export { Socials };