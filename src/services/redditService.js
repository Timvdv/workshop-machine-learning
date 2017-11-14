export default class RedditService {

    getRedditArticles(topic) {
        return fetch(`https://www.reddit.com/r/${topic}.json`).then(function (response) {
            return response.json();
        }).then((json) => {

            if(json.error === 404) {
                console.error("Enter a valid Reddit topic");
                return [];
            }

            return json.data.children.map((item) => {
                return {
                    date: item.data.created,
                    title: item.data.title,
                    content: item.data.selftext,
                    upvotes: item.data.ups,
                    downvotes: item.data.downs,
                    image: item.data.url
                };
            });
        
        });
    }
    
}