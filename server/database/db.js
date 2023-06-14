import mongoose from "mongoose";

export const Connection = async (username_db,pass_db) =>{
    const URL = `mongodb://${username_db}:${pass_db}@ac-d2bmife-shard-00-00.pmvbaut.mongodb.net:27017,ac-d2bmife-shard-00-01.pmvbaut.mongodb.net:27017,ac-d2bmife-shard-00-02.pmvbaut.mongodb.net:27017/?ssl=true&replicaSet=atlas-x4q2an-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser:true })
        console.log('Database connected')

    }catch(error){
        console.log('Error while connecting',error);
    }
}

export default Connection;
