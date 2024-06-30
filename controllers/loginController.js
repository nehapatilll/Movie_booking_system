const Login=(req,res)=>{
    console.log(req.body)
    res.status(200).json({ success: true, message: 'Login successful',...req.body })
}
module.exports={Login}
