import data from '../data/data';

let cards = data();

const getCards = () => {
    return cards;
}

const getCard = (id) => {
    const matches = cards.filter(c => c.id === id); // See arrow functions https://github.com/airbnb/javascript#arrow-functions
    return matches.pop();
}

const updateCard = (id, isFavourite) => {
    let card = undefined;
    cards = cards.map(c => {
        if (c.id === id) {
            card = {...c, isFavourite}; // Immutablity: https://medium.com/front-end-weekly/immutability-in-array-of-objects-using-map-method-dd61584c7188
            return card;
        }
        return c;
    });
    return card;
}

export default {
    getCards,
    getCard,
    updateCard,
}
