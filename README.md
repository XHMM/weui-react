# weui v2 for react 

This is not a serious project, not use only weui styles, and I you'd better not use it and it's still in development.

## usage
1. `npm i @xhmm/weui-react`
2. import needed css file in your `App.ts/js` file:
    ```js
    import "@xhmm/weui-react/build/index.css"
    ```
3. then you should manually import weui css/less file, this library not handle it for you because theming is not an easy thing to support:
    ```js
    import './weui.css';
    ``` 

## development
- `npm run dev` to start watch source code change
- `npm run example` to debug components
- `npm run build` to bundle
