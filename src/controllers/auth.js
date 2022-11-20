import User from "../models/user"
import jwt from "jsonwebtoken"

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
export const signin = async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findOne({email: body.email});
        //Kiểm tra email tồn tại
        if(!user){
            return res.status(400).json({
                message: 'Email không tồn tại'
            })
        }
        //Kiểm tra mật khẩu
        if(!user.authenticate(body.password)){
            return res.status(400).json({
                message: 'Mật khẩu không đúng'
            })
        }
        const token = jwt.sign({_id: user._id}, "123456");

        user.password = undefined; //Không trả vể mật khẩu

        return res.status(200).json({
            data: user,
            accessToken: token
        })
    } catch (error) {
        
    }
}