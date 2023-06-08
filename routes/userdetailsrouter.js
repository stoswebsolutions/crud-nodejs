var express = require('express')
var router = express.Router()
var usermodel = require('../models/usermodel')
var nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "mail.s2swebsolutions.com",
    port: "465",
    secure: true,
    auth: {
        user: 'swamy@s2swebsolutions.com',
        pass: 's2sWeb@2023'
    }
})

router.get('/', async (req, res) => {
    var data = await usermodel.find()
    res.json(data)
})

router.post('/', async (req, res) => {
    var reqbody = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age,
        dob: req.body.dob,
        place: req.body.place,
        mobile: req.body.mobile,
        image: 'images/3.jpg'
    }
    const postdata = await new usermodel(reqbody)
    postdata.save().then(returnres => {
        var mailOptions = {
            from: "swamy@s2swebsolutions.com",
            to: req.body.email,
            subject: "Registration Test",
            text: "You have successfully registered",
            attachments: {
                filename: '3.jpg',
                path: 'images/3.jpg'
            }
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (!err) {
                res.json({ status: "Ok", data: info })
            }
            else {
                res.json({ status: "error", data: err })
            }
        })
    })
})

router.get('/:id', async (req, res) => {
    var id = req.params.id
    const data = await usermodel.findById({ _id: id })
    res.json(data)
})

router.delete('/:id', async (req, res) => {
    var id = req.params.id
    const data = await usermodel.findOneAndDelete({ _id: id })
    res.json(data)
})

router.put('/:id', async (req, res) => {
    var id = req.params.id
    var data = req.body
    const specificData = await usermodel.findOneAndUpdate({ _id: id }, data)
    res.json(specificData)
})



module.exports = router