/* Utilities */
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/Reducer';

/* Components */
import SearchForm from '@components/forms/SearchForm/SearchForm';

/* Assets */
import {
	Sun,
	Moon,
	Grid,
	Settings,
	Search,
	News,
	Image,
	Book,
	Video,
	Dots,
} from '@components/icons/Icons';
import user from '@assets/user.png';

/* Styles */
import './ResultsHeader.css';

const ResultsHeader = () => {
	const [{ theme }, dispatch] = useStateValue();

	const toggleTheme = () => {
		dispatch({
			type: actionTypes.SET_APPLICATION_THEME,
			theme: theme === 'dark' ? 'light' : 'dark',
		});
	};

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

				<nav className='results-header__nav-right'>
					{theme === 'dark' ? (
						<Sun callToggleTheme={toggleTheme} />
					) : (
						<Moon callToggleTheme={toggleTheme} />
					)}

					<Settings />

					<Grid setTheme={theme} />

					<div className='home-header__image-border'>
						<img
							className={`home-header__image home-header__image--${theme}`}
							src={user}
							alt='Jacob McMichael'
						/>
					</div>
				</nav>
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
						<News className='results-header__link-icon' />
						<Link to='#news'>News</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Image className='results-header__link-icon' />
						<Link to='#images'>Images</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Book className='results-header__link-icon' />
						<Link to='#books'>Books</Link>
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
						<Dots className='results-header__link-icon' />
						<Link to='#more'>More</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item results-header__link-tools'>
						<Link to='#tools'>Tools</Link>
					</div>
				</div>
			</nav>
			<span className='results-header__span'></span>
		</header>
	);
};

export default ResultsHeader;
