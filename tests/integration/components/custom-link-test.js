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
        articleHeader: `UAHC Subsidiary American Sustainable Rubber Company, LLC Appoints Indoor Agricultural
          Industry Veteran Timothy Madden as President`,
        copyPreview: [
          [
            {
              "custom-link": {
                hasTarget: true,
                href: "https://www.uahc.com",
                isFollowedBy: false,
                text: "United American Healthcare Corporation"
              }
            },
            raw`(OTC: UAHC), an emerging technology holding company, today announced the appointment of Timothy
            Madden as President of its wholly-owned subsidiary`,
            {
              "custom-link": {
                hasTarget: true,
                linkTo: "index",
                isFollowedBy: false,
                text: "American Sustainable Rubber Company, LLC"
              }
            },
            raw`("ASR"), an indoor agriculture technology company focused on creating a domestic solution to natural
            rubber production.`
          ]
        ],
        copyRemainder: [
          [
            raw`Madden is a serial entrepreneur, inventor, and corporate executive, who has experience in positioning
            his companies as leaders in the U.S. indoor agriculture industry. His extensive knowledge of plant
            science, greenhouse construction, and fully automated controlled environment agriculture (CEA) vertical
            farming technology, provides ASR with a significant competitive advantage in the market.`
          ],
          [
            raw`"We are very excited to appoint Timothy Madden as President of American Sustainable Rubber," said
            John Fife, CEO of United American Healthcare Corporation, parent company of ASR. "We believe that his
            background in the indoor agriculture industry along with his previously held leadership roles will
            position Tim for success and help to further ASR's vision of bringing a natural rubber supply to the
            United States."`
          ],
          [
            raw`In addition to the market opportunity for the U.S. economy, American Sustainable Rubber was created
            to bring new jobs to the United States and decrease the country's reliance on foreign imports. The
            company will use a proprietary approach to produce a natural rubber source that can be grown and
            harvested at a commercial scale. American Sustainable Rubber will also focus on developing and
            maintaining sustainable indoor growing conditions that protect from negative environmental factors and
            provide safe and fair working environments in the U.S. The company anticipates that their sustainable
            commercial scale operations will be powered by renewable energy with the goal of net zero carbon
            emissions, which have a positive impact on Earth's atmosphere as well.`
          ],
          [
            raw`"I am honored to be appointed President of such an innovative company and look forward to working
            with ASR on commercializing this viable natural rubber production solution for the United States market,"
            said Madden. "I have been following this research for years and am very excited to be working with such a
            talented team that is so dedicated to the vision of creating a sustainable domestic source of natural
            rubber by utilizing the most advanced indoor agriculture technology."`
          ],
          [
            raw`Madden's education and experience include a degree in computer electronics, ten years as founder and
            President of Biodynamics LLC, and two years as founder and CEO of Organic Genomics, Inc. In addition to
            serving as the President of ASR, Madden is a member of Cornell University's Controlled Environment
            Agriculture Board of Advisors and is a City of Akron "30 for the Future" Awardee.`
          ],
          [
            raw`For more information on the new, wholly-owned subsidiary, please visit`,
            {
              "custom-link": {
                hasTarget: true,
                linkTo: "index",
                isFollowedBy: ".",
                text: "AmericanRubber.com"
              }
            },
            raw`Additionally, interested parties can subscribe for updates and more information.`
          ],
          [
            raw`<h4>About American Sustainable Rubber Company, LLC</h4>`
          ],
          [
            raw`American Sustainable Rubber Company, LLC is an indoor agriculture firm pursuing proprietary
            technology to produce natural rubber in the United States at a commercial and sustainable level through
            a genetically modified rubber source.`
          ],
          [
            raw`<h4>About United American Healthcare Corporation</h4>`
          ],
          [
            raw`United American Healthcare Corporation ("UAHC"), through its subsidiary UAHC Ventures, LLC,
            pursues strategic investment opportunities in various emerging growth industries. UAHC subsidiary Pulse
            Systems, LLC, is a contract manufacturing company that provides services to the medical device industry
            and American Sustainable Rubber ("ASR") is a genetic plant technology company focused on creating a
            domestic solution to natural rubber production.`
          ],
          [
            raw`<h5>Public Relations Contact:</h5>`
          ],
          [
            raw`Kathleen Gonzales`
          ],
          [
            raw`CMW Media`
          ],
          [
            raw`(619) 368-2701`
          ],
          [
            raw`<h5>Investor Relations Contact:</h5>`
          ],
          [
            {
              "custom-link": {
                hasTarget: false,
                href: "mailto:investors@uahc.com",
                isFollowedBy: false,
                text: "investors@uahc.com"
              }
            }
          ],
          [
            raw`+1 844 877 7700`
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
