const express = require('express');
const router = express.Router();
const blogcontroller = require('../controllers/blogcontroller');

const verify=function(req,res,next){
    let body=req.body;    
    
    if("title" in body){
        next();
    }
    else{
        res.json({"data":"Title required"});
    }
}

router.get('/', blogcontroller.getAllBlogs);
router.post('/', verify, blogcontroller.createBlog);
router.get('/:authorId', blogcontroller.getBlogByAuthorId);

module.exports = router;