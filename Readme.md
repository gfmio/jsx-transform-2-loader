jsx-transform-2-loader
======================

jsx-transform-2-loader is a Webpack loader that transforms JSX decoupled from React (or any specific framework) using v2 of the `jsx-transformer` package. It is based on `jsx-transform-loader` which however uses an old version of `jsx-transform`.

# Usage

Include the package as a loader in your Webpack config. You may specify all options that `jsx-transform` accepts. The most important option is the `factory` option (default: `h`), which determines the name of the factory function used to construct the Virtual DOM objects.

```js
...
  {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      options: {
        factory: 'h'
        // Other jsx-transform options may go here.
      },
      loader: 'jsx-transform-2-loader'
    }]
  }
...
```

# Example

Input:

```jsx
var h = require('virtual-dom/h');

var profile = <div>
  <img src="avatar.png" class="profile" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>;
```

Output (with default options):

```js
var h = require('virtual-dom/h');

var profile = h('div', null, [
  h('img', { src: "avatar.png", class: "profile" }),
  h('h3', null, [[user.firstName, user.lastName].join(' ')])
]);
```

# License: MIT
