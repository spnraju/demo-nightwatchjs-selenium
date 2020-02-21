module.exports = {
  tags: ['google'],
  'Demo test Google': function (client) {
    client
      .url('http://google.co.in')
      .pause(1000);

    client.expect.element('body').to.be.present;

    client.expect.element('body').to.have.attribute('class').which.contains('vasq');
    client.expect.element('body').to.have.attribute('class').which.matches(/vasq$/);
    client.expect.element('body').to.have.attribute('class').before(1000);

    client.end();
  },

  'Search bar displayed on Google Home Page': (driver) => {

    driver
      .url('http://www.google.com')
      .assert.urlContains('google')
      .assert.title('Google')
      .waitForElementPresent('input[title="Search"]')
      .pause(5000)
      .keys('input[title="Search"]', 'test123')
      .end()
  },
};