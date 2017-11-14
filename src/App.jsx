import React, { Component } from 'react';
import './App.css';

import Article from './components/article';
import RedditService from './services/redditService';
import IndicoService from './services/indicoService';

class App extends Component {

  constructor(props) {
    super(props);

    this.redditService = new RedditService();
    this.indicoService = new IndicoService();

    this.state = {
      articles: []
    };

    this.getRedditArticles();
  }

  async getRedditArticles() {    
    const articles = await this.redditService.getRedditArticles('bitcoin');
    const articles_with_sentiment = await this.indicoService.analyzeSentiment(articles);
    
    this.setState({
      articles: articles_with_sentiment
    });
  }

  renderArticles(articles) {
    if (articles.length > 0) {
      return articles.map((article, index) => (
        <Article key={index} article={article} />
      ));
    }

    else return [];
  }

  sentimentSummery(articles) {
    let sentiment_sum = 0;

    if (!articles) {
      console.log("no articles");
      return;
    }
    
    articles.forEach((article) => {
      sentiment_sum += article.sentiment;
    });

    return sentiment_sum / articles.length;
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Reddit prediction
          </h1>
        </header>
        <section className="summery">
          <h3>
            Overall prediction: <span>{this.sentimentSummery(this.state.articles) || "-"}</span>
          </h3>
        </section>
        <section>
            {this.renderArticles(this.state.articles)}
        </section>
      </div>
    );
  }
}

export default App;
