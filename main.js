
const { exec } = require('child_process');

const http = require('http')
const port = 8080

const hello = (_, res) => {
    res
        .write('Hello World')
        .end()
}

const check = (error) => {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log('Server is listening on port' + port);
    }
}

const cb = (e, o, oe) => {
    if (e) { console.log(e) }
    else { console.log ('1>',o,'\n2>',oe) }
}

const _ = (cmd) => exec(cmd,cb)

const test_sh = ['pwd','uname -r','lsb_release -a']

test_sh.forEach(_)

http
    .createServer(hello)
    .listen(port, check)
