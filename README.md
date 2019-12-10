# weui v2 for react 

This is not a serious project, not use only weui styles, and I you'd better not use it and it's still in development.

## usage
1. first you should install peer deps: `npm i react react-dom @material-ui/core @material-ui/icons`
1. then run `npm i @xhmm/weui-react`
1. import needed css file in your `App.ts/js` file:
    ```js
    import "@xhmm/weui-react/build/index.css"
    ```
1. then you should manually import weui css/less file, this library not handle it for you because theming is not an easy thing to handle:
    ```js
    import './path/to/weui.css';
    ``` 

warning: this project use `@material-ui`, so you need to configure tree-shaking to reduce bundle size. 

## development
- `npm run watch` to start watch source code change
- `npm run example` to debug components
- `npm run build` to bundle
