---
path: /blog/reduce-stress-in-the-workplace-with-max-line-lengths
layout: posts
title: Reduce stress in the workplace with max line lengths
date: 2019-12-03
comments: true
categories:
  - development
---

Black Friday just passed and I'm sure there have been plenty of large TV and computer monitor purchases. I'll be holding off for the ultra wide screen monitors to come down in price a little more before I get one for myself.&nbsp;

With our monitors getting wider and wider, do we still need maximum line lengths in our code?&nbsp;

## My answer is yes.

I don't just mean there needs to be maximum line lengths in our code, but I'm crazy enough to suggest this should be implemented in all areas of a modern workplace.&nbsp;

* Emails
* Wiki pages
* Word documents

## Why?

Let me answer that with a question. What's easier to read?

~~~
Dear Sir or Madam,

I am writing to you today in regards to a very noisy dog. Your very noisy dog to be precise. Please keep your dog inside the house at night after 9:00 PM so that it does not wake us up from our slumber.

Kindest regards,

Your neighbour
~~~

Or the email broken up…

~~~
I am writing to you today in regards to a very noisy dog.
Your very noisy dog to be precise.
Please keep your dog inside the house at night after 9:00 PM
so that it does not wake us up from our slumber.
~~~

Long if statements like this?

~~~
if (userName != null && password != null && email != String.Empty && dateTime.IsValid || overrideValidation)
{
  RegisterUser(userName, password, email);
}
~~~

Or with maximum line lengths?

~~~
if (userName != null
    && password != null
    && email != String.Empty
    && dateTime.IsValid
    || overrideValidation)
{
  RegisterUser(userName, password, email);
}
~~~

I believe that if we can reduce the line lengths of our documents, we can make our lives a little easier at work. Who knows, maybe your colleagues might notice the extra effort you put into your emails.