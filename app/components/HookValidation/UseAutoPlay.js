import { useState, useEffect } from "react";

const useAutoPlay = () => {
	const breakMobileWidth = 767;
	const [autoPlayMode, setAutoPlayMode] = useState(true);

	useEffect(() => {
		if (window.innerWidth < breakMobileWidth) { // breakMobileWidth is the max width; above this the video appears
			setAutoPlayMode(false);
		}
	}, [autoPlayMode]);

	return autoPlayMode;
}

export default useAutoPlay;