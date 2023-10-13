const router = require('express').Router();
const {addUser, getAllUser} = require('../controller/userController');

router.post('/addUser', addUser);
router.get('/getUsers', getAllUser);

module.exports = router;