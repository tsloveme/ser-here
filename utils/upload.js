var path = require('path');
var fs = require('fs');
const fileUpload = require('express-fileupload');

module.exports = function(app, dir){
    // default options
    app.use(fileUpload());

    app.post('/upload', function(req, res) {
        console.log(1111111111111111111);
        if (!req.files) {
            return res.status(400).send('No files were uploaded.');
        }
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.file;

        // Use the mv() method to place the file somewhere on your server
        var fileName = sampleFile.name.split(/\.\w+$/)[0];;
        var fileType = sampleFile.name.match(/(\.\w+)$/)[1];
        do {
            //console.log(path.resolve(dir, `./server/uploadFile/${fileName}${fileType}`));
            try {
                stat = fs.statSync(path.resolve(dir, `./server/uploadFile/${fileName}${fileType}`));
                if (stat) {
                    var match = fileName.match(/(.*\-)(\d+)/);
                    if (match) {
                        fileName = match[1] + (parseInt(match[2]) + 1);
                    } else {
                        fileName += '-1';
                    }
                    //console.log(fileName);
                }
            } catch(e) {
                stat = null;
            }
            //console.log();
            
        } while(stat);
        try {
            fs.stat(path.resolve(dir, './server/uploadFile'))
        } catch (e) {
            fs.mkdirSync(path.resolve(dir, './server/uploadFile'));
        }
        sampleFile.mv(path.resolve(dir, './server/uploadFile/' + fileName + fileType), function(err) {
            if (err)
            return res.status(500).send(err);

            res.send('File uploaded!');
        });     
    });
}