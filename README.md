# Workshop

## Machine learning: The easy way

Door: Tim van de Vathorst

---

### Opdracht 1: Draai de voorbeeld code

**Stap 1:** Clone de Github repository van [https://github.com/Timvdv/workshop-machine-learning](https://github.com/Timvdv/workshop-machine-learning)

**Stap 2:** Maak een account op [https://indico.io/](https://indico.io/)

**Stap 3:** Vervang de INDOCO_APP_KEY_HERE met jouw persoonlijke API code in het .env bestand.

**Stap 4:** Run het commando: yarn install

**Stap 5:** Run het commando: yarn start

---

### Opdracht 2: Machine learning inbouwen

De redditService.js haalt een lijst artikelen op vanuit de Reddit website. Deze artikelen worden vervolgens doorgestuurd naar de indicoService.js, deze service moet worden ingericht om de machine learning te regelen

**Stap 1:** In de indicoService krijgen we een artikel object opgestuurd, we willen natuurlijk niet dit hele object analyseren dus moeten we iets schrijven om alleen een lijstje van de titels te maken. Dit kan met de volgende code.

```javascript
        const title_list = articles.map( (article) => {
            return article.title;
        });
```

**Stap 2:** Ga naar de indicoService.js en gebruik de fetch methode om POST call te maken naar `https://apiv2.indico.io/sentimenthq/batch`. In deze POST call willen we ook onze API key en de artikelen meesturen, dit gebeurd in de `body`.

```javascript
        return fetch('url_here', {
            method: 'POST',
            body: JSON.stringify({
                api_key: process.env.REACT_APP_INDICO_KEY,
                data: title_list
            })
        }).then((response) => {
            return response.json();
        }).then((json) => {
          // Format code hier
        });
```

**Stap 4:** Map nu de artikelen naar het juiste formaat zodat ze getoond kunnen worden in de Front-end. Dit kan met de volgende code.

```javascript
            return articles.map((article, index) => {
                article.sentiment = json.results[index];
                return article;
            });
```

**Stap 5:** Bekijk het resultaat!

**Stap 6:** Pas het Reddit topic 'app.jsx' aan in naar iets wat jij leuk vind en zie de scores van de artikelen veranderen. Protip: Probeer `funnycat`

---

### Opdracht 3 (bonus): Kies zelf een nieuwe vorm van machine learning en implementeer deze

Bekijk [https://indico.io/docs](https://indico.io/docs) voor alle mogelijke opties

Voor text analyses zijn deze opties mogelijk:

    - sentiment
    - sentiment_hq
    - text_tags
    - language
    - political
    - keywords
    - people
    - places
    - organizations
    - twitter_engagement
    - personality
    - relevance
    - text_features
    - emotion
    - intersections

---

### Opdracht 4 (bonus): Wees creatief! Verzin een leuke usecase om machine learning bij toe te passen
