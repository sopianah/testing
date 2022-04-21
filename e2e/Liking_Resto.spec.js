Feature('Liking Resto');

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('a.card-title');
  I.waitForElement('a.card-title');
  I.click(locate('a.card-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
});
