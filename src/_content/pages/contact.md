---
title: Contact
permalink: /contact/index.html
hidden: true
templateEngineOverride: md,njk
---

<form name="contact" method="POST" data-netlify="true" class="[ o-stack ]">
  <p class="[ o-stack o-stack--s-1 ]">
    <label for="name">Your Name</label>
    <input id="name" type="text" name="name" required aria-required="true">
  </p>
  <p>
    <label>Your Email</label>
    <input type="email" name="email" required aria-required="true">
  </p>
  <p>
    <label for="message">Message</label>
    <textarea id="message" name="message" required aria-required="true"></textarea>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

