import { Meteor } from 'meteor/meteor';
import { Stripe } from 'meteor/mrgalaxy:stripe';
import { Bert } from 'meteor/themeteorchef:bert';
import $ from 'jquery';
// import { BrowserPolicy } from 'meteor/browser-policy-common';
Meteor.startup(() => {
  // BrowserPolicy.content.allowOriginForAll('https://js.stripe.com/');
  // BrowserPolicy.content.allowOriginForAll('https://checkout.stripe.com/');
  const stripeKey = Meteor.settings.public.stripe.testPublishableKey;
  Stripe.setPublishableKey(stripeKey);

  const STRIPE = {
    getToken: (domElement, card, callback) => {
      Stripe.card.createToken(card, (status, response) => {
        if (response.error) {
          Bert.alert(response.error.message, 'danger');
        } else {
          STRIPE.setToken(response.id, domElement, callback);
        }
      });
    },
    setToken: (token, domElement, callback) => {
      $(domElement).append($("<input type='hidden' name='stripeToken' />").val(token));
      callback();
    },
  };
});
