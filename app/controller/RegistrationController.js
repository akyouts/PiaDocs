const paitentData = require('../../app/model/paitentData')


function RegistrationController(){

    return{
        RegistrationPage(req,res){
            res.render('registrationPage')
        },
        getRegistrationData(req,res){
            var first_name = req.body.first_name
            var last_name = req.body.last_name
            var age = req.body.age
            var weight = req.body.weight
            var height = req.body.height
            var address = req.body.address
            var email = req.body.email
            var area_code = req.body.area_code
            var phone_no = req.body.phone_no
            var sex = req.body.sex
            var comment = req.body.comment

            

            var textData = new paitentData({
                fristname: first_name,
                lastname: last_name,
                age: age,
                weight: weight,
                height: height,
                address: address,
                email: email,
                areaCode: area_code,
                phone: phone_no,
                sex:sex,
                comment: comment


            })

            textData.save().then(()=>{
                console.log(req.files)
                res.redirect('/')
            }).catch((err)=>{
                res.send(err)
            })
            
           

        }
    }

}

module.exports = RegistrationController