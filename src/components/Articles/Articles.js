import React from 'react';
import './Articles.scss'


const CalendarIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="15"
		height="15"
		viewBox="0 0 25 25"
	>
		<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
		<path fill="none" d="M0 0h24v24H0z" />
	</svg>
);

const ChevronRightIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);


const Articles = ({ article, goToDetails }) => {
    const { id, title, byline, published_date, media, url } = article;
    const selectedArticle = article;
    return (
        <div className="content--item" onClick={goToDetails(selectedArticle)}  key={id}   >
        <div className="content--image">
            <img alt="thumbnail" src={media[0]['media-metadata'][1].url} />
        </div>
        <div className="content--body">
            <div className="content--body-title">{title}</div>
            <div className="content--footer">
                <div className="content--footer-byline">{byline}</div>
                <div className="content--footer-date">
                    <CalendarIcon />
                    {published_date}
                </div>
            </div>
        </div>
        <div className="content--item-right">
            <ChevronRightIcon />
        </div>
    </div>
    );
}

export default Articles;