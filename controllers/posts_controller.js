const Post = require('../models/post');
const Comment= require('../models/comment')

module.exports.create = async function(req, res){
    try{

        let posts= await  Post.create({
            content: req.body.content,
            user: req.user._id
        }); 
        
        
        return res.redirect('back');
    }catch(err){
        console.log('Error in creating a post !')
    }

}

module.exports.destroy= async function(req,res){
    // .id means converting the object d into string
    
    try{
            let post= await Post.findById(req.params.id); 

            if(post.user == req.user.id){
                post.remove();
                
                Comment.deleteMany({post:req.params.id}, function(err){
                    return res.redirect('back');
                });
            }else{
                return res.redirect('back');
            }
        }
        catch(err){
            console.log('Error in deleting a post !')
        }

    
}