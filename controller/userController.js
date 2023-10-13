const {User} = require('../models/Users');

const addUser = async(req, res) => {
    try {
        const {name, email, phone} = req.body;

        const newUser = new User({
            name, email, phone
        });

        await newUser.save();
        return res.status(201).json({
            status: "success",
            data: {newUser}
        })
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            message: error
        })
    }
}

module.exports = {
    addUser
}