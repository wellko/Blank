import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Letter = ({onClick}) => {
	return (
		<div className='h-[900px]'>
		<div
			onClick={onClick}
			className='hover:cursor-pointer letter w-[100%] h-[500px] m-auto relative text-[16px] lg:text-[25px] xl:text-[25px] md:text-[20px] sm:text-[20px]'>
			<div
				className=' flex-col items-center justify-items-center absolute text-center bg-white top-[45%] left-[30%] w-[40%] h-[23%] lg:w-[22%] lg:left-[39%] md:w-[25%] md:left-[37%] sm:w-[31%] sm:left-[34%] sm:h-[30%]'>
				<p> Приглашение на
					свадьбу</p>
				<p>Бакая и Жансаи</p>
				<p>02.12.2023</p></div>
		</div>
			<p className='animate-bounce text-center text-[30px]'>Нужно открыть письмо <ArrowUpwardIcon/></p>
		</div>
	);
};

export default Letter;