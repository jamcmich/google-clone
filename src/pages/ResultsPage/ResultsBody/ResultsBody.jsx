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
	const [{ input, theme }] = useStateValue();
	const { data, isLoading } = useSearch(input || '');

	useEffect(() => {}, [isLoading && data]);

	return (
		<div className={`results-body ${theme}`}>
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

			{data && (
				<span
					key={data?.total?.toLocaleString('en-US')}
					className={`results-body__stats ${theme}`}
				>
					{`About ${data?.total?.toLocaleString(
						'en-US'
					)} results in (${parseFloat(data?.ts).toFixed(2)} seconds)`}
				</span>
			)}

			{data &&
				data?.results?.map((item, index) => (
					<div key={index} className='results-body__item'>
						<a
							className='results-body__item-link'
							href={item.cite?.link || item.link}
							target='_blank'
						>
							<div className='results-body__item-domain-group'>
								<span
									className={`results-body__item-domain ${theme}`}
								>
									{item.cite?.domain?.replace(
										/(?<=\s).*$/gi,
										''
									) || item.link.replace(/\/+$/, '')}
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

						<p className={`results-body__item-desc ${theme}`}>
							{item.description}
						</p>
					</div>
				))}

			{data && <ResultsFooter />}
		</div>
	);
};

export default ResultsBody;
