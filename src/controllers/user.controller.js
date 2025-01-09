import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler( async (req, res ) => {
    //get user details(model)
    //validation
    //already exist
    //check for images and avatar
    //upload to cloudinary
    //create user object
    //remove password and refresh token 
    //check for user creaton
    //return response

    const {fullname, email, username, password} = req.body
    console.log("email: ", email);
    

})

export {registerUser}