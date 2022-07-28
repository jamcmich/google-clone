/* Utilities */
import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

/* Components */
import { ArrowRight } from '@components/icons/Icons';

/* Styles */
import './ResultsFooter.css';

const ResultsFooter = () => {
	const [{ theme }] = useStateValue();

	const word = [
		'G',
		'o',
		'o',
		'o',
		'o',
		'o',
		'o',
		'o',
		'o',
		'o',
		'o',
		'g',
		'l',
		'e',
	];

	return (
		<footer className='results-footer'>
			<div className='results-footer__row'>
				{word.map((letter, index) =>
					letter === 'o' ? (
						<div
							className={`results-footer__col link ${theme}`}
							key={index}
						>
							<span className='results-footer__letter'>
								{letter}
							</span>
							<span className={`results-footer__index ${theme}`}>
								{index}
							</span>
						</div>
					) : (
						<div
							className={`results-footer__col ${theme}`}
							key={index}
						>
							<span className='results-footer__letter'>
								{letter}
							</span>
							<span className='results-footer__index hidden'>
								{' '}
							</span>
						</div>
					)
				)}
				<div className={`results-footer__col next ${theme}`}>
					<ArrowRight />
					<span className='results-footer__next-text'>Next</span>
				</div>
			</div>
		</footer>
	);
};

export default ResultsFooter;
