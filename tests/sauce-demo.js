module.exports = {
  tags: ['sauce-demo'],
  'Demo test Sauce demo': function (client) {
    client
      .url('https://www.saucedemo.com/')
      .waitForElementVisible('body', 1000)
      .getTitle(function (result) {
        client.assert.equal(
          result.indexOf('Swag Labs'),
          0,
          'Page title starts with nightwatch'
        );
      });
  },

  after: function (client) {
    client.end();
  },
};
