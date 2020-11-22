const homeController = require('../app/controller/homeController')
const RegistrationController = require('../app/controller/RegistrationController')
const multer = require('multer')



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'D:/Projects/PiaDoc/resoureses/PaitentImages')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+"-"+Date.now+"-"+'.jpeg' )

    },
   
  })

  const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };

  var upload = multer({ storage: storage , fileFilter : multerFilter  })


function mainroutes(app){
    
    // GET Routes 
    app.get('/',homeController().homePage)
    app.get('/registration',RegistrationController().RegistrationPage)


    //Post Routes
    app.post('/registration',upload.array('images',200),RegistrationController().getRegistrationData)
}

module.exports = mainroutes
