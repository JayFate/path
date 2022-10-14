import path from "path";
import os from "os"
// const path = require("path")

const replaceStr = (str: string): string => (str || "").replace(/\\/gm, '/')
const isFunction = (o: any) => typeof o === "function"
const isString = (o: any) => typeof o === "string"
const isObject = (o: any) => typeof o === "object"


const isWin32 = os.platform() == "win32"
type rec = {
    [index: string]: string
}

/** 
wrap 方法接收函数 fn，并返回一个包装后的函数 fn1，fn1 与 fn 的接口完全相同
 */

const handleArgu = (e: string | rec) => {
    if (isString(e)) {
        e = replaceStr(e as string)
    } else if (isObject(e)) {
        e = e as rec
        for (const key in e) {
            if (isString(e[key])) {
                e[key] = replaceStr(e[key])
            }
        }
    }
    return e
}

const wrap = (fn: any) => {
    return function (...argus: any[]) {
        argus = argus.map(e => handleArgu(e))
        let res = fn(...argus)
        res = handleArgu(res)
        return res
    }
}
/**
[
  'resolve',    'normalize',
  'isAbsolute', 'join',
  'relative',   'toNamespacedPath',
  'dirname',    'basename',
  'extname',    'format',
  'parse',      'sep',
  'delimiter',  'win32',
  'posix',      '_makeLong'
]
 */
// export const _makeLong: typeof path._makeLong = wrap(path._makeLong)
export const resolve: typeof path.resolve = wrap(path.resolve)
export const normalize: typeof path.normalize = wrap(path.normalize)
export const isAbsolute: typeof path.isAbsolute = wrap(path.isAbsolute)
export const join: typeof path.resolve = wrap(path.join)
export const relative: typeof path.relative = wrap(path.relative)
export const toNamespacedPath: typeof path.toNamespacedPath = wrap(path.toNamespacedPath)
export const dirname: typeof path.dirname = wrap(path.dirname)
export const basename: typeof path.basename = wrap(path.basename)
export const extname: typeof path.extname = wrap(path.extname)
export const format: typeof path.format = wrap(path.format)
export const parse: typeof path.parse = wrap(path.parse)
export const sep = "/"
export const delimiter: typeof path.delimiter = path.delimiter
export const win32: typeof path.win32 = (isWin32 ? handleArgu(path.win32 as any) : {}) as unknown as typeof path.win32
export const posix: typeof path.posix = (isWin32 ? handleArgu(path.posix as any) : {}) as unknown as typeof path.posix


// console.log(Object.keys(path))
const path2 = {
    resolve,
    normalize,
    isAbsolute,
    join,
    relative,
    // toNamespacedPath,
    dirname,
    basename,
    extname,
    format,
    parse,
    sep,
    delimiter,
    // win32,
    // posix,
}


export default path2
