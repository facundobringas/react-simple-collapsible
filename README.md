# react-simple-collapsible

[![npm](https://img.shields.io/badge/npm-v1.0.22-green.svg)](https://www.npmjs.com/package/react-simple-collapsible)

A very simple , customizable and animated collapsible component for React.

## Features
- Fully customizable
- Easy to use
- Animated!

![demonstration](https://github.com/facundobringas/react-simple-collapsible/raw/master/assets/collapsible-sample.gif)

## Installation

#### npm
```bash
npm install --save react-simple-collapsible
```

#### yarn
```bash
yarn add react-simple-collasible
```

## Usage

Add the Collapsible component to your root component

```js
import React, { Component } from 'react';
import { Collapsible } from 'react-simple-collapsible';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Collapsible headerTitle="Very Simple Title">
            <h4>Very Simple Content</h4>
            <p>Insert any html you want in here...</p>
        </Collapsible>
      </div>
    );
  }
}

export default App;
```

## API

#### Props

|   |type|required|default value|description|
|---|--- |---     |---          |---        |
|**headerTitle**|PropTypes.string|NO| |Header title (always visible)|
|**collapsed**|PropTypes.bool|NO|true|Collapse the component|

#### Styles

To change the styles simply override the CSS classes wrapping them within the containers and add your own style to them!
For expample:

```css
.collapsible-header{
	background-color: yellow;
}

.collapsible-content{
	font-style: italic;
}
```

That way, you can leave the JS clean and keep the styles within the CSS.

## About

This project was written and is maintained by [Facundo Larrosa Bringas](https://github.com/facundobringas).

## License

MIT
