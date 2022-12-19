import { useEffect } from 'react';
import './App.css';
function App() {

	useEffect(() => {
		tg.ready();
	}, [])

  return (
    <div className="App">
		ПРИВЕТ МИР
    </div>
  );
}

export default App;
