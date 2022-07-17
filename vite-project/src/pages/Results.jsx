import React from 'react';

import { useStateValue } from '@contexts/StateProvider';
import { useSearch } from '@utils/useSearch';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineTag } from 'react-icons/ai';
import { BiNews, BiImage, BiDotsVerticalRounded } from 'react-icons/bi';
import { RiVideoLine } from 'react-icons/ri';
import Content from '@components/Content';
import '@styles/Results.css';

const Results = () => {
	const [{ input }, dispatch] = useStateValue();
	const { data } = useSearch(input);

	if (data) console.log(data);

	return (
		<div className='results-page'>
			<div className='results-page__header'>
				<h1>{input}</h1>
			</div>

			<div className='results-page__content'>
				<Content />
			</div>
		</div>
	);
};

export default Results;
