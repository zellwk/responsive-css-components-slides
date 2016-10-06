Thanks Phil.

Hello everyone. I've been looking forward to coming to Amsterdam for a long time. It feels good to finally be here.

Today, we live in an age where responsive websites and webapps are the norm. The sites we create gets more complex as we speak. In this age, the ability to build components that are modular and scalable is crucial to us as developers.

The question isn't why. We all know that already. The question is how.

How do you build responsive components without making you code a bloody, hacky mess? What naming conventions should you use? How should you structure your markup? Your CSS? How do you deal with components that might be placed in wildly different areas?

Although many experts in our industry have talked about methods that point us in the right direction, like OOCSS, SMACSS and BEM, condensing these knowledge into actual, workable code isn't as simple as reading a few articles and books.

Which is why today, I want to share about I discovered about build modular and scalable components.

If you don't know me already, I'm Zell. I'm a freelance developer from Sunny Singapore. I love to dive deep into stuff when I learn about them. Then, I try to simplify the knowledge I've learned into usable, practical tools and techniques that help me and others build websites in a structured and simple manner.

To date, I have written two books. The first is Learning Susy, which is a grid engine that allows you to build your own grids.

The second is Automating Your Workflow with Gulp, which teaches how to quicken your development with the Gulp build tool.

I have also written a course on Responsive Typography (which is closed now). I've also given a workshop on Responsive Typography just two days ago.

So, that's me in a nutshell. With that, let's go into the main topic of today's talk. Responsive Components.

When we think about responsive components, two words come into mind immediately. Components must be modular. And, they must be scalable.

In order to build responsive components, we must first understand what these two words mean, and how they affect how we code.

(3 min)

## Modular

First, let's start with what Modular means.

Dictionary.com explains modularity components are standarized units for easy construction or flexible arrangement.

This means components are like Lego blocks.

What does this mean? Basically, what it's saying is that, on the web, when we build a component, like this one we see here, this component should fit into any parts of the design easily without much changes in the code. It work well if it goes into the three column grid, into the content, into the sidebar, or even the full width layout.

That's what we mean by modular. All we're concerned about is how the code is written. Of course, not every components needs to be super modular like this orange component here. Some components can only be used in one scenario, and that's fine as well.

Since Modularity is really about how the code is written, we need to pay attention to how the markup is structured and how the CSS selectors are written.

In other words, we're concerned about the naming conventions for this particular component such that it can be used anywhere with minimal changes.

What about Scalability?

## Scalability

Let's look at what the word "scale" means.

What this means is that we're concerned with increasing or decreasing the size of a component, and everything within it, according to its proportions.

Something like this. Let's call this proportional scaling.

But as you may imagine, it's not possible to scale everything proportionally like this simple example we have here. More often than not, you might change the layout, font-sizes and whitespace all at once.

Something like this.

This brings us to the second definition of scaling. When we scale a component, what we're looking for is to make sure it looks great at different parts of the UI.

For the lack of a better word, let's call this controlled scaling.

The question is, which method should you use?

Before we dive in there, let's sum up the difference between Modularity and Scalability. The difference is subtle. When we talk about modular, we're concerned about how the code is written so it can be reused with minimal changes. When we talk about scalable, we're concerned how the components looks at different sizes.

Alright, since there are two possible methods for scaling, let's talk about when to choose each scaling method, and how to implement them.

## Scaling Methods

As I mentioned earlier, there are two kinds of scaling methods. The proportional method and the controlled method.

Proportional scaling is great for content that needs, well, to be scaled proportionally. This usually means iconography and other images.

These are handled pretty easily, like for images, you can usually leave `max-width` to 100% and set the height to auto, and it'll take of itself.

For SVGs, you need to set the viewbox and either the width or height variable. Note: For IE11, you need to set the width variable.

You can also do it for text and other CSS properties as well. The basic idea is to set the parent component's font-size with rem or vw, and set everything within the component with em.

Chris Coyier has an example floating around on the internet that explains this methodology perfectly. Here, we can move the slider and the font-sizes will be updated accordingly, which is great!

But, the downside to using this approach is that you'll end up with components that contains text of many different sizes if you're not careful. From a visual perspective, you shouldn't be using too much text of different sizes, because there's alot of inconsistency.

So, most of the time, you don't want to use the proportional method for every component on your website.

The type of component that suits this method best is when it can stand alone on its own. One example is the hero image I've built for 2016.devfest.asia, which is happening in a month.

[RESIZE AND DEMO the DEVFEST ASIA THING ABIT]

For everything else, you'll want to use the controlled scaling method.

Recall that in controlled scaling, you want to make sure the component looks nice in different parts of the website. What this means is you'll first have to map out where the components lives.

Let's say we're building a multi-purpose component that can fit into area 1, area 2 and 3.

One good example is Mashable's homepage. I don't work for Mashable. I'm just using it because it's a good example for what I'm trying to say. My code will probably be very different from theirs too.

In Area 1, it looks like this.
In Area 2, it looks like this.
In Area 3, it looks like this.

Once you're done mapping, you can go ahead and code the three areas according to the design. Let's go with a stupid naming convention for now. We're going to call it .area1. .area2 and .area3.

The next thing to do is to look at the design again and figure out how to style the component across the three areas.

So first of all, we notice that there's mostly text in the components, with one image, and a share thingy. The title text within the component changes in size in each area, but the category size remains the same.

This is a very common thing to see. Because, if you're familiar with a typography-based approach, you'll know that it's a good practice to limit the number of font-sizes on the screen at one time. This is to increase consistency of the sizes used and reduces visual clutter, which helps visitors focus their attention better.

So, essentially, we can write the font-sizes like this:

However, we don't want to be using pixels when we're building components. We always want to use a relative units because of accessibility issues and if you want to scale your change your HTML selector's font-size

If you're building from a typography-based approach, you know it's a good practice to limit the number of font sizes. So, it's pretty safe to write typography sizes in rems.

Here, some people will ask why not use EM or VW? My answer to this question is sure, why not?

Essentially, using REM and EM in this case has the same effect. The reason why I use Rem over Em is because of the added security that font-sizes will always be based on the root font-size. There is no way I can screw things up by changing the parent container's font-size by accident.

I prefer REM over VW because I find it difficult to accurately determine the type size at any point without having to checked the computed values or do complex math calculations. Also, I feel that it makes it much harder for designers to design if I'm using VW. But if you want to use VW, go ahead! There's nothing wrong with it.

I like to call myself a dumb developer and I want things to be simple and as understandable as much as possible, so, I tend to keep my code simple as well, which is why I go for REM.

After deciding the font-sizes, we want to look at other properties. What comes to mind at this point is the margins and paddings within the component. For now, let's put our focus onto the margin and padding that surrounds the content. For simplicity, I'm just going to look at the left margins.

Like the font-size property, we want to convert these numbers into relative units as well. Here, I'll either choose REM or EM. No other units.

Okay, for both of these cases I've chosen to use the REM relative unit. Why don't I choose EMs instead? Isn't it supposed to be better?

## Rem vs Em

That's an important question to answer when it comes to scaling, so let's dive further into Rem vs Em. To start off, let's make sure everyone knows what is Em and what is Rem.

An Em is an unit of typography that's equal to the current point-size. On the web, we don't use points, so just substitute this point with font and it'll make sense.

This means if the font-size is set to 20px like the h1 here, 1em equals to 20px for every property within the h1 selector.

If the font-size is set to 16px, one em equals to 16px.

The problem with em is that it's confusing. One em can take up different values in different parts of the code.

To relieve this confusion, we came up with the REM unit.

Rem is an unit of typography equal to the root font-size. The root font-size is the font-size declared in the HTML selector. So, if the font-size is set to 16px in the html, 1 rem will always be equal to 16px no matter where it's used, even if the current font-size is set to another value.

In the same example, you can see that 1rem is equal to 16px throughout. It retains the same value.

It's highly debatable.

Some developers avoid `rem` entirely, claiming that using `rem` make their components less modular. Others use `rem` for everything, preferring the simplicity that `rem` provides.

Oddly, I fell into the trap of strictly only `rem` or `em` at different points in my development career. I loved how `em` helped me make modular components, but I loathed the complexity it brought to my code. I also loved how `rem` made calculations simple, but I hated the hacks I used to make my components modular.

After a while I found out that **`rem` and `em` have their strengths and weaknesses. They should be used differently, depending on the circumstances.**

How? I have two simple rules. I'll size the property in em if it scales according to its font-size. Otherwise, I'll size in rem.

Let me walk you through why with a simple example. Say we're building a simple header that contains a background, like this.

If we coded purely in REM, the code will be:

What if we need a variation of this component that requires a larger font-size? Naturally, we increase the font-size variable.

But, the results is not so ideal because the top and bottom padding is now too narrow. There's not enough top and bottom breathing room for this element. A fix, if we're using purely REM, is to double the paddings, like so.

But this isn't a very nice solution because we had to write the padding property twice. A better approach is to use em to scale the padding property so we don't have to write it a second time.

It's all good so far, but what if we try to pair this element with a content that has a padding of 1em as well? What you'll notice is that the header left-padding will be too big.

So, one way to fix this is to set the padding (again) on the large header, well, which isn't exactly nice once again.

The fix in this case is to use REM for left / right padding while EM for top / bottom padding.

Here's a quickie summary.

1. Size property in em if you need it to scale according to font-size
2. Size property in rem otherwise

But... There's one more problem we haven't talked about yet. If you're a sharp eyed typography enthusiast, you'll notice that we didn't discuss how Vertical Rhythm comes into styling of this element right now. If you take a look at our image, the rhythm is all out of whack. It's especially different to calculate rhythm when scaling at the same time, so, it might be beneficial to write an extra line of code to get the additional control you need. Of course, only do this if you have a small number of variations to work with.

So far so good. We've covered a lot about scaling. but let's bring it up a notch now by talking about how media queries and breakpoints affect scaling.

## Breakpoints + Scaling

However, no matter what units we choose to write our components with, there's always one thing we cannot run away from when in controlled scaling --- Breakpoints.

Let's imagine we're building a flexible component that can live in all of these areas.

But what if the component needs to be more flexible? What if it needs to fit into all these areas? And to make things more complicated, it needs to respond like this:

Well, this isn't so straightforward, so let's go through each area and see what styles might be needed.

In Area 3, the component stacks on the mobile and looks like this. As we expand the viewport, the with the component takes up expands as well. Maybe at around this point, say it's 700px, it should switch to a medium style because it'll look much better.

But at 800px, we create a breakpoint in the layout and the width reduces back to about 250px each. The medium styles don't look good here, so we have to revert it back to the small styles.

In Area 2, likewise, the layout causes the two components to stack on top of each other as well. In this case, it's slightly simpler because we only have to change the component to medium styles at 700px onwards.

So, the component in area 2 should have small styles below 700px and medium styles beyond 700px.

In area 1, the component behaves similar to the component in area 2. However, let's say we need to update its styles again at 1200px.

If we put everything together, the code will look like this.

And we're done with the scaling portion. By this time, I bet you're like OMG! WTF IS THIS PIECE OF SHIT?!

As you can see, the code is quite ugly. There's duplicated styles everywhere, so let's begin making our code more modular.

## Modular Scaling

The very first step we can do is to abstract similar styles that are used throughout all variations. In our case, the small styles are definitely repeated. We can safely abstract them into the `.component` class, and everything will work as per normal.

What we're left with is the remaining variations and the media queries that are needed to make the changes happen.

Here, we can try to abstract similar styles again. One possibility we can look at is the `min-width` 700px query.

And what we're left with is the media queries. It's also possible to abstract out the min-width 500px and min-width 800px. If we do so, we have a component that scales properly to both area 1 and 2, but we need to use a media query at 600px for area 3 to bring it back to the small styles.

And by now, you're probably pulling your head out in frustration and whether Zell is going to say something useful. Cause so far it feels like really ugly and shitty code.

Okay, let's talk about some solutions to this ugly shitty scaling code.

Alright, let's talk about a solution!

The best solution so far is to use this thing called element queries. For those who don't know, element queries are very much like media queries, but the difference is that the components can be aware of its own width and height. it checks for it's own width. So we can do things like resize an element and create new styles.

Why is this important?

When we resize the component in area 3, there's a part where the width of the component gets large enough to warrant a change in styles. But, when we hit the breakpoint, the width of the component reduces again. We can use this

Well, let me roll back a few slides. For the area 3 component, there's a possibility that it might become too large, and so it needs the medium styles at 500px. However, at 600px, the layout breaks, and the component should go back to the small styles.

When the layout breaks at 600px, the component's width will be much lesser than 500px. So, if we use element queries, we don't have to worry so much about the actual breakpoints. We can simplify the code to something like this:

Unfortunately, Element queries aren't valid CSS yet. But we do have various polyfills built by these awesome people. The one I'm using in this demo is CSS element queries by Marc.

Now it comes back to the question. What's the CSS alternative? How can we write CSS code that's both modular and easy to understand at the same time?

Summary:

- Determine units to use
- Handle complex breakpoints with mixins (if needed)
- Don't over engineer

## Modular Markup

- Atomic Design
- Namespacing by Harry Roberts
- OOCSS
- SMCASS
- BEM



Now that we've handled the scaling part, how do we code our components so they become modular?

According to the dictionary, something that is modular is "composed of standardized units or sections for easy construction or flexible arrangement"

What this means is that our components must be able to fit into multiple sections of the code easily without modifications.

In essence, we question we need to answer is what happens if the component is placed in area 1, area 2 and area 3.

We've actually considered three areas while scaling, so most of the problem is already solved. If it was static website, it'll be easy, because we just have to place the component into their respective places and we're done.

But, on a responsive website, it's not as simple. The area that a component lives in can (and will) change. This means our components must also be able to adapt to changes in the grid layout.

How?

It means our components must somehow be able to know where they are currently placed at in order to change forms. Ideally, you would want to write your components without having to change their classes, like this:

```html
<div class="area-1">
  <div class="component"></div>
</div>

<div class="area-2">
  <div class="component"></div>
</div>

<div class="area-3">
  <div class="component"></div>
</div>
```

And when the layout changes, the component manages to follow suit and change itself accordingly.

For this to happen, the component must know where they're placed. In other words, the must know their current context.
