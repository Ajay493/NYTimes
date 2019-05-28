import React, { Component } from 'react';
import get from 'lodash/get';
import queryString from 'query-string';
import './Detail.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Detail extends Component {
	render() {
		const selectedArticle = this.props.location.state.detail

		return (

			<div className="container-fluid">
				<div className="row">
					<Header />

					<main className="detail">
						<img
							className="detail--image"
							src={selectedArticle.media[0]['media-metadata'][4].url}
							alt={selectedArticle.title}
						/>
						<h2 className="detail--title">{selectedArticle.title}</h2>
						<h5>{selectedArticle.published_date}</h5>
						<p>{selectedArticle.abstract}</p>
						<a href={selectedArticle.url} target="_blank" rel="noopener noreferrer">
							Read More
			</a>
					</main>

					<Footer />
				</div>
			</div>



		);
	}
}
export default Detail;
