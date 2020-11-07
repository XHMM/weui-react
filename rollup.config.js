import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import clear from 'rollup-plugin-clear'
import pkg from './package.json'

export default {
  // input: 'src/**/index.ts',
  input: 'src/index.ts',
  output: [{
    format: 'es',
    file: pkg.module
  }, {
    format: 'cjs',
    file: pkg.main
  }],
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: [
        '.js', '.jsx', '.ts', '.tsx',
      ]
    }),
    postcss({
      autoModules: true,
      extract: 'index.css'
    }),
    babel({
      extensions: [
        '.js', '.jsx', '.ts', '.tsx',
      ],
      exclude: 'node_modules/**',
      presets: [
        ["@babel/env", {
          "modules": false
        }],
        "@babel/typescript",
        "@babel/react"
      ],
      plugins: [
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
        "transform-class-properties",
        [
          "babel-plugin-import",
          {
            "libraryName": "@material-ui/core",
            "libraryDirectory": "esm",
            "camel2DashComponentName": false
          },
          "core"
        ],
        [
          "babel-plugin-import",
          {
            "libraryName": "@material-ui/icons",
            "libraryDirectory": "esm",
            "camel2DashComponentName": false
          },
          "icons"
        ]
      ]
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    clear({
      targets: ['build'],
      
    })
  ]
};
