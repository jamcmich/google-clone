/* Utilities */
import React, { useState, useEffect } from 'react';
import { useStateValue } from '@contexts/StateProvider';
// import { useSearch } from '@utils/useSearch';

/* Assets */
import { BiDotsVerticalRounded as Dots } from 'react-icons/bi';

/* Styles */
import './ResultsBody.css';

const ResultsBody = () => {
	const [{ input, theme }, dispatch] = useStateValue();
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

			{data && (
				<span className={`results-body__stats ${theme}`}>
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
							href={item.cite.link}
						>
							<div className='results-body__item-domain-group'>
								<span
									className={`results-body__item-domain ${theme}`}
								>
									{item.cite.domain.replace(
										/(?<=\s).*$/gi,
										''
									)}
								</span>
								<span
									className={`results-body__item-tags ${theme}`}
								>
									{item.cite.span}
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
		</div>
	);
};

export default ResultsBody;
