import React from 'react';
import {Fade} from "react-awesome-reveal";


const MainText = () => {
	return (
		<>
			<div className='flex text-3xl text-center pacific mainBlock-right w-full h-[900px]'>
				<div className='pt-[100px] mx-auto max-w-[250px]'>
				<Fade duration={4000} delay={300} direction={'right'}>
					<p>Дорогие друзья и близкие,
						Мы счастливы поделиться с вами радостью нашего дня! А так же рады пригласить вас на нашу
						свадьбу. Этот день станет началом нашей совместной жизни, и нам будет очень приятно, если вы
						сможете разделить с нами этот особенный момент.</p>
				</Fade>
				</div>
			</div>
		</>
	);
};

export default MainText;