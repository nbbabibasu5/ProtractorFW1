let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

  it('addition test', function(){

    homepage.get('http://juliemr.github.io/protractor-demo/');

    homepage.enterFirstNumber('3');
    homepage.enterSecondNumber('5');

    homepage.clickCalculateButton();

    homepage.verifyResult('8');

    browser.sleep(3000)

  });
    
});