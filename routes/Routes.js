


module.exports = app => {
  //controllers
  const upload = require("../controllers/UploadControllers");
  
  //middleware
  const upload_image = require("../middleware/Upload");

  var router = require("express").Router();

  router.get("/upload", upload.all);
  router.post("/upload/add", [upload_image.uploadFile.single('image')], upload.add);
  
  app.use('/api/', router);
};