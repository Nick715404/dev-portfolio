import { TProject } from "@/types/data.types";
import Image from "next/image";
import { MotionBox } from "../MotionBox";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = { data: TProject; }

const SingleProject = ({ data }: Props) => {
  return (
    <div className="w-full mb-32 lg:mb-20 md:mb-10">
      <MotionBox delay={0.15}>
        <div className="w-full aspect-[1.8/1] mb-6 md:aspect-[1.4/1] sm:aspect-[1/1]">
          <Image
            width={500}
            height={500}
            src={data.image}
            alt={data.title}
            className="rounded-[2rem] object-cover w-full h-full shadow-md lg:rounded-[1.4rem] md:rounded-[1rem]"
          />
        </div>
        <div className="flex items-center justify-between gap-5 font-medium text-[2.5rem] lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1rem]">
          <h3>{data.title}</h3>
          <span className="sm:text-sm">{data.tag}</span>
        </div>
      </MotionBox>
    </div>
  )
}

export { SingleProject };