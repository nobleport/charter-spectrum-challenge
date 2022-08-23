const showsArray = require('../../shows.json');
const packagesArray = require('../../packages.json');
const {insertShow, insertPackage, insertNetwork} = require('./seed')
const networkObj = {
    "CBS": 1,
    "CW": 2,
    "ABC": 3,
    "NBC": 4,
    "BET": 5,
    "FreeForm": 6,
    "Nickelodeon": 7,
    "Bravo": 8,
    "HBO": 9,
    "Showtime" : 10,
    "STARZ": 11,
}

const networkArr = ["CBS", "CW", "ABC", "NBC", "BET", "FreeForm", "Nickelodeon", "Bravo", "HBO", "Showtime", "STARZ"]

const seedShows = (showsArray) => {
    for(let i = 0; i < showsArray.length; i++) {
        let show = showsArray[i]
        insertShow(show['title'], networkObj[show[network]], show[imdbRating])
    }
}

const seedNetworks = (networkArrray) => {
    for(let i = 0; i < networkArrray.length; i++) {
        insertNetwork(networkArrray[i])
    }
}

const seedPackage = (packagesArray) => {
    for(let i = 0; i < packagesArray.length; i++) {
        let networkIds = [];
        let package = packagesArray[i];
        let networks = package['networks'];
        networks.forEach((network)=>{
            networkIds.push(networkObj[network])
        })
        insertPackage(package['name'], networkIds, package['price'])
    }
}

seedShows(showsArray);
seedNetworks(networkArr);
seedPackage(packagesArray);