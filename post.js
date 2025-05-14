const mongoose = require('mongoose');
const { useTransition } = require('react');


const postSchema = new mongoose.Schema({
    
    user: 
    
        {
             type: mongoose.Schema.Types.ObjectId, ref: 'user' 
        },date:{
            type:Date,
            default:Date.now
        },
        content:String,
        likes:[{
            type: mongoose.Schema.Types.ObjectId, ref: 'user' 
        }],
        
});

module.exports = mongoose.model('posts', postSchema);
