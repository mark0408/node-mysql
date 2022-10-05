import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'

export const Users = sequelize.define('Users',{
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user : {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    fullName : {
        type: DataTypes.STRING
    }
})