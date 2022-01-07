import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/hompage';

function App() {
  return (
		<section className="App">
			<Routes>
				<Route path="/" element={<HomePage/>} />
				
			</Routes>
		</section>
	);
}

export default App;
