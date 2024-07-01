import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";

// registrasi proses

const registrasi = async (req, res) => {
    const {username, password} = req.body;

    try {
        const duplikat = await User.findOne({username});

        if(duplikat){
            return res.status(400).send({msg: "username telah digunakan"});
        }
        if(password === undefined){
            console.log('password kosong')
        }
    
        const hashPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
            username,
            password: hashPassword
        })
    
        await newUser.save()
    
        res.status(200).send({msg: "selamat! akun berhasil dibuat"})
    
    } catch (error) {
        console.log('error', error);
        return res.status(500).send(`server error: ${error}`)
    }

   
}


// login proses

const login = async(req, res) => {
    const {username, password} = req.body;

    try {  
        const user = await User.findOne({ username });
      if (!user) return res.status(400).send('Invalid username or password');


      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Invalid username or password');

      const token = uuid().toString();

      user.token = token
      await user.save()

      res.status(200).json({token})

    } catch (error) {
        console.log('error', error);
        return res.status(500).send(`server error: ${error}`)
    }


}

const logout = async (req, res) => {
    

    try {
        
        const user = await User.findOneAndUpdate({ token: req.user.token }, { token: null });
        if (!user) return res.status(400).send('Invalid token');

        res.send('Berhasil Logout');
    } catch (error) {
        console.log('error', error);
        return res.status(500).send(`server error: ${error}`)
    }
}


export default {
    registrasi,
    login,
    logout
}

