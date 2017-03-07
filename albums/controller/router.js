const file = require("../modules/file");
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
exports.showIndex = function (req,res) {
   function render(arr) {
     res.render("index",{
       "albums":arr
     })
     res.end();
   };
   file.readAlbums(render);
};

exports.showAlbum = function (req,res) {
    function render(arr) {
      res.render("album",{
        "photo":arr,
        "albumName":req.params.albumName
      })
      res.end();
    };
    if( req.params.albumName !== "form" ){
       file.photo(render,req.params.albumName);
    };
}
exports.showForm = function (req,res) {
    if(req.method.toLowerCase() === "post"){
      var form = new formidable.IncomingForm();
      form.uploadDir = "./uploade";
      form.parse(req, function(err, fields, files) {
        //console.log(fields,files);
        var extname = path.extname(files.tupian.name);
        var oldPath = __dirname + "/../" + files.tupian.path;
        var newPath = __dirname + "/../uploade/" + fields.wenjianjia + "/" + files.tupian.path.split("\\")[1] + extname;
        fs.rename(oldPath,newPath,function (err) {
          console.log(err);
        });
      });
    }
      function render(arr) {
        res.render("form",{
          "albums":arr
        })
        res.end();
      };
      file.readAlbums(render);
  }
