---
layout: posts
title: I Discovered Clean Architecture by Robert C. Martin
date:
comments: true
categories:
  - development
---

Recently, I've been working on a personal web development project using Angular and .NET Core. The architecture of the .NET Core portion was fairly simple, with controllers calling the Entity Framework context to do CRUD operations on the database. When it came time to add authentication to the application things started to get messy; I like being clean. I wanted to find a way to add Identity Framework to the project so that it was possible to change in the future, that's when my search led me to the Clean Architecture Pattern by 'Uncle Bob' (He's everyone's uncle?).&nbsp;
{: .present-before-paste}

Out of all the concepts, patterns and principles in the book I want to implement these into my application.
{: .present-before-paste}

* Project should scream 'Time Sheet Application'
* Core domain should be decoupled from the&nbsp;**user interface**
* Core domain should be decoupled from any **frameworks**
* Core domain should be decoupled from any&nbsp;**data persistence**

&nbsp;
{: .present-before-paste}