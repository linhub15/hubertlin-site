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

When the bootstrap toggler is clicked it calls the .collapse() from the ul.nav-list, adds .collapsing before the animation starts, adds .show and finally removes the .collapsing class.&nbsp;

## .show

Try removing .show from the open navbar. Notice how it disappears without the animation? If you just want to hide the nav and don't want animations, this works fine.

So in the end here's my little directive.

```
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCloseNav]'
})
export class CloseNavDirective {

  constructor() { }

  @HostListener('click')
  onClick() {
    if (document.documentElement.clientWidth > 768) { return }
    const links = document.getElementById('navbarLinks');
    const navToggler = document.getElementById('navbarToggler');
    if (links.classList.contains('show')) { navToggler.click(); }
  }
}

```

&nbsp;

&nbsp;