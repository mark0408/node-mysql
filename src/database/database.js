import Sequelize from "sequelize";

export const sequelize = new Sequelize('interview_db','interview','interview123',{
    host: 'movistardb.cjcmv3tc2pyq.us-east1.rds.amazonaws.com:3306',
    dialect: 'mysql'
})