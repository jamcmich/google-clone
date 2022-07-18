import React from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/Home/Body/Form';
import '@styles/Home/Body/Body.css';

const Body = () => {
	return (
		<section className='home-body'>
			<Link to='/'>
				<img
					className='home-body__image'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
			</Link>

			<Form />
		</section>
	);

	// return location.pathname === '/' ? (
	// 	<React.Fragment>
	// 		<Link to='/'>
	// 			<img
	// 				className='search__image-logo'
	// 				src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
	// 				alt='logo'
	// 			/>
	// 		</Link>

	// 		<form className='search-form' onSubmit={getSearchResults}>
	// 			<div className='search-form__input'>
	// 				<HiOutlineSearch className='search-form__icon search-form__search-icon--gray' />
	// 				<input
	// 					className='search-form__input-elem'
	// 					value={input}
	// 					type='text'
	// 					onChange={(event) => setInput(event.target.value)}
	// 				/>
	// 				<MdClear
	// 					className='search-form__icon search-form__cancel-icon'
	// 					data-tip='Clear'
	// 					data-for='clear-icon'
	// 					onMouseEnter={() => showClearTooltip(true)}
	// 					onMouseLeave={() => {
	// 						showClearTooltip(false);
	// 						setTimeout(() => showClearTooltip(true), 50);
	// 					}}
	// 					onClick={() => setInput('')}
	// 				/>
	// 				{clearTooltip && (
	// 					<ReactTooltip
	// 						id='clear-icon'
	// 						className='search-form__tooltip'
	// 						textColor='#BDC1C6'
	// 						border
	// 						borderColor='#3C4043'
	// 						backgroundColor='#202124'
	// 						place='bottom'
	// 						type='info'
	// 						effect='solid'
	// 					/>
	// 				)}
	// 				<span className='search-form__span--border'></span>

	// 				<FaMicrophone
	// 					className='search-form__icon search-form__mic-icon'
	// 					data-tip='Search by voice'
	// 					data-for='mic-icon'
	// 					onMouseEnter={() => showMicTooltip(true)}
	// 					onMouseLeave={() => {
	// 						showMicTooltip(false);
	// 						setTimeout(() => showMicTooltip(true), 50);
	// 					}}
	// 				/>
	// 				{micTooltip && (
	// 					<ReactTooltip
	// 						id='mic-icon'
	// 						className='search-form__tooltip'
	// 						textColor='#BDC1C6'
	// 						border
	// 						borderColor='#3C4043'
	// 						backgroundColor='#202124'
	// 						place='bottom'
	// 						type='info'
	// 						effect='solid'
	// 					/>
	// 				)}
	// 			</div>
	// 		</form>

	// 		<div className='search__buttons'>
	// 			<button
	// 				className='search__button'
	// 				type='submit'
	// 				onClick={getSearchResults}
	// 			>
	// 				Google Search
	// 			</button>
	// 			<button className='search__button'>I'm Feeling Lucky</button>
	// 		</div>
	// 	</React.Fragment>
	// ) : location.pathname === '/search' ? (
	// 	<div className='search search--styled'>
	// 		<a href='./'>
	// 			<img
	// 				className='search__image-logo search__image-logo--small'
	// 				src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
	// 				alt='logo'
	// 			/>
	// 		</a>

	// 		<form className='search-form' onSubmit={getSearchResults}>
	// 			<div className='search-form__input search-form__input--styled'>
	// 				<input
	// 					className='search-form__input-elem search-form__input-elem--styled'
	// 					value={input}
	// 					type='text'
	// 					onChange={(event) => setInput(event.target.value)}
	// 				/>
	// 				<MdClear
	// 					className='search-form__icon search-form__cancel-icon'
	// 					data-tip='Clear'
	// 					data-for='clear-icon'
	// 					onMouseEnter={() => showClearTooltip(true)}
	// 					onMouseLeave={() => {
	// 						showClearTooltip(false);
	// 						setTimeout(() => showClearTooltip(true), 50);
	// 					}}
	// 					onClick={() => setInput('')}
	// 				/>
	// 				{clearTooltip && (
	// 					<ReactTooltip
	// 						id='clear-icon'
	// 						className='search-form__tooltip'
	// 						textColor='#BDC1C6'
	// 						border
	// 						borderColor='#3C4043'
	// 						backgroundColor='#202124'
	// 						place='bottom'
	// 						type='info'
	// 						effect='solid'
	// 					/>
	// 				)}
	// 				<span className='search-form__span search-form__span--border search-form__span--padding'></span>

	// 				<div className='search-form__icons--spacing'>
	// 					<FaMicrophone
	// 						className='search-form__icon search-form__mic-icon'
	// 						data-tip='Search by voice'
	// 						data-for='mic-icon'
	// 						onMouseEnter={() => showMicTooltip(true)}
	// 						onMouseLeave={() => {
	// 							showMicTooltip(false);
	// 							setTimeout(() => showMicTooltip(true), 50);
	// 						}}
	// 					/>
	// 					{micTooltip && (
	// 						<ReactTooltip
	// 							id='mic-icon'
	// 							className='search-form__tooltip'
	// 							textColor='#BDC1C6'
	// 							border
	// 							borderColor='#3C4043'
	// 							backgroundColor='#202124'
	// 							place='bottom'
	// 							type='info'
	// 							effect='solid'
	// 						/>
	// 					)}
	// 					<HiOutlineSearch className='search-form__icon search-form__search-icon--blue' />
	// 				</div>
	// 			</div>
	// 		</form>

	// 		<div className='search__buttons search__buttons--hidden'>
	// 			<button
	// 				className='search__button'
	// 				type='submit'
	// 				onClick={getSearchResults}
	// 			>
	// 				Google Search
	// 			</button>
	// 			<button className='search__button'>I'm Feeling Lucky</button>
	// 		</div>
	// 	</div>
	// ) : null;
};

export default Body;
