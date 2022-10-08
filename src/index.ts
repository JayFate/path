// export * from './padZero'
// export * from './isMobileByUa'

import path, { PlatformPath } from "path";
// const path = require("path")

const replaceStr = (str: string): string => (str || "").replace(/\\/gm, '/')
const isFunction = (o: any) => typeof o === "function"
const isString = (o: any) => typeof o === "string"
const isObject = (o: any) => typeof o === "object"

/**
wrap 方法接收函数 fn，并返回一个包装后的函数 fn1，fn1 与 fn 的接口完全相同
 */

const wrap = (fn: any) => {
    return function (...argus: any[]) {
        argus = argus.map(str => replaceStr(str))
        let res = fn(...argus)
        if (isString(res)) {
            res = replaceStr(res)
        } else if (isObject(res)) {
            for (const key in res) {
                if (isString(res[key])) {
                    res[key] = replaceStr(res[key])
                }
            }
        }
        return res
    }
}
// export const _makeLong: typeof path._makeLong = wrap(path._makeLong)
export const resolve: typeof path.resolve = wrap(path.resolve)
export const normalize: typeof path.normalize = wrap(path.normalize)
export const isAbsolute: typeof path.isAbsolute = wrap(path.isAbsolute)
export const join: typeof path.resolve = wrap(path.join)
export const relative: typeof path.relative = wrap(path.relative)
// export const toNamespacedPath: typeof path.toNamespacedPath = wrap(path.toNamespacedPath)
export const dirname: typeof path.dirname = wrap(path.dirname)
export const basename: typeof path.basename = wrap(path.basename)
export const extname: typeof path.extname = wrap(path.extname)
export const format: typeof path.format = wrap(path.format)
export const parse: typeof path.parse = wrap(path.parse)
export const sep = "/"
export const delimiter: typeof path.delimiter = path.delimiter
// export const win32: typeof path.win32 = path.win32
// export const posix: typeof path.posix = path.posix


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

// for (const key in path) {
//     // console.log(`key`, key, `typeof path[key]`, typeof path[key])
//     // console.log(path[key])

//     if (isFunction(path[key as keyof typeof path])) {
//         path2[key] = function (...argus: any[]) {
//             argus = argus.map(str => replaceStr(str))
//             let res = (path[key as keyof typeof path] as Function)(...argus)
//             res = replaceStr(res)
//             return res
//         }

//     } else if (isString(path[key as keyof typeof path])) {
//         path2[key] = replaceStr(path[key as keyof typeof path] as string)
//     } else {
//         path2[key] = path[key as keyof typeof path]
//     }
// }

// module.exports = path2

export default path2
