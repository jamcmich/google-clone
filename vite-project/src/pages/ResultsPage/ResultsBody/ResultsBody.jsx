import React, { useState, useEffect } from 'react';

import { useStateValue } from '@contexts/StateProvider';
// import { useSearch } from '@utils/useSearch';
import { BiDotsVerticalRounded as Dots } from 'react-icons/bi';
import './ResultsBody.css';

const ResultsBody = () => {
	const [{ input }, dispatch] = useStateValue();
	// const { data, isLoading } = useSearch(input);
	const [data, setData] = useState({});
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
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
					},
				},
				{
					title: '60 Hilarious Cat Memes You Will Laugh at Every Time',
					link: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
					description:
						'Jan 5, 2022 — Can anything brighten a day better than a funny cat? These hilarious cat memes are guaranteed to make you crack a smile.',
					additional_links: [
						{
							text: '60 Hilarious Cat Memes You Will Laugh at Every Timehttps://www.rd.com > Pets & Animals > Cats',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
						{
							text: '',
							href: 'https://www.rd.com/list/hilarious-cat-memes-youll-laugh-at-every-time/',
						},
					],
					cite: {
						domain: 'https://www.rd.com > Pets & Animals > Cats',
						span: ' > Pets & Animals > Cats',
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
								className='results-body__item-link'
								href={item.cite.link}
							>
								<div className='results-body__item-domain-group'>
									<span className='results-body__item-domain'>
										{item.cite.domain.replace(
											/(?<=\s).*$/gi,
											''
										)}
									</span>
									<span className='results-body__item-tags'>
										{item.cite.span}
									</span>
									<Dots className='results-body__item-dots' />
								</div>

								<h1
									className='results-body__item-title'
									href={item.link}
								>
									{item.title}
								</h1>
							</a>

							<p className='results-body__item-desc'>
								{item.description}
							</p>
						</div>
				  ))
				: null}

			<div className='results-body__footer'>
				<div className='results-body__footer-col'>
					<div className='results-body__footer-row'>
						{word.map((letter) => (
							<span className='results-body__footer-letter'>
								{letter}
							</span>
						))}
					</div>

					<div className='results-body__footer-row'>
						{word.map((letter, index) =>
							letter === 'o' ? (
								<span className='results-body__footer-index'>
									{index}
								</span>
							) : (
								<span className='results-body__footer-index results-body__footer-index--hidden'>
									{' '}
								</span>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultsBody;
