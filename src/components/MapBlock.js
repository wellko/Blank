import React, {useEffect, useState} from 'react';



const MapBlock = () => {
	const targetDate = new Date('2023-12-02T20:59:59').getTime();

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	function calculateTimeRemaining() {
		const now = new Date().getTime();
		const timeDifference = targetDate - now;

		if (timeDifference <= 0) {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

		return {
			days,
			hours,
			minutes,
			seconds,
		};
	}


	return (
		<div className='text-3xl text-center pacific w-full h-[900px]'>
			<p>Ожидаем Вас в ресторане Royal</p>
			<a href={'https://go.2gis.com/3v4jw'} className='text-blue-500' target={'_blank'}>по адрессу с.Кок-Джар ул.Мадиева 18\1</a>
			<p>в какое то время</p>
			<div>
				<div>{timeRemaining.days} дней</div>
				<div>{timeRemaining.hours} часов</div>
				<div>{timeRemaining.minutes} минут</div>
				<div>{timeRemaining.seconds} секунд</div>
			</div>
			<p>Пожалуйста, подтвердите свое присутствие в Форме:</p>
		</div>
	);
};

export default MapBlock;