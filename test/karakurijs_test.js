// Run test on electron:
// bash -c "TEST_MODE=1 ELECTRON_RUN_AS_NODE=1 electron karakurijs/test/karakurijs_test.js"

const karakuri = require('..');

let pos = karakuri.getMousePos();
console.log(pos);
let wid = karakuri.windowFromPoint(pos.x, pos.y);
console.log(wid);
let w = karakuri.getWindowInfo(wid);
console.log(w);
karakuri.setForegroundWindow(wid);

karakuri.click();

karakuri.setKeyState('A', true);
karakuri.setKeyState('A', false);
karakuri.tapKey('a');
karakuri.tapKey('!');
karakuri.tapKey('こ');
karakuri.typeString('んにちは!!🍣');

if (process.platform == 'darwin') {
    karakuri.tapKey('a', ['Command']);
} else {
    karakuri.tapKey('a', ['Control']);
}

// let files = ["C:/test.jpg"];
// let p = karakuri.getMousePos();
// console.log(karakuri.dropFiles(w.id, files, p.x - w.bounds.x, p.y - w.bounds.y));
