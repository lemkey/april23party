const fs = require('fs');

module.exports = function(){
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'ls'){
    fs.readdir('./', 'utf8', (err, files) => {
      if (err){
       throw err
      } else {
       process.stdout.write(files.join('\n'))
       process.stdout.write("prompt > ");
    }
  })
  }
})
}


// const fs = require('fs');

// const ls = function (done) {
//   fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       done(files.join('\n'));
//     }
//   });
// };

// module.exports = ls;
