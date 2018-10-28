# Async-React-Redux

The following codebase is a demo of [React 16.6.0's](https://reactjs.org/blog/2018/10/23/react-v-16-6.html) latest features, `<Suspense />` and `React.lazy` along with `Webpack` and `Redux` to demonstrate asynchronous loading / chunking of Components and Redux elements.

## Background
The new `React.lazy()` and `<Suspense/>` features of React are really cool and help make web-apps even faster! It gives us a standardized way (along with Webpack) to load and bundle javascript code to be loaded when we actually need it! (No more 34MB homepages of huge single page applications!!) 
What I thought seemed missing in the woodwork was a solution to asynchronously load Redux components as well.

## Installation 
To try out this code, all you require is `npm` and `node` installed.

Just type the following:

```
npm i
npm start:dev 
```

Then navigate to [http://localhost:8100]() to try it out!


## Feedback and Contribution
I would love feedback on this! Please let me know in a Github issue or a PR!

### Side note
The file structure is a little non-standard for react, but I like to organize code based on function vs type. (woo hoo for [hooks](https://reactjs.org/docs/hooks-intro.html)!)

## License 
Copyright (c) 2018 Shubham Naik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

