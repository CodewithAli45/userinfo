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

const getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        return res.status(200).json({
            message: "success",
            data: {user}
        });

    } catch (error) {
        return res.status(501).json({
            message: "failure",
            status: error
        });
    }
}

module.exports = {
    addUser,
    getAllUser
}