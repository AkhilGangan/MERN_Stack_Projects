import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () =>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    
    const MONODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-tvlsapu-shard-00-00.0wpyqxb.mongodb.net:27017,ac-tvlsapu-shard-00-01.0wpyqxb.mongodb.net:27017,ac-tvlsapu-shard-00-02.0wpyqxb.mongodb.net:27017/?ssl=true&replicaSet=atlas-zrwt3l-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URI);
        console.log('Database connected successfully');
    } catch (error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;