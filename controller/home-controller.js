// Add a fucntion using:
// module.exports.<function-name> = function(req,res){}

module.exports.home = function(req, res){
    return res.end("<h1>Function present in home controller</h1>");
}


