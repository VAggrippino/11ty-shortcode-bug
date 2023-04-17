---
title: Page Demonstrating Bug
permalink: "/{% shortDate page.date %}/{{ page.fileSlug }}/"
tags: post
templateEngineOverride: md
---
# {{ title }}

I want to talk about Liquid here:

```
{%- for item in collections.post -%}
- [{{ item.page.title }}]({{ item.url }})
{%- endfor -%}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus lorem quis diam elementum, at accumsan metus luctus. Pellentesque dictum sit amet elit nec pretium. Nullam blandit eget nunc ac luctus. Vivamus nec iaculis turpis. Duis vel rutrum eros. Aliquam blandit faucibus nisi lobortis congue. Phasellus id nisl at diam elementum lobortis. Pellentesque feugiat quam eu congue ullamcorper. Nam ut ligula elit. Aliquam aliquam eleifend diam, quis fermentum urna fermentum at. Sed neque neque, dapibus porta dignissim at, luctus sed dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu magna in purus sagittis fermentum. Integer facilisis libero sit amet mauris pellentesque, at ultricies lacus consectetur. Nam aliquam lacus pellentesque enim sagittis, quis dictum sapien ultricies.

Nullam ultrices velit quis lorem lobortis, id bibendum arcu lobortis. Duis eget ullamcorper ligula. Etiam vulputate nisl nec luctus scelerisque. Cras convallis eros sed imperdiet auctor. Nunc magna purus, ullamcorper a laoreet eget, venenatis in lacus. Suspendisse ullamcorper libero urna, vitae vehicula ex porttitor sed. In nec lorem nisl. Vivamus a feugiat dolor. Suspendisse potenti. Curabitur ac odio in libero gravida eleifend porttitor et tellus. Maecenas pellentesque eget felis vitae sagittis. Fusce vehicula convallis ligula sit amet dapibus.

Etiam purus lectus, convallis id velit quis, iaculis gravida quam. Maecenas id semper risus. Praesent in libero non tellus imperdiet posuere id sit amet dolor. Curabitur ultricies mi quis tellus consectetur condimentum. Morbi ornare tellus et sapien porta imperdiet. Donec sed porttitor nisl. Mauris molestie lectus sapien, ut blandit ex aliquam nec. Nulla tristique ullamcorper sem ac fermentum. Maecenas sed ultrices lorem, sed malesuada nisi. Curabitur pharetra porttitor erat, eget pretium felis convallis vitae. Mauris id efficitur nunc, pellentesque sollicitudin leo. Ut dignissim elit at massa faucibus, ut pulvinar tellus vehicula. Curabitur felis eros, pretium ac elementum fringilla, aliquet sit amet dolor. Phasellus id gravida risus, ac tincidunt turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pellentesque hendrerit metus et mattis.

Morbi eget arcu nec sapien vestibulum tincidunt. Quisque quis varius metus, nec condimentum neque. Suspendisse tellus augue, pretium in finibus quis, finibus tempus arcu. Suspendisse facilisis dolor dignissim sollicitudin ullamcorper. Duis faucibus, turpis a vehicula tincidunt, leo sapien bibendum felis, nec elementum nisl ante vel magna. Cras blandit odio quis lorem cursus, vel pharetra mi convallis. Aliquam ultricies vestibulum ex ut blandit. Ut a feugiat ex. Donec at metus efficitur nibh semper blandit vel sed nunc. Mauris ligula augue, euismod nec tempus sit amet, pharetra ac lorem. Sed ipsum nisl, tempus pellentesque tellus sit amet, viverra tempus mauris. Phasellus eu volutpat leo. Sed pulvinar ultricies ex, a ornare libero ullamcorper in. In hac habitasse platea dictumst. Nullam fringilla sem vel maximus aliquam.

Vivamus blandit laoreet lacus non placerat. Duis lobortis vitae erat non gravida. Sed vehicula libero ex, quis pretium arcu faucibus ut. Donec a enim ut est cursus lacinia sit amet eu odio. Quisque molestie, metus nec bibendum porttitor, dui arcu sodales diam, eu vehicula lectus odio et velit. Donec a arcu at massa pulvinar auctor vitae sed risus. Etiam tempus urna sem, a malesuada augue dignissim id.