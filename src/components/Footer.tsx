import { CopyButton } from './CopyButton';
import { MotionBox } from './MotionBox';
import { Socials } from './Socials';

const Footer = () => {
	return (
		<footer
			id='footer'
			className='py-56 bg-black relative before:absolute before:left-0 before:top-0 before:w-full before:h-10 before:bg-white before:rounded-b-[10rem] md:before:rounded-b-[2rem] text-white md:py-24'
		>
			<div className='container'>
				<div className='border-t-[6px] border-white pt-14 md:pt-7'>
					<MotionBox delay={0.1}>
						<h2 className='text-4xl mb-20 md:text-2xl md:mb-10'>
							Don't hesitate to drop me an email
							<br className='md:hidden' /> or contact me via my social profiles
							✌️
						</h2>
					</MotionBox>
					<div className='flex w-full items-center justify-between gap-5 md:flex-col md:items-start sm:items-center sm:w-full'>
						<MotionBox full delay={0.3}>
							<CopyButton text='nicklllson.off@gmail.com' />
						</MotionBox>
						<MotionBox delay={0.5}>
							<Socials mode='dark' />
						</MotionBox>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
