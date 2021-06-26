# Haunted Heroicons

Install `haunted-heroicons` from npm:

```sh
npm install haunted-heroicons
```

Now each icon can be imported individually as a Haunted WebComponent:

```js
import { html, component } from 'haunted'
import 'haunted-heroicons/solid/BeakerIcon.js'

function MyComponent() {
  return html `
    <style>
      beaker-icon {
        --icon-height: 20px;
        --icon-width: 20px;
        --icon-color: blue; 
      }
    </style>
    <div>
      <beaker-icon></beaker-icon>
      <p>...</p>
    </div>
  `
}

customElements.define('my-component', component(MyComponent));
```

The 24x24 outline icons can be imported from `haunted-heroicons/outline`, and the 20x20 solid icons can be imported from `haunted-heroicons/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/haunted-heroicons/outline/)
