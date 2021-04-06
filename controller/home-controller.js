// Add a fucntion using:
// module.exports.<function-name> = function(req,res){}

module.exports.home = function(req, res){
    return res.render('home',{
        'title':'TO-DO'
    });
}


