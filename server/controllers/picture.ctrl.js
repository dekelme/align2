const { response } = require('express');
const axios = require('axios');

let pictureList = [];
let pageCount = 1;



exports.pictureController = {
    getPictures(req, res) {
        const func = () => {
            axios.get(`https://picsum.photos/v2/list?page=${pageCount}&limit=100`)
                .then(docs => {
                    console.log("docs", docs)
                    pictureList = docs.data
                    pageCount += 1
                })
                .catch(err => console.log(`Error getting the data from URL: ${err}`))
        }

        console.log("befor if");
        let nextFivePic = []
        console.log(pictureList)
        if (pictureList.length < 5) {
            func()
        }

        for(let i = 0; i < 5; i++) {
            nextFivePic.push(pictureList.shift())
        }
        res.json(nextFivePic)
    },
};


