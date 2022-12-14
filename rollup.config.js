import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'rollup'

const publicConfig = {
    format: 'umd',
    name: 'uodule'
}

const config = defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'build/index.js',
                ...publicConfig
            },
            {
                file: 'build/index.min.js',
                ...publicConfig,
                plugins: [
                    terser()
                ]
            }
        ],
        plugins: [
            typescript({
                declaration: false,
                target: "ES5"
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'build/index.mjs',
            format: 'esm'
        },
        plugins: [
            typescript({
                declaration: true
            })
        ]
    },
    // 归并 .d.ts 文件
    // {
    //     input: 'types/index.d.ts',
    //     output: {
    //         file: 'build/index.d.ts',
    //         format: 'es'
    //     },
    //     plugins: [
    //         dts(),
    //         del({
    //             targets: 'types',
    //             hook: 'buildEnd'
    //         })
    //     ]
    // }
])

export default config