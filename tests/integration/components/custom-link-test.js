import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

function raw(str) { // Converts tagged string template literal into an htmlSafe (non-html-escaped string) for use in handlebars
  return { "string-template-converter": htmlSafe(str[0]) };
}

module('Integration | Component | custom-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    let expectedText = `
    `;

    this.set('data', {
      articles: {
        articleHeader: `My article header`,
        copyPreview: [
          [
            {
              "custom-link": {
                hasTarget: true,
                href: "https://www.theCompany.com",
                isFollowedBy: ",",
                text: "My Company Name"
              }
            },
            raw`an emerging technology holding company, today announced the creation of a new division.`
          ]
        ],
        copyRemainder: [
          [
            raw`Some more information for the first paragraph.`
          ],
          [
            raw`For more information on the new, wholly-owned company, please visit`,
            {
              "custom-link": {
                hasTarget: true,
                linkTo: "index",
                isFollowedBy: ".",
                text: "MySite.com"
              }
            },
            raw`Additionally, subscribe for updates and more information.`
          ],
          [
            {
              "custom-link": {
                hasTarget: false,
                href: "mailto:investor@myCompany.com",
                isFollowedBy: false,
                text: "investor@myCompany.com"
              }
            }
          ]
        ],
        date: `Feb 13th, 2019`
      },
    });

    await render(hbs`{{custom-link}}`);

    assert.equal(find('*').textContent.replace(/\s/g, ''), expectedText.replace(/\s/g, ''));

    // Template block usage:
    await render(hbs`
      {{#custom-link}}
        template block text
      {{/custom-link}}
    `);

    assert.equal(find('*').textContent.replace(/\s/g, ''), expectedText.replace(/\s/g, ''));
  });
});
