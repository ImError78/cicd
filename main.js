const { exec } = require('child_process');

var cb = (e, o, oe) => {
    if (e) { console.log(e) }
    else { console.log ('1>',o,'\n2>',oe) }
}

var _ = (cmd) => exec(cmd,cb)

var test_sh = ['pwd','uname -r','lsb_release -a']

test_sh.forEach(_)

