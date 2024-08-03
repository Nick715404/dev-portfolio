import { TProject } from '@/types/data.types';
import Image from 'next/image';
import { MotionBox } from '../MotionBox';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';

type Props = { data: TProject };

const SingleProject = ({ data }: Props) => {
	return (
		<Link
			href={data.href}
			target='_blank'
			className='w-full mb-8 rounded-xl transition-all duration-75 hover:bg-black lg:mb-14 md:mb-10 group'
		>
			<MotionBox delay={0.15}>
				<div className='relative w-full aspect-[1.4/1] mb-6'>
					<div className='bg-white absolute top-2 right-2 z-20 rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-xl'>
						<Image
							width={24}
							height={24}
							src='/svg/arrow.svg'
							alt='Arrow'
							className='scale-[2] transition-all duration-75 group-hover:-rotate-45 pointer-events-none'
						/>
					</div>
					<Image
						width={500}
						height={500}
						src={data.image}
						alt={data.title}
						className='relative rounded-xl object-cover w-full h-full shadow-md'
					/>
				</div>
				<div className='pl-3 pb-4'>
					<h3 className='text-2xl group-hover:text-white group-hover:underline'>
						{data.title}
					</h3>
					<span className='text-m lowercase text-black rounded-full group-hover:text-white group-hover:underline'>
						{data.tag}
					</span>
				</div>
			</MotionBox>
		</Link>
	);
};

export { SingleProject };
