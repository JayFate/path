# @jayfate/path

跨端的 `path` 模块，在 Windows/MacOS/Linux 均以 `/` 作为路径分隔符进行路径解析及返回解析后的路径。

### 对比 node 原生的 path 模块

```js
// D:\\vivo\\toolkit1\\index.js

const path = require("path")
const path2 = require("@jayfate/path")

// d:\\vivo\\toolkit1
console.log(path.resolve(__dirname))
// /vivo/toolkit1/d:\\vivo\\toolkit1
console.log(path.posix.resolve(__dirname))
// d:\\vivo\\toolkit1
console.log(path.win32.resolve(__dirname))
// d:/vivo/toolkit1
console.log(path2.resolve(__dirname))
```

### 安装

安装 `@jayfate/path`

```sh
npm install -S @jayfate/path
```

### 使用

cjs:

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

esm:

```js
import path, { resolve } from "@jayfate/path";

// /Users/jayfate/Documents/code/bbdl/bbdl/test
console.log(path.resolve("/Users/jayfate/Documents/code/bbdl/bbdl", "test"))
// /Users/jayfate/Documents/code/bbdl/bbdl/test
console.log(resolve("/Users/jayfate/Documents/code/bbdl/bbdl", "test"))
```

[反馈问题](https://github.com/JayFate/path/issues)
