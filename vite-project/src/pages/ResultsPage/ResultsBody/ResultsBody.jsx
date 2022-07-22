import React, { useState, useEffect } from 'react';

import { useStateValue } from '@contexts/StateProvider';
// import { useSearch } from '@utils/useSearch';

import './ResultsBody.css';

const ResultsBody = () => {
	const [{ input }, dispatch] = useStateValue();
	// const { data, isLoading } = useSearch(input);
	const [data, setData] = useState({});

	useEffect(() => {
		setData({
			results: [
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com › Pets & Animals › Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com › Pets & Animals › Cats',
						span: ' › Pets & Animals › Cats',
					},
				},
				{
					title: '101 Funny Cat Memes To Make You Laugh in 2022 - Parade',
					link: 'https://parade.com/1335072/jessicasager/funny-cat-memes/',
					description:
						'Feb 20, 2022 — 101 Funny Cat Memes to Show Your Love for Our Hilarious Feline Friends. Author: Jessica Sager. Updated date: Feb 20, 2022.',
					additional_links: [
						{
							text: '101 Funny Cat Memes To Make You Laugh in 2022 - Paradehttps://parade.com › Life › Pet Parent Central',
							href: 'https://parade.com/1335072/jessicasager/funny-cat-memes/',
						},
						{
							text: '',
							href: 'https://parade.com/1335072/jessicasager/funny-cat-memes/',
						},
					],
					cite: {
						domain: 'https://parade.com › Life › Pet Parent Central',
						span: ' › Life › Pet Parent Central',
					},
				},
			],
		});
	}, []);

	// useEffect(() => {
	// 	console.log(data);
	// 	console.log('results body rendered');
	// }, [isLoading]);

	return (
		<div className='results-body'>
			{/* {isLoading && <span>Loading...</span>} */}

			{data ? (
				<span className='results-body__stats'>{`About ${data?.total?.toLocaleString(
					'en-US'
				)} results in (${parseFloat(data?.ts).toFixed(
					2
				)} seconds)`}</span>
			) : null}

			{data
				? data?.results?.map((item, index) => (
						<div key={index} className='results-body__item'>
							<a
								className='results-body__link'
								href={item.cite.domain.replace(
									/(?<=\s).*$/gi,
									''
								)}
							>
								{item.cite.domain}
							</a>
							<h1
								className='results-body__title'
								href={item.link}
							>
								{item.title}
							</h1>
							<p className='results-body__desc'>
								{item.description}
							</p>
						</div>
				  ))
				: null}
		</div>
	);
};

export default ResultsBody;
