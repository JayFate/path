/// <reference types="node" />
import path from "path";
export declare const resolve: typeof path.resolve;
export declare const normalize: typeof path.normalize;
export declare const isAbsolute: typeof path.isAbsolute;
export declare const join: typeof path.resolve;
export declare const relative: typeof path.relative;
export declare const dirname: typeof path.dirname;
export declare const basename: typeof path.basename;
export declare const extname: typeof path.extname;
export declare const format: typeof path.format;
export declare const parse: typeof path.parse;
export declare const sep = "/";
export declare const delimiter: typeof path.delimiter;
declare const path2: {
    resolve: (...paths: string[]) => string;
    normalize: (path: string) => string;
    isAbsolute: (path: string) => boolean;
    join: (...paths: string[]) => string;
    relative: (from: string, to: string) => string;
    dirname: (path: string) => string;
    basename: (path: string, ext?: string | undefined) => string;
    extname: (path: string) => string;
    format: (pathObject: path.FormatInputPathObject) => string;
    parse: (path: string) => path.ParsedPath;
    sep: string;
    delimiter: ";" | ":";
};
export default path2;
