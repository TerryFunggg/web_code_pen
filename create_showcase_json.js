var finder = require('findit')('./dist/showcase');
var path = require('path');
fs = require('fs');

const obj = [];
finder.on('file', function (file, stat) {
  if (file === undefined || file == null) return;
  file = file.match(/\w+\.html/)[0]
  obj.push({ "html": file, "img": file.split(".")[0] + ".png" });

  fs.writeFile(
    path.resolve(__dirname, 'dist/showcase.json'), 
    JSON.stringify(obj), 
    handleError);
});

function handleError(err){
  if (err) return console.log(err);
}