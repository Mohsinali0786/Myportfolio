import Skills from '../../Assets/Lottie/123532-coding.json'
import Cloud from '../../Assets/Lottie/69783-cloud-service.json'

import Lottie from 'react-lottie';
import { useEffect, useState } from 'react';
export default function App({ codingAnimation }) {
	const [animationPath, setAnimationPath] = useState('')

	useEffect(() => {
		if (codingAnimation === 'Skills') {
			setAnimationPath(Skills)
		}
		else if(codingAnimation==='Cloud') {
			setAnimationPath(Cloud)
		}
		else{
			setAnimationPath(codingAnimation)
		}

	}, [])
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationPath,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<div>
			<Lottie
				options={defaultOptions}
	
			/>
		</div>
	);
}