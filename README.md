# LegOrange

Draw someting in real time with legorange.

Implemented with :
- ES6 with [Babel](https://babeljs.io/)
- Packaging with [Webpack](http://webpack.github.io/)

Signalisation is stored on a namespace named *legorange*. It can be changed.

## Getting started

Ensure you have [node][node-link] greater than version 4 (Code contains es6 syntax)

### Installation

1. Get repo with `git clone https://github.com/paulmusso/webpack-boilerplate.git`

2. Delete the existing git repository by running `rm -rf .git`

3. Run `npm install` to install the dependencies


## Help on tasks

```bash
npm run
```

## Build

To only build legorange app in ./dist folder

*legorange* is on https://webcom.orange.com

```bash
npm run build
```

Optional env variables :
- NAMESPACE : namespace for signalisation. Default is *legorange*
- WS_SERVER : webcom server url. Default is *https://webcom.orange.com*
- PUBLIC_PATH : relative path of application. Default is /
	
## Build and watch out legorange

To build and launch a web server on port 8080

```bash
npm run serve
```

Optional env variables :
- NAMESPACE : namespace for signalisation. Default is *legorange*
- WS_SERVER : webcom server url. Default is *https://webcom.orange.com*
- PUBLIC_PATH : relative path of application. Default is /


## Dev server 

To build and launch a dev web server on port 8080

```bash
npm start
```

Optional env variables :
- NAMESPACE : namespace for signalisation. Default is *legorange*
- WS_SERVER : webcom server url. Default is *https://webcom.orange.com*
- PUBLIC_PATH : relative path of application. Default is /


## License

Code released under the [MIT license](https://github.com/webcom-components/visio-sample/blob/master/LICENSE).