import mongoose from "mongoose"

const userSchema = new mongoose.schema(
    {
        username : {
            type : String,
            require : [true, "User name wajib di isi"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        password : {
            type : String,
            required : [true, "Password tidak boleh kosong"],            
        }
    },
    {
        timestamps : true
    }
)

const UserModel = mongoose.Model ("User", userSchema)

export default UserModel
