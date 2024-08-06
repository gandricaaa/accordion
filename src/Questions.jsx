import React from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, toggleButton, activeId }) => {
	return (
		<section className='container'>
			<h2>Questions</h2>
			{questions.map((question) => {
				return (
					<SingleQuestion
						key={question.id}
						{...question}
						activeId={activeId}
						toggleButton={toggleButton}
					/>
				);
			})}
		</section>
	);
};

export default Questions;
