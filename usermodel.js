const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://text_stegano:text_stegano@cluster0.zhfof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
module.exports=mongoose.model('user',userSchema);
