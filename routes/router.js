const router = require('express').Router();
const {addUser} = require('../controller/userController');

router.post('/addUser', addUser);

module.exports = router;