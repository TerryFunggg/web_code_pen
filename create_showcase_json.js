var finder = require('findit')('./dist/showcases');
var path = require('path');
fs = require('fs');

const obj = [];
finder.on('file', function (file, stat) {
  var f = file.match(/\w+\.html/)
  if (f === undefined || f == null) return;
  var file_name = f.input.substring(14)
  var pointerStart = file_name.indexOf("/")
  var pointerEnd = file_name.lastIndexOf("/")
  var imgName;
  if(pointerStart === pointerEnd) {
    // means it is single html file not in directory
    imgName = file_name.substring(pointerStart + 1, file_name.indexOf(".")) + ".png"
  } else {
    imgName = file_name.substring(pointerStart + 1, pointerEnd) + ".png"
  }

  obj.push({ "html": file_name, "img": imgName });

  fs.writeFile(
    path.resolve(__dirname, 'dist/showcases.json'),
    JSON.stringify(obj),
    handleError);
});

function handleError(err){
  if (err) return console.log(err);
}
