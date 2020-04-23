import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only'
// import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

// TODO: 在webpack里使用该build的文件，查看bundle analyzer感觉包体积有点大啊，需要后面分析研究下 

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
          'ForwardRef',
          'Memo'
        ],
        'node_modules/prop-types/index.js': [
          'elementType'
        ]
      }
    }),
    css()
  ]
};
