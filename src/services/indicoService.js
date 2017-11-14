export default class IndicoService {

    analyzeSentiment(articles) {
        // Machine learning code
        const title_list = articles.map((article) => {
            return article.title;
        });
        return fetch('https://apiv2.indico.io/sentimenthq/batch', {
            method: 'POST',
            body: JSON.stringify({
                api_key: process.env.REACT_APP_INDICO_KEY,
                data: title_list
            })
        }).then((response) => {
            return response.json();
        }).then((json) => {
            const mapped_articles = articles.map((article, index) => {
                article.sentiment = json.results[index];
                return article;
            });            

            return mapped_articles;
        });                
    }
}