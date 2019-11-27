import tap from 'tap';
import { resolve } from 'path';
import { default as  pjson } from '../package.json';

tap.test(t => {
    t.ok(process.versions.node.match('13.2.0'), 'Node version must be 13.2.0.');
    t.ok(typeof pjson.exports === 'string', 'pjson should have an exports property with a value of type string');
    // t.ok(require.main.filename === resolve(process.cwd(), pjson.exports), 'string exports should be the main'); // by definition, the pjson.exports string isMain, so not sure how to test... 
    t.done();
});

