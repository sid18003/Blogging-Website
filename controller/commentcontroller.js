// importing the models
const Comment = require("../model/commentmodel")
const Post = require("../model/postmodel")

exports.createComment = async (req,res)=>{
    try{
    const {post , user , body } = req.body;
    const comment = new Comment({
        post,user,body
    });

    // saving the comment;
    const savedComment = await comment.save();

    // finding the post by id and inserting the comment in its comment array
    const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
    .populate("comments")
    .exec();
     res.status(200)
     .json({
        success:true,
        post:updatedPost
     });
    }
    catch(error){
      return res.status(500).json({
        error:"error while creating comment"
      })
    }
}