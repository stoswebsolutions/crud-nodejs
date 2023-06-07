var express = require('express')
var router = express.Router()
var usermodel = require('../models/usermodel')

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
        mobile: req.body.mobile
    }
    const postdata = await new usermodel(reqbody)
    postdata.save().then(returnres => {
        res.json(returnres)
    })
})

router.get('/:id', async (req, res) => {
    var id = req.params.id
    const data = await usermodel.findById({_id:id})
    res.json(data)
})

router.delete('/:id', async (req, res) => {
    var id = req.params.id
    const data = await usermodel.findOneAndDelete({_id:id})
    res.json(data)
})

router.put('/:id', async (req, res) => {
    var id = req.params.id
    var data = req.body
    const specificData = await usermodel.findOneAndUpdate({_id:id},data)
    res.json(specificData)
})



module.exports = router