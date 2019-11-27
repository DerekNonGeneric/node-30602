const tap = require('tap');
const { resolve, join } = require('path');
const pjson = require('../package.json');
console.log(resolve(process.cwd(), pjson.exports));
tap.test(t => {
    t.ok(process.versions.node.match('13.2.0'), 'Node version must be 13.2.0.');
    t.ok(typeof pjson.exports === 'string', 'pjson should have an exports property with a value of type string');
    t.ok(require.main.filename === resolve(process.cwd(), pjson.exports), 'string exports should be the main');
    t.done();
});
