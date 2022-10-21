import path from "../src/index"

// [
//   'resolve',    'normalize',
//   'isAbsolute', 'join',
//   'relative',   'toNamespacedPath',
//   'dirname',    'basename',
//   'extname',    'format',
//   'parse',      'sep',
//   'delimiter',  'win32',
//   'posix',      '_makeLong'
// ]

// process.chdir(`/Users/11104760/Documents/study/webpack`)

const macBase = `/Users/jayfate/Downloads/path`
const winBase = `D:\\jayfate\\toolkit1`
const sep = `~`.repeat(30)
const str1 = 'a/b/c'
const str2 = 'a\\b\\c'
const node_modules = path.resolve(__dirname, "../node_modules")
const thisFile = path.resolve(__dirname, 'index.ts')

describe('compiler: element transform', () => {
  test('import + resolve component', () => {
    const arr = [
      0 + sep,
      path.resolve(macBase),
      // path.resolve(winBase) 的结果与 working dir 有关
      path.resolve(winBase),
      path.resolve(macBase, "build"),
      path.resolve(winBase, "build"),
      // on linux/macos
      // path.win32 = {} 
      // path.win32.resolve(macBase),
      path.posix.resolve(macBase),
      // path.win32.resolve(macBase, "build"),
      path.posix.resolve(macBase, "build"),
      // path.posix 并不能正确的处理 windows 的路径
      path.posix.resolve(winBase),
      path.posix.resolve(winBase, "build"),
      1 + sep,
      path.normalize('/foo/bar//baz/asdf/quux/..'),
      path.normalize('C:\\temp\\\\foo\\bar\\..\\'),
      // path.win32.normalize('/foo/bar//baz/asdf/quux/..'),
      // path.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'),
      path.posix.normalize('/foo/bar//baz/asdf/quux/..'),
      path.posix.normalize('C:\\temp\\\\foo\\bar\\..\\'),
      2 + sep,
      path.isAbsolute(macBase),
      path.isAbsolute(winBase),
      // path.win32.isAbsolute(macBase),
      path.posix.isAbsolute(winBase),
      path.isAbsolute(str1),
      path.isAbsolute(str2),
      3 + sep,
      path.join(macBase),
      path.join(winBase),
      path.join(macBase, "build"),
      path.join(winBase, "build"),
      // path.win32.join(macBase),
      path.posix.join(winBase),
      // path.win32.join(macBase, "build"),
      path.posix.join(winBase, "build"),
      4 + sep,
      path.relative(__dirname, node_modules),
      // path.win32.relative(__dirname, node_modules),
      path.posix.relative(__dirname, node_modules),
      5 + sep,
      path.toNamespacedPath(macBase),
      path.toNamespacedPath(winBase),
      6 + sep,
      path.dirname(thisFile),
      path.dirname(thisFile),
      7 + sep,
      path.basename(thisFile),
      path.basename(thisFile),
      8 + sep,
      path.extname(thisFile),
      path.extname(thisFile),
      9 + sep,
      path.format({
        root: '/ignored',
        dir: '/home/user/dir',
        base: 'file.txt'
      }),
      path.format({
        root: '/',
        base: 'file.txt',
        ext: 'ignored'
      }),
      path.format({
        root: '/',
        name: 'file',
        ext: '.txt'
      }),
      path.format({
        root: '/',
        name: 'file',
        ext: 'txt'
      }),
      path.format({
        dir: 'C:\\path\\dir',
        base: 'file.txt'
      }),
      10 + sep,
      path.parse('/home/user/dir/file.txt'),
      path.parse('C:\\path\\dir\\file.txt'),
      11 + sep,
      `path.sep: ` + path.sep,
      `path.delimiter: ` + path.delimiter,
      12 + sep,
      `path.win32: ` + Object.keys(path.win32).join(', '),
      `path.posix: ` + Object.keys(path.posix).join(', '),
      // path._makeLong
    ]
    expect(arr).toMatchSnapshot()
  })

})
