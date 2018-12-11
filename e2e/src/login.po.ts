import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'selectGroup' : 'mat-select[name="group"]',
    'form' : 'form'
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail() {
    element(by.css(this.selectors['email'])).sendKeys('admin');
  }

  setPassword() {
    element(by.css(this.selectors['password'])).sendKeys('admin');
    }

  selectGroupOptionByLastValue() {
      element(by.css(this.selectors['selectGroup'])).click()
      .then(() => element.all(by.css('mat-option')).last().click());
  }

  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }
  logIn() {
    return element(by.css(this.selectors['form'])).submit();
  }
}
