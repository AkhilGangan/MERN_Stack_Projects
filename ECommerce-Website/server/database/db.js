import mongoose from 'mongoose';

const Connection = async (username, password) => {
  
    const URL = `mongodb://${username}:${password}@ac-tvlsapu-shard-00-00.0wpyqxb.mongodb.net:27017,ac-tvlsapu-shard-00-01.0wpyqxb.mongodb.net:27017,ac-tvlsapu-shard-00-02.0wpyqxb.mongodb.net:27017/MERN?ssl=true&replicaSet=atlas-zrwt3l-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;