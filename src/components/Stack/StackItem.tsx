import { TStack } from "@/types/data.types";
import Image from "next/image";

type Props = { data: TStack };

const StackItem = ({ data }: Props) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-5 border-2 border-black px-8 py-4 rounded-2xl shadow-md lg:px-4 lg:py-4 sm:aspect-[1/1]">
      <Image width={45} height={45} src={data.icon} alt={data.title} priority />
      <span className="block font-medium text-lg lowercase leading-tight sm:hidden">{data.title}</span>
    </div>
  )
}

export { StackItem };