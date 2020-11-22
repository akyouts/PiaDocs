function homeController(){
    return {
    homePage(req,res){
        res.render('index')
    }
}
}

module.exports = homeController