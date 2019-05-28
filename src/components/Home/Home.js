import React, { Component } from 'react';
import * as API from '../../api/API';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';


class Home extends Component {

  state = {
    articles: [],
    error: null,
  };

  // When the component mounts, get a list of all saved articles and update this.state.saved
  componentDidMount() {
    this.getSavedArticles()
  }

  // Method for getting saved articles (all articles) from the db
  getSavedArticles = () => {
    API.getArticles()
      .then((res) => {
        this.setState({ articles: res.results });
      }).catch(error => {
        this.setState({ error: error });
      });
  }

  goToDetails = (selectedArticle) => () => {
    this.props.history.push({
      pathname: '/details',
      state: { detail: selectedArticle }
    })
  }

  render() {
    const { articles, error } = this.state;

    return (

      <div className="container-fluid">
        <div className="row">
          <Header />

          {error ? (
            <Error error={error} />
          ) : articles.length > 0 ? (
            articles.map((article, index) => {
              return (<Articles
                key={index}
                article={article}
                goToDetails={this.goToDetails}
              />
              );
            })
          ) : (
                <Loading />
              )}

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;