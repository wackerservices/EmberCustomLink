ember-custom-link
==============================================================================

Purpose
------------------------------------------------------------------------------

`ember-custom-link` is an Ember addon which allows you to pass attributes to the `ember-custom-link` component that 
determine whether the component is an internal link, using `{{#link-to}}`, or an external link using `href`.

Usage

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

It may be combined with a custom Ember helper that you would make such as this:

`app\helpers\is-hyperlink-component.js`

```js
import { helper } from '@ember/component/helper';

export function isHyperlinkComponent([key]) {
  if (key === "custom-link") return "ember-custom-link";
}

export default helper(isHyperlinkComponent);

```

Which is then combined with the helper in a parent component such as this:

`app\templates\components\open-pr-body.hbs`

```hbs
  {{#each data.copyPreview as |paragraph|}}
    <p>
      {{#each paragraph as |paragraph|}}
        {{#each-in paragraph as |key value|}}
          {{#if (is-hyperlink-component key value)}} {{!-- THE NEXT THREE LINES ARE THE SIGNIFICANT PORTION --}}
            {{component key data=value}}
          {{/if}}
        {{/each-in}}
      {{/each}}
    </p>
  {{/each}}
```

Or it can be used on it's own with its required attributes being passed as properties.

## Possible attributes

- `class` -> Is assumed to be `false` unless specifically assigned a CSS class or classes, such as: `class: "italicized-text"`.
- `hasTarget` -> Should be `true` unless there is no desire to open a linked document, such as `"mailto"`.
- `href` -> To be included if your link is external and is a String representing the `href` attribute you want in your template. 
- `linkTo` -> To be included if your link is internal and is a String representing the `link-to` route you want in your template.
- `isFollowedBy` -> Should be `false` unless you want a character such as `,` or `.` to immediately follow your custom link.
- `text` -> A String representing the actual hypertext you want to appear on the page.

## A few data examples

#### Internal link using the `{{#link-to}}` component with hypertext followed by whitespace and styled using a CSS class `"italicized-text"`

```js
{
    "custom-link": {
        class: "italicized-text",
        hasTarget: true,
        linkTo: "index",
        isFollowedBy: false,
        text: "THIS IS MY SITE NAME"
    }
}
```

#### External link followed by whitespace

```js
{
    "custom-link": {
        hasTarget: true,
        href: "https://www.<SITENAME>.com",
        isFollowedBy: false,
        text: "THIS IS MY SITE NAME"
    }
}
```

#### External link followed by a comman and then whitespace

```js
{
    "custom-link": {
        hasTarget: true,
        href: "https://www.<SITENAME>.com",
        isFollowedBy: ",",
        text: "THIS IS MY SITE NAME"
    }
}
```

#### Example of using `mailto:` requiring `hasTarget: false`

```js
{
    "custom-link": {
        hasTarget: false,
        href: "mailto:myName@mySite.com",
        isFollowedBy: false,
        text: "myName@mySite.com"
    }
}
```


Installation
------------------------------------------------------------------------------

```
ember install ember-custom-link
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-custom-link`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
