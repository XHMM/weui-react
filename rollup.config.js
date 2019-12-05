import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss'
// import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
// import multiEntry from "rollup-plugin-multi-entry";

export default {
  // input: 'src/**/index.ts',
  input: 'src/index.ts',
  output: [{
    format: 'es',
    file: pkg.module
  }],
  external: ['react', 'react-dom'],
  plugins: [

    resolve({
      extensions: [
        '.js', '.jsx', '.ts', '.tsx',
      ]
    }),
    babel({
      extensions: [
        '.js', '.jsx', '.ts', '.tsx',
      ],
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'PropTypes',
          'createElement',
          'Fragment',
          'cloneElement',
          'StrictMode',
          'createFactory',
          'createRef',
          'createContext',
          'isValidElement',
          'isValidElementType',
        ],
        'node_modules/react-dom/index.js': [
          'render',
          'hydrate',
        ],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    }),

    scss(),
    // multiEntry()
  ]
};
