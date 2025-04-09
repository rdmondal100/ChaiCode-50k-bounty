import { useEffect, useRef } from 'react'


export const useOutsideClick = (callbaack) => {
	const currentRef = useRef(null);
	useEffect(() => {
		const handleClick = (event) => {
			console.log(currentRef);

			if (
				currentRef.current &&
				!currentRef.current.contains(event.target)
			) {
				console.log("Callback");
				callbaack();
			}
		};

		document.addEventListener("mousedown", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [callbaack]);

	return currentRef;
};