const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({
    movie_id:{
        type:Number,
        require:true,  
        unique:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    language:{
        type:String,

    },
    description:{
        type:String,
        require:true,
    },
     duration:{
        type:String,
     },
     rating:{
            type:Number,
     }
});
module.exports=mongoose.model("Movies",movieSchema);
