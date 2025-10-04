import mongoose from "mongoose"

const profileSchema = new mongoose.schema (
    {
        displayName : {
            type : String,
            require : [true, "Display name wajib di isi"],
            unique : true,
            trim : true
        },
        profilePicture : {
            type : String,
            required : [true, "profile Picture cannot be empty "],
            unique : true,
            trim : true
        },
        bio : {
            type : String,
            required : [true, "Bio wajib di isi"],
            minLength : [10, "Minimal 10 karakter"],
            maxLength : [150, "Maximal 150 karakter"],
            trim : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            reff : "User",
            required : true
        },
    },
    {
        timestamps : true
    }
)
       
const ProfileModel = mongoose.Model ("User", profileSchema)
        
export default ProfileSchema
