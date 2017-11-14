import React from 'react';
import ReactEmoji from 'react-emoji';

const Article = ({ article }) => {

    let sentiment = article.sentiment > 0.3 ? '' : 'sad';
        sentiment = article.sentiment > 0.7 ? 'happy' : sentiment;

    let emoji = ":neutral_face:";

    if (sentiment === "sad") emoji = ":(";
    if (sentiment === "happy") emoji = ":D";
    
    article.sentiment = Math.round(article.sentiment * 100)

    return (
        <article key={article.id} className={`article ${sentiment}`}>
            <div className="emoji">{ReactEmoji.emojify(emoji)}</div>
            <div className="content">
                <h3>{article.title}</h3>
                <p>{article.selftext}</p>
            </div>
            <div className="sentiment">
                {article.sentiment || ""}
            </div>
        </article>
    );
};

export default Article;