import User from '../model.user.js'  // it is validate the information from the frontend


export const signupUser = async (request,response) =>{
    try {
        const user = request.body; //it is the request that is stored in the body
        const newUser = new User(user); 
        await newUser.save();

        return response.status(200).json({msg: 'Signup Sucessfull'});

    } catch(error){
        return response.status(500).json({msg: 'Error , Signup not succesfull'}); // this will give message if we are not succesfull in sav
        // the data to the database 


    }
}

export default signupUser