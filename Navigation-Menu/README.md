## Navigation menu with hover and touch support

This app demonstrates a navigation menu with a full-browser width drop menu that supports hover and touch events. jQuery provides the logic to handle timers and interactions with menu items. Animation is handled by CSS unless the browser does not support CSS transitions, in which case jQuery provides the animation as well.

### Setup

**1. Dependencies**
- [jQuery](http://jquery.com)
- [Modernizr](http://modernizr.com) - for IE 8 support

**2. HTML**

The navigation is separated into two components:
- `.main-nav-list`
- `.main-nav-drop`

Connect each `.main-nav-list` item to a `.main-nav-drop` item using the `data-nav-item` attribute.

Both components should be full browser width. If you need a container, place it within each component.

**3. CSS**

The CSS is fairly simple. The `.main-nav-drop` component is hidden behind `.main-nav-list` using `position: absolute` and `z-index`.

Adjust transition speed within the CSS. Timers will be adjusted within the JavaScript.

**4. JavaScript**

Update the global variables to match any class names that are changed in the markup. Timers can be adjusted to personal taste.

By default, `.main-nav-drop` persists when moving between menu items in order to prevent reduce accidental switches to neighboring menu items. That functionality can be changed to close the drop menu when moving between menu items. Read the comments within `app.js` for details.
