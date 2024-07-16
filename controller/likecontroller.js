const Post = require("../model/postmodel");
const Like = require("../model/likemodel");


exports.likePost = async (req,res) =>{
    try{
     const {post,user} = req.body;
     const like = new Like({
        post,user
     });
     const savedpost = await like.save();
     const updatedPost = await  Post.findByIdAndUpdate(post,{$push:{likes:savedpost._id}},{new:"true"})
     .populate("likes").exec();
     res.status(200).json({post:updatedPost,success:true,message:"Post Liked Successfully"})
    }
    catch(error){
      res.status(500).json({success:false,message:"error while liking the post"})
    }
}

exports.unlikePost = async(req,res) =>{
    try{
     const {post,like} = req.body;
     const deletelike =  await Like.findOneAndDelete({post:post,_id:like});
     //updating
     const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletelike._id}},{new:true})
     res.status(200).json({post:updatedPost,message:"unliked post successfully"})
    }
    catch(error){
        res.status(500).json({message:"error while unliking the post"})
    }
}