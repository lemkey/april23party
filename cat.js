const fs = require('fs');


module.exports = function () {
process.stdin.on('data', (data, file, done) => {
  
  const cmd = data.toString().trim();
  if (cmd === 'cat') {
  const path = process.cwd() + '/' + file;
  fs.readFile(path, 'utf8', (err, data) => {
    if (err){
      throw err;
    } else {
      done(data)
    }
  })
}
})
}


// const fs = require('fs');

// function cat(file, done) {
//   const path = process.cwd() + '/' + file;
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       done(data);
//     }
//   });
// }

// module.exports = cat;
