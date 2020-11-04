import './App.css';
import Game from './components/Game';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<h2>react battleships</h2>
			</div>
			<div className='Game'>
				<Game />
			</div>
		</div>
	);
}

export default App;
