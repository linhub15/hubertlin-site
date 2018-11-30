---
layout: posts
title: How I Decoupled Microsoft Identity Core from my App
date:
comments: true
categories: development
---

During my quest to make my architecture clean there was a huge dependency that needed to be inverted. Many web applications require authentication, so it seems natural to depend on an authentication framework. In order to follow the guidelines of clean architecture, it was important that my application's core did not depend on frameworks.
{: .present-before-paste}

The project layout follows this structure:
{: .present-before-paste}

1. Core - Core Business details, does not depend on anything but itself
2. Infrastructure - Implements and depends on core interfaces
3. API - UI layer that depends on Infrastructure and Core

## Steps to Decouple

#### 1. Define authentication methods

We need to ***register*** and ***sign in*** a user. I didn't include a ***sign out*** because I will be using JSON Web tokens and they will have a short expiry date. It's&nbsp;<u>not secure</u> so don't do this in a real application.
{: .present-before-paste}

![](/uploads/iauthenticator-1.jpg)
{: .present-before-paste}

#### 2. Define User Class
{: .present-before-paste}

Next, we'll need to define the&nbsp;**User&nbsp;**object that we're passing into Register. In my case I only have 3 fields. User name, email, and password.
{: .present-before-paste}

![](/uploads/user.jpg)
{: .present-before-paste}

That's it for the Core.
{: .present-before-paste}

#### 3. Implement IAuthenticator in Infrastructure
{: .present-before-paste}

In the infrastructure layer, we create an Authenticator to implement the IAuthenticator interface. This is where we include dependencies on Microsoft.AspNetCore.Identity as well as our DbContext that will hold our Identity tables.

&nbsp;

&nbsp;
{: .present-before-paste}