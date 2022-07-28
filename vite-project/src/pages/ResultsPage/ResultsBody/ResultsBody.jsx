/* Utilities */
import React, { useState, useEffect } from 'react';
import { useStateValue } from '@contexts/StateProvider';
import { useSearch } from '@utils/useSearch';

/* Components */
import ResultsFooter from '../ResultsFooter/ResultsFooter';
import { ThreeDots } from 'react-loader-spinner';

/* Assets */
import { BiDotsVerticalRounded as Dots } from 'react-icons/bi';

/* Styles */
import './ResultsBody.css';

const ResultsBody = () => {
	const [{ input, theme }, dispatch] = useStateValue();
	const { data, isLoading } = useSearch(input || '');
	// const [data, setData] = useState({});

	useEffect(() => {
	}, [isLoading && data]);

	return (
		<div className='results-body'>
			{isLoading && (
				<div className='three-dots center'>
					<ThreeDots
						height={100}
						width={100}
						ariaLabel='three-dots-loading'
						wrapperClass={`three-dots ${theme}`}
					/>
				</div>
			)}

			{data
				? [
						<span
							className={`results-body__stats ${theme}`}
							key='stats'
						>
							{`About ${data?.total?.toLocaleString(
								'en-US'
							)} results in (${parseFloat(data?.ts).toFixed(
								2
							)} seconds)`}
						</span>,
						data?.results?.map((item, index) => (
							<div key={index} className='results-body__item'>
								<a
									className='results-body__item-link'
									href={item.cite?.link}
								>
									<div className='results-body__item-domain-group'>
										<span
											className={`results-body__item-domain ${theme}`}
										>
											{item.cite?.domain?.replace(
												/(?<=\s).*$/gi,
												''
											)}
										</span>
										<span
											className={`results-body__item-tags ${theme}`}
										>
											{item.cite?.span}
										</span>
										<Dots
											className={`results-body__item-dots ${theme}`}
										/>
									</div>

									<h1
										className={`results-body__item-title ${theme}`}
										href={item.link}
									>
										{item.title}
									</h1>
								</a>

								<p
									className={`results-body__item-desc ${theme}`}
								>
									{item.description}
								</p>
							</div>
						)),
						<ResultsFooter />,
				  ]
				: null}
		</div>
	);
};

export default ResultsBody;
