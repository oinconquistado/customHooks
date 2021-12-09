import { useEffect, useState } from 'react';
import useAxios from './hooks/useAxios/useAxios';

function App() {
	const { getData, dataResponse, error, loading } = useAxios();

	useEffect(() => {
		console.log(dataResponse);
	}, [dataResponse]);

	return (
		<div className='App'>
			<header className='App-header'>
				<button onClick={() => getData({ requestType: 'get', url: `BTC/ticker/` })}>Download Data</button>
			</header>
		</div>
	);
}

export default App;
