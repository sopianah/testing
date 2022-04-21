const assert = require('assert');

Feature('Liking Resto');

Before(({I}) => {
    I.amOnPage('/#/like');
  });
  
  Scenario('showing empty liked resto', ({I}) => {
    I.dontSeeElement('#restaurants .restaurant-item');
  });
  
  Scenario('liking one resto', async ({I}) => {
  
    I.amOnPage('/');
  
    I.seeElement('.restaurant-item__content a');
    const firstResto = locate('.restaurant-item__content a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');
    const likedRestoName = await I.grabTextFrom('.restaurant-item__content a');

    assert.strictEqual(firstRestoName, likedRestoName);
  });
