import React, { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initial: string) => {
	const [state, setState] = useState('');
	const local: any = (window.localStorage.getItem = (key) => {
		return local ? local : initial;
	});
	useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [key, state]);
};
export default useLocalStorage;
