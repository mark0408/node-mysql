import {Users} from '../models/Users.js'

export const getAllUsers = (req,res) =>{
    try {
        const allUsers = Users.findAll();
        res.json(allUsers)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}

export const getFullNameUser = async (req,res) =>{
    try {
    const {user,password} = req.body;
    const userDB = await Users.findOne({ where: { user, password } });
    if (userDB === null) {
    console.log('Not found!');
    userDB.fullName = 'Not found!'
    } else {
    console.log(userDB instanceof Project); // true
    console.log(userDB.fullName); // 'My Title'
    }
    res.json({
        fullNameUser:userDB.fullName
    })
} catch (error) {
    return res.status(500).json({message:error.message})
}
}