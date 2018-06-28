# new-tab

A simple, pretty new tab page

Use with [Safari](#safari), setup guides for other browsers are currently pending.

Enter your shortcut to be redirected to the target page.

Inspired by [waves-startpage](https://github.com/vapor-404/waves-startpage), made pretty using [geopattern](https://github.com/btmills/geopattern).

## Customisation

Customise by modifying the `links.js` file. You should specify a shortcut, a title and a url.

```
{
    $SHORTCUT : { title: $TITLE , url: $URL }
}
```

## Setup

### Safari

1.  `$ git clone git@github.com:nchlswhttkr/new-tab.git`
1.  Copy file path (`/users/nchlswhttkr/new-tab/index.html`)
1.  Safari > Preferences > General
    - "New windows open with": "Homepage"
    - "New tabs open with": "Homepage"
    - "Homepage": `/users/nchlswhttkr/new-tab/index.html`
