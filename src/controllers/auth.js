import User from "../models/user"

export const signup = async (req, res) => {
    const {name, email, password} = req.body
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.status(400).json({
                message: "Người dùng đã tồn tại"
            })
        }else{
            const user = await new User({name, email, password}).save()
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
}