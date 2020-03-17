---
title: Contact
summary: Maybe you have a question you think I might be abble to answer. Get in touch using the form below.
permalink: /contact/index.html
hidden: true
templateEngineOverride: md,njk
---

<form name="contact" method="POST" data-netlify="true" class="[ o-stack ] c-form" action="/contact/thanks.html">
  <p class="c-form__field">
    <label class="c-form__label" for="name">Your Name</label>
    <input class="c-form__input "id="name" type="text" name="name" autocomplete="name" required aria-required="true">
  </p>
  <p class="c-form__field">
    <label class="c-form__label" for="email">Your Email</label>
    <input class="c-form__input" type="email" name="email" autocomplete="email" required aria-required="true">
  </p>
  <p class="c-form__field">
    <label class="c-form__label" for="message">Message</label>
    <textarea class="c-form__input" id="message" name="message" row="10" cols="20" required aria-required="true"></textarea>
  </p>
  <button class="c-form__button" type="submit">Send</button>
</form>

