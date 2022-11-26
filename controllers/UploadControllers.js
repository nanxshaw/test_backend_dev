const Upload = require("../models/UploadModels");

exports.all = async (req, res) => {
    try {

        const result = await Upload.findAll();
        res.send({
            status: 200,
            message: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
    }
}

exports.add = async (req, res) => {
    try {
        console.log(req)
        var file = req.file;
        let body = req.body;
        console.log(file)
        var data = {
            image:  file.filename,
            latitude: body.latitude,
            longitude: body.longitude,
        }
        await Upload.create(data);
        res.send({
            status: 200,
            message: 'Success insert data!',
        });
    } catch (err) {
        console.log(err);
    }
}