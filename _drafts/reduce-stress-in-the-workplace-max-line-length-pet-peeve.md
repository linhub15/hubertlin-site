---
layout: posts
title: Reduce stress in the workplace max line length pet peeve
date: 2019-12-03 00:00:00
comments: true
categories:
  - development
---

Black Friday just passed and I'm sure there have been plenty of large TV and computer monitor purchases. I'll be holding off for the ultra wide screen monitors to come down in price a little more before get one for myself.&nbsp;

With our monitors getting wider and wider, do we still need maximum line lengths in our code?&nbsp;

## My answer is yes.

I don't just mean there needs to be maximum line lengths in our code, but I'm crazy enough to suggest this should be implemented in all areas of a modern workplace.&nbsp;

* Emails
* Wiki pages
* Word documents

## Why?

Let me answer that with a question to you. What's easier to read?

<pre style="width:1000px;">
Dear Sir or Madam,

I am writing to you today in regards to a very noisy dog. Your very noisy dog to be precise. Please keep your dog inside the house at night after 9:00 PM so that it does not wake us up from our slumber.

Kindest regards, 

Your neighbour
</pre>

Or the email broken up...
<pre>
I am writing to you today in regards to a very noisy dog.
Your very noisy dog to be precise.
Please keep your dog inside the house at night after 9:00 PM
so that it does not wake us up from our slumber.
</pre>

Long if statements like this?
<pre>
if (userName != null && password != null && email != String.Empty && dateTime.IsValid || overrideValidation)
{
  RegisterUser(userName, password, email);
}
</pre>

Or with maximum line lengths?
<pre>
if (userName != null
    && password != null
    && email != String.Empty
    && dateTime.IsValid
    || overrideValidation)
{
  RegisterUser(userName, password, email);
}
</pre>

I believe that if we can reduce the line lengths of our documents, we can make our lives a little easier at work. Who knows, maybe your boss might notice something special about your email presentation.