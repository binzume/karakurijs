# KarakuriJS

Desktop automation module for Node.js

- DOM event friendly mouse and keyboard functions
- Support more special keys in Windows
- Functions for window, display, permissions

The purpose of this package is to complement RobotJS.


# Usage

```sh
npm install karakurijs
```

```js
const karakuri = require('karakurijs');

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
```

## API

### Mouse

- getMousePos()
- setMousePos(x: number, y: number)
- click(button: number)
- toggleMouseButton(button: number, down: number)

button: 0: left, 1: middle, 2: right (same as MouseEvent.button)

### Keyboad

- tapKey(key: string, modifiers: string[])
- typeString(text: string)
- setKeyState(key: string, down: boolean, modifiers: string[])
- getKeyState(key: string)

key: Same string as [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)

### Window

- getWindows()
- getWindowInfo(windowId: number)
- getWindowBounds(windowId: number)
- setForegroundWindow(windowId: number)
- getForegroundWindow() [Windows only]
- dropFiles(windowId: number, files: string[], x: numnber, y: number) [Windows only]

windowId: hWnd(Windows) or window number(MacOS)

### Display

- getDisplays()

### Permissions

- requestPermission('screenCapture' | 'accessibility'): boolean
- queryPermission('screenCapture' | 'accessibility'): boolean


## License

MIT
