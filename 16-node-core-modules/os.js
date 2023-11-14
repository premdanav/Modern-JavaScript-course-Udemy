const os = require('os')
//arch()
console.log(os.arch())//x64

//platform|()
console.log(os.platform())//win32

//cpus()
console.log(os.cpus())

//freemem()
console.log(os.freemem());
console.log(os.freemem() / 1024 / 1024 / 1024);

//total()
console.log(os.totalmem());
console.log(os.totalmem() / 1024 / 1024 / 1024);

//homedir
console.log(os.homedir())

//uptime
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const mins = Math.floor(uptime / 60) % 60;
const secs = Math.floor(uptime) % 60;
console.log(`uptime=>${days} days,${hours} hours,${mins} mins, ${secs} secs`);

//hostname
console.log(os.hostname())