const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:String,
    content:String,
    thumbnail:String,
    username:String,
    categories:String});

const post = mongoose.model("Post", PostSchema);
module.exports = post;
