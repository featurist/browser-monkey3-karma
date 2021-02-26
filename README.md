# Test an app using Browser Monkey and karma

For this example we will create a small react application.

```bash
yarn add karma karma-mocha karma-chrome-launcher karma-mocha mocha karma-webpack webpack --dev
yarn add react react-dom
```

Now create a test file: `test/appSpec.js`
For simplicity we will create our react application in the test file.

```js
const {Query} = require('browser-monkey')
const ReactMount = require('browser-monkey/ReactMount')
const React = require('react')

class App extends React.Component {
  render () {
    return React.createElement('div', {className: 'greeting'}, 'Hello World')
  }
}

describe('greeting', () => {
  it('renders a greeting', async () => {
    const mount = new ReactMount(React.createElement(App, {}, null))
    const page = new Query().mount(mount)

    await page.find('.greeting').containing('Hello World').shouldExist()
  })
})
```

Create a karma config file `karma.conf.js`

```js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'test/**/*Spec.js',
    ],
    preprocessors: {
      'test/**/*Spec.js': ['webpack']
    },
    webpack: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    browsers: ['Chrome']
  })
}
```

Now you can run the test using `yarn karma start`.
