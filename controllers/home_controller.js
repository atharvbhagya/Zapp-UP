const Post = require('../models/post');
const User = require('../models/user');
// const user = require('../models/user')


module.exports.home = async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });
    try{
    
    // populate the user of each post
    let posts= await Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    
    let users= await User.find({}); 
    
    
    return res.render('home', {
        title: "Zapp-UP | Home",
        posts: posts,
        all_users: users
        
    });
    
}catch(err){

  console.log('Error' ,err);
}


        

}

// module.exports.actionName = function(req, res){}