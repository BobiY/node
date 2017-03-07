const fs = require('fs');

exports.readAlbums = function(callback){
  fs.readdir(__dirname + "/../uploade",function (err,files) {
        var arr = [];
        if(err) {
          console.log(err);
        }else{
           (function dieDai(i) {
             if(i === files.length){
               callback(arr);
               return;
             }
             fs.stat(__dirname + "/../uploade/" + files[i],function (err,stats) {
                 if(stats.isDirectory()){
                   arr.push(files[i])
                 };
                 dieDai(i+1);
             })
           })(0);
        }
  })
};
exports.photo = function(callback,url){
  fs.readdir(__dirname + "/../uploade/" + url,function (err,files) {
        var arr = [];
        if(err) {
          console.log(err);
        }else{
           (function dieDai(i) {
             if(i === files.length){
               callback(arr);
               return;
             }
             fs.stat(__dirname + "/../uploade/" + url + "/" + files[i],function (err,stats) {
                 if(stats.isFile()){
                   arr.push(files[i])
                 };
                 dieDai(i+1);
             })
           })(0);
        }
  })
};
