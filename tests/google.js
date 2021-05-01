module.exports = {
  tags: ['google'],
  'Demo test Google': function (client) {
    client
      .url('http://google.com')
      .pause(1000);

    client.expect.element('body').to.be.present;
    // client.expect.element('body').to.have.attribute('class').which.contains('EM1Mrb');
    // client.expect.element('body').to.have.attribute('class').which.matches(/EM1Mrb$/);
    client.expect.element('body').to.have.attribute('class').before(1000);

    client.end();
  }
};