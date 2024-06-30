const User = require("../models/User")

const registerCreate = async (req, res) => {
    console.log(req.body)
      User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    .then((data)=>
    {
        res.status(200).json({ success: true, message: 'signup successful',data })

    })
    .catch((err)=>
    {
        res.send(err)
    })

    /*try {
        const data = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        if(!data){
            return res.send("not able to reg")
        }
        res.json(data)

    } catch (error) {
        res.send(error)
    }*/
}
module.exports = { registerCreate }