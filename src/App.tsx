import { PrimaryButton, SecondaryButton } from './components/Button';
import Counter from './components/Counter';
import './index.css';

function App() {
	return (
		<div className="App m-8">
			<Counter />
			<PrimaryButton />
			<SecondaryButton />
		</div>
	);
}

export default App;
