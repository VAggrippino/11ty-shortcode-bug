# `templateEngineOverride` Breaks Permalink Shortcode

{% shortDate page.date %}

When a page uses `templateEngineOverride`, it forgets how to process shortcodes
used in the `permalink` Front Matter value, but only on the second and
subsequent builds of the page.

{% for item in collections.post -%}
- [{{ item.data.title }}]({{ item.url }})
{% endfor %}

Oops! ↑ The bug demonstrated in this repository also breaks the markdown in this
README file when I use the Liquid for loop. Here are some GFM relative links
instead:

- [Page Demonstrating Bug](page-demonstrating-bug.md)
- [Unaffected Page](unaffected-page.md)

## Example
My site is a blog and I use a shortcode which formats the post dates so that
they work as part of the URL.
    
I want to write a post discussing Liquid syntax and I don't want the Liquid code
used in the post to be processed by the template engine. I change the template
engine so that the Liquid code in the post isn't processed:

```
  templateEngineOverride: md
```

In this situation, if I use the command `npx @11ty/eleventy`, there are no
issues. However, if I use `npx @11ty/eleventy --serve` and make changes to the
post with the `templateEngineOverride` while it's running, it will create a
folder named exactly <code>{&#37; shortDate date %}</code> at the root of the site and that
will be used in
collection item URLs resulting in a link that can't be visited and a "URI
malformed (via URIError)"" error in the console.

An odd *feature* of this problem is that, even with
`npx @11ty/eleventy --serve`, it builds the page correctly the first time. It
only breaks when changes are made to the page while it's running.
