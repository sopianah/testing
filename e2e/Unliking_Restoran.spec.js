Feature('Unlike Restaurant');

Scenario('Unlike a restaurant', ({ I }) => {
  I.amOnPage('#/');

  I.seeElement('a.card-title');
  I.waitForElement('a.card-title');
  I.click(locate('a.card-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.wait(5);

  I.seeElement('a.card-title');
  I.click(locate('a.card-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
});
