---
date: 2022-07-30T20:58:20.714+01:00
title: How to present book dialogues in an accessible way ?
tags:
    - html
    - accessibility
category:
    - html
    - accessibility
mp-syndicate-to:
    - https://mastodon.alienlebarge.ch/@alienlebarge
    - https://twitter.com/alienlebarge
---

Currently, I am building a web version of a book. I'm wondering about the best way to make the dialogs accessible using the appropriate HTML code.

Usually, dialogs are represented by dashes in books. But here's how it's rendered if we use this convention as it is:

-   Hello !
-   Hey, hello! How are you?

In HTML, this is replaced by lists of elements (<code>ul</code>). Which, in my opinion, is not right.

Using block or inline quotations are the two possibilities I see.
What would you recommend using?

## `<blockquote>`: The Block Quotation element

### HTML code

The following code needs some CSS to visually looks like a dialog in a book by using dashes.

```html
<figure class="dialog">
    <blockquote>
        <p>Hello!</p>
    </blockquote>
    <figcaption>—Character one</figcaption>
</figure>

<figure>
    <blockquote>
        <p>Ho hey, hello! How are you?</p>
    </blockquote>
    <figcaption>—Character two</figcaption>
</figure>
```

### Result

<figure>
    <blockquote>
        <p>Hello!</p>
    </blockquote>
    <figcaption>—Character one</figcaption>
</figure>

<figure>
    <blockquote>
        <p>Ho hey, hello! How are you?</p>
    </blockquote>
    <figcaption>—Character two</figcaption>
</figure>

## `<q>`: The Inline Quotation element

As the previous example, the following code needs some more CSS to visually looks like a dialog in a book by using dashes.

### HTML code

```
<style>
    div.c-dialog > p {
        display: "list-item";
    }
</style>

<div class="c-dialog">
     <p><q>Hello!</q></p>
     <p><q>Ho hey, hello! How are you?</q></p>
</div>
```

### Result

<style>
    div.c-dialog > p {
        display: list-item;
    }
</style>

<div class="c-dialog">
    <p><q>Hello!</q></p>
    <p><q>Ho hey, hello! How are you?</q></p>
</div>
