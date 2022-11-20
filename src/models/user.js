import mongoose, {Schema} from "mongoose";
import {createHmac} from 'crypto'
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});
userSchema.methods = {
    authenticate(password){
        return this.password === this.encryptPassword(password);
        // Mật khẩu trong db === mật khẩu gửi lên được mã hóa
    },
    encryptPassword(password){
        if(!password){
            return ""
        }
        return createHmac("sha256","123456").update(password).digest("hex")
    }
}
userSchema.pre("save", function(next){
    this.password = this.encryptPassword(this.password)
    next()
})
export default mongoose.model('User', userSchema)