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
	SearchSmall,
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

	const toggleActive = (event) => {
		document
			.querySelectorAll('.results-header__link')
			.forEach((element) => {
				element.classList.remove('active');

				if (element.textContent === event.currentTarget.textContent) {
					element.classList.add('active');
				}
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
						<Sun callToggleTheme={toggleTheme} style='results' />
					) : (
						<Moon callToggleTheme={toggleTheme} style='results' />
					)}

					<Settings setTheme={theme} style='results' />

					<Grid setTheme={theme} />

					<div className='home-header__image-border'>
						<img
							className={`home-header__image`}
							src={user}
							alt='Jacob McMichael'
						/>
					</div>
				</nav>
			</div>

			<nav className='results-header__links'>
				<div className='results-header__link-container'>
					<Link
						to='#all'
						className={`results-header__link ${theme} active`}
						onClick={(event) => toggleActive(event)}
					>
						<SearchSmall className='results-header__link-icon' />
						<p className='results-header__link-text'>All</p>
					</Link>
				</div>

				<div className='results-header__link-container'>
					<Link
						to='#news'
						className={`results-header__link ${theme}`}
						onClick={(event) => toggleActive(event)}
					>
						<News className='results-header__link-icon' />
						<p className='results-header__link-text'>News</p>
					</Link>
				</div>

				<div className='results-header__link-container'>
					<Link
						to='#images'
						className={`results-header__link ${theme}`}
						onClick={(event) => toggleActive(event)}
					>
						<Image className='results-header__link-icon' />
						<p className='results-header__link-text'>Images</p>
					</Link>
				</div>

				<div className='results-header__link-container'>
					<Link
						to='#books'
						className={`results-header__link ${theme}`}
						onClick={(event) => toggleActive(event)}
					>
						<Book className='results-header__link-icon' />
						<p className='results-header__link-text'>Books</p>
					</Link>
				</div>

				<div className='results-header__link-container'>
					<Link
						to='#videos'
						className={`results-header__link ${theme}`}
						onClick={(event) => toggleActive(event)}
					>
						<Video className='results-header__link-icon' />
						<p className='results-header__link-text'>Videos</p>
					</Link>
				</div>

				<div className='results-header__link-container'>
					<Link to='' className={`results-header__link ${theme}`}>
						<Dots className='results-header__link-icon' />
						<p className='results-header__link-text'>More</p>
					</Link>
				</div>

				<div className='results-header__link-container tools'>
					<Link to='' className={`results-header__link ${theme}`}>
						<p className='results-header__link-text'>Tools</p>
					</Link>
				</div>
			</nav>
			<span className={`results-header__span ${theme}`} />
		</header>
	);
};

export default ResultsHeader;
