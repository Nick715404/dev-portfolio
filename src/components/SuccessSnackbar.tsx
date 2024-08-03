const SuccessSnackBar = ({
	text,
	status,
}: {
	text: string;
	status: boolean;
}) => {
	const className = status
		? 'translate-x-0'
		: 'translate-x-[120%] md:translate-x-[150%]';

	return (
		<div
			className={`${className} fixed bottom-5 right-5 z-[99] bg-green-600 px-5 py-4 w-[20%] text-center font-medium text-[1.2rem] rounded-2xl transition md:w-[94%] md:right-[10px] md:bottom-[10px]`}
		>
			<span>{text} 👍</span>
		</div>
	);
};

export { SuccessSnackBar };
