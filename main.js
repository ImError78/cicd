
const { exec } = require('child_process');

const http = require('http')
const port = 8080

var hello = (_, res) => {
    res
        .write('Hello World')
        .end()
}

var check = (error) => {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log('Server is listening on port' + port);
    }
}

var cb = (e, o, oe) => {
    if (e) { console.log(e) }
    else { console.log ('1>',o,'\n2>',oe) }
}

var _ = (cmd) => exec(cmd,cb)

var test_sh = ['pwd','uname -r','lsb_release -a']

test_sh.forEach(_)

http
    .createServer(hello)
    .listen(port, check)
