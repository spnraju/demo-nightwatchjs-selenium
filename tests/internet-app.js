module.exports = {
  tags: ['internet'],
  'Internet App': function (browser) {
    browser
      .url('http://the-internet.herokuapp.com/')
      .maximizeWindow()
      .waitForElementVisible('body', 3000)
      .assert.title('The Internet')
      .pause(5000)
      .end();
  },
};
