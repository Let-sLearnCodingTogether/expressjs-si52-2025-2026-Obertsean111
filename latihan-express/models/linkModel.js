import mongoose from "mongoose"

const linkSchema = new mongoose.schema (
    {
        title : {
            type : String,
            require : [true, "title wajib di isi"],
            unique : true,
        },
        icon : {
            type : String,
            required : [true, "icon wajib di isi"],
            unique : true,
            trim : true
        },
        url : {
            type : String,
            required : [true, "url wajib di isi"],
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
       
const linkModel = mongoose.Model ("User", linkSchema)
        
export default linkSchema
