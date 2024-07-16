const Post = require("../model/postmodel");


//creating the post
exports.createPost = async (req,res) =>{
    try{
     const {title,body} = req.body;
     const post = new Post({
        title,body
     });
     const savedPost = await post.save();
     res.status(200)
     .json({
        post:savedPost,
        message:"Post created Successfully"
     })
    }
    catch(error){
        res.status(500).json({
            error:"Error while creating the Post"
        })
    }
}


exports.getAllPosts = async (req,res) => {
    try{
     const posts = await Post.find({}).populate("comments").exec();
     res.status(200)
     .json({
        data:posts,
      success:true,
      message:"All posts are retrieved successfully"
     })
    }
    catch(error){
        res.status(500)
        .json({
            error:"error while fetching all posts"
        })
    }
}