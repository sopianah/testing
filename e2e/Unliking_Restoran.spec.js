const assert = require('assert');

Feature('Unliking Restoran');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
    I.dontSeeElement('#restaurants .restaurant-item');
});

Scenario('unliking one resto', async ({ I }) => {
 
  I.amOnPage('/');
  I.seeElement('.restaurant-item__content a');
  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const unlikedRestaurantName = await I.grabTextFrom('.restaurant-item__content a');

  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);
});