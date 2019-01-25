---
layout: posts
title: Closing Bootstrap Nav in Angular
date:
comments: true
categories:
  - development
---

* Does your app use Bootstrap 4?
* Does your app use Angular 6+?
* Does navbar stay open even when navigating to different components? (Mobile)

I fixed the problem using Angular&nbsp;[attribute directive](https://angular.io/guide/attribute-directives){: target="_blank"}

### How the bootstrap toggler works

When the bootstrap toggler is clicked it calls the .collapse() from the ul.nav-list. It adds the collapsing class before the animation, and then adds .show.