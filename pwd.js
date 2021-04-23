
// process.stdout.write('prompt1 > ');

module.exports = function () {
  process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){
  const currentPath = process.cwd();
  process.stdout.write(currentPath)
  }
})
}


// const pwdCommand = function () {
//   console.log(process.cwd());
//   process.stdout.write('\nprompt > ');
// };

// module.exports = pwdCommand;

