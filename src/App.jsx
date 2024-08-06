import { useState } from 'react';
import data from './data';
import Questions from './Questions';
function App() {
	const [questions, setQuestions] = useState(data);
	const [activeId, setActiveId] = useState(null);
	const toggleButton = (id) => {
		const newActiveId = id === activeId ? null : id;
		setActiveId(newActiveId);
	};
	return (
		<>
			<main>
				<Questions
					questions={questions}
					activeId={activeId}
					toggleButton={toggleButton}
				/>
			</main>
		</>
	);
}

export default App;
