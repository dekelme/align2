const { Router } = require('express'); 
const {pictureController} = require('../controllers/picture.ctrl');

const router = new Router();  
router.get('/', pictureController.getPictures);

module.exports = {router};
