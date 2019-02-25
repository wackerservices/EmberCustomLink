ember-custom-link
==============================================================================

`ember-custom-link` is an Ember addon which allows you to pass the following attributes as data:

- `hasTarget` -> Should be `true` unless using `"mailto"` where there is no desire to open a linked document.
- `href` -> To be included if your link is external and is a String representing the `href` attribute you want in your template. 
- `linkTo` -> To be included if your link is internal and is a String representing the `link-to` route you want in your template.
- `isFollowedBy` -> Should be `false` unless you want a character such as `,` or `.` to immediately follow your custom link.
- `text` -> A String representing the actual hypertext you want to appear on the page.

## A few data examples:

#### Internal link using the `{{#link-to}}` component with the hypertext followed by whitespace

```js
{
    "custom-link": {
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


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


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

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
