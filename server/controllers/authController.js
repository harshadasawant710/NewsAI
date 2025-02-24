import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                message: "User is not registered, Please Register and try again"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        //console.log("in here",user.password)
        if (!isMatch) {
            return res.status(401).json({
                message: 'Password do not match'
            })
        }
        const token = jwt.sign({ id: user._id, name: user.name }, 'hello_this_string', { expiresIn: '1d' })

        res.cookie('token', token, {
            httpOnly: true
        })
        res.status(200).json({
            // token,
            preferences : user.preferences,
            message: 'login successful'
        })
    }

    catch (error) {

    }

}

export const verify = async (req,res) =>{
console.log(req.user,"verify")
if(!req.user){

}else{
    return res.status(200).json({
        authenticated : true,
        id :req.user.id,
        name : req.user.name
    })
}
}

export const register = async (req, res) => {
    try {

        const { name, password, email } = req.body;
        const user = await User.findOne({ email });


        if (user) {
            return res.status(404).json({
                message: "User is already registred"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, password: hashedPassword, email })

        console.log("New user registered:",newUser)


        res.status(201).json({
            data: newUser,
            message: "Sucessfully Registred"
        })
    }
    catch (error) {

    }
}