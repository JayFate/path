# @jayfate/path

跨端的 `path` 模块，在 Windows/MacOS/Linux 均以 `/` 作为路径分隔符进行路径解析及返回解析后的路径。

### 安装

安装 `@jayfate/path`

```sh
npm install -S @jayfate/path
```

### 使用

```js
const path = require("@jayfate/path");
const os = require("os")

// win32
console.log(os.platform())

// D:/Documents/code/jayfate/test
console.log(path.resolve(__dirname, "test"));

// /
console.log(path.sep)
```

[反馈问题](https://github.com/JayFate/path/issues)
