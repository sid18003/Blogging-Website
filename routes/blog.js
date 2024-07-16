    const express = require("express")
    const router = express.Router();

    //import controller

    const {createComment} = require("../controller/commentcontroller");
    const {createPost , getAllPosts}=require("../controller/postcontroller")
    const {likePost,unlikePost} = require("../controller/likecontroller")
    //mapping the routes
    router.post("/comment/create",createComment);
    router.post("/post/create",createPost);
    router.get("/post/getposts",getAllPosts);
    router.post("/likes/like",likePost);
    router.post("/likes/unlike",unlikePost);
    //exporting 
    module.exports = router;