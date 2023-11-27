exports.validateLogin = async (req,res,next)=>{
    let {username} = req.body;

    if(!username) return res.status(401).end()

    next()
}


exports.validatesignUp = async (req,res,next)=>{
    let {username,password,role} = req.body

    if(!username || !password || !role) return res.status(400).json({
        success:false,
        message:"pass all parameters"
    })

    next()
}