---
title: Search
summary: Looking for something special ?
permalink: /search/index.html
hidden: true
layout: "article.njk"
---

<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search", showSubResults: true });
    });
</script>
