// export * from './padZero'
// export * from './isMobileByUa'

import path, { PlatformPath } from "path";
// const path = require("path")

const path2 = Object.create(path)

const replaceStr = (str: string) => str.replace(/\\/gm, '/')
const isFunction = (o: any) => typeof o === "function"
const isString = (o: any) => typeof o === "string"

// console.log(Object.keys(path))

for (const key in path) {
    // console.log(`key`, key, `typeof path[key]`, typeof path[key])
    // console.log(path[key])

    if (isFunction(path[key as keyof typeof path])) {
        path2[key] = function (...argus: any[]) {
            argus = argus.map(str => replaceStr(str))
            let res = (path[key as keyof typeof path] as Function)(...argus)
            res = replaceStr(res)
            return res
        }

    } else if (isString(path[key as keyof typeof path])) {
        path2[key] = replaceStr(path[key as keyof typeof path] as string)
    } else {
        path2[key] = path[key as keyof typeof path]
    }
}

module.exports = path2

export default path2
