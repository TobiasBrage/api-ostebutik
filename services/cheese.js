const cheeses = require('../data/cheese.js');

/**
 * @module Cheeses 
 */
module.exports = {
    /**
     * getAll
     * Returnerer et JSON objekt med alle oste fra kartoteket
     * @returns {object}
     */
    'getAll': () => cheeses, 

    /**
     * getOne
     * Returnerer et JSON objekt med en enkelt ost fra kartoteket
     * @param {string} varenr - varenummeret på en ost
     * @returns {object}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if(cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });
        
        if(currentCheese !== null) {
            return currentCheese;
        } else {
            return {"code": "ResourceNotFound", 
            "message": varenr + " dosen't excist"};
        }
    }
};