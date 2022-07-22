import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '@components/forms/SearchForm/SearchForm';
import {
	BiSearch as Search,
	BiDotsVerticalRounded as Dots,
	BiNews as News,
} from 'react-icons/bi';
import { RiVideoLine as Video } from 'react-icons/ri';
import { BsImage as Image } from 'react-icons/bs';
import { AiOutlineBook as Book } from 'react-icons/ai';

import './ResultsHeader.css';

const ResultsHeader = () => {
	return (
		<header className='results-header'>
			<div className='results-header__form-group'>
				<Link to='/'>
					<img
						className='results-header__image'
						src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
						alt='logo'
					/>
				</Link>

				<SearchForm />
			</div>

			<nav className='results-header__links'>
				<div className='results-header__link-container'>
					<div className='results-header__link-item results-header__link-item--active'>
						<Search className='results-header__link-icon' />
						<Link to='#all'>All</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Image className='results-header__link-icon text-0.9rem mr-0.1rem' />
						<Link to='#images'>Images</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Video className='results-header__link-icon' />
						<Link to='#videos'>Videos</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Book className='results-header__link-icon text-0.9rem' />
						<Link to='#books'>Books</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<News className='results-header__link-icon mr-0.1rem' />
						<Link to='#news'>News</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Dots className='results-header__link-icon' />
						<Link to='#more'>More</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item results-header__link-item--margin'>
						<Link to='#tools'>Tools</Link>
					</div>
				</div>
			</nav>
			<span className='results-header__span'></span>
		</header>
	);
};

export default ResultsHeader;
