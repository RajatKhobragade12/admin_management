const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");

async function register(req, res) {
    try {
        let { email, password } = req.body;
        if (!email || !password) {

            return res.status(400).send({ message: "Missing fields" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).send({ message: "Invalid email format" });
        }
        let exsistingUser = await userModel.findOne({ email: email });
        if (exsistingUser) {
            return res.status(400).send({ message: "Email already registered" })
        }
        let users = await userModel.create({ email: email, password: password });
        return res.status(201).send({ message: "User created successfully", data: users })

    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message })
    }
}


async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: "Missing fields" })
        }
        let exsistingUser = await userModel.findOne({ email: email });

        if (!exsistingUser) {
            return res.status(404).send({ message: "User not found" })
        }
        if (exsistingUser.email !== email || exsistingUser.password != password) {
            return res.status(400).send({ message: "Incorrect email or password" })
        }
        let token = jwt.sign({ email: email }, process.env.SECRET)
        res.status(200).send({ message: "User login successfully", token: token })

    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message })
    }
}

module.exports = {
    register,
    login
}