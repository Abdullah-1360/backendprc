const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://new_user:123@cluster0.zhfof.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    posts: 
    [
        {
             type: mongoose.Schema.Types.ObjectId, ref: 'posts' 
        }

    ]
});

module.exports = mongoose.model('users', userSchema);
