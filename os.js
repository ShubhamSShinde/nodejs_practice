const os = require('os');
const path = require('path');

// console.log(path.parse('C:\Users\Dell\Desktop\absi'))

const pathobj = path.parse('C:\Users\Dell\Desktop\absi');
console.log(pathobj.root)


// {
//     root: 'C:',
//     dir: 'C:',
//     base: 'UsersDellDesktopabsi',
//     ext: '',
//     name: 'UsersDellDesktopabsi'
//   }

// const a= os.freemem();
// console.log(os.arch());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.hostname());


// console.log(a/1024/1024/1024);