# jquery-waiting

Creates loading/waiting mask over element

Tested on IE 7+ and FireFox. Not tested on Chrome or Safari yet.

Browser | Status
:--- | ----:
IE 7, 8, 9 | Works
IE 10 & 11 | Untested
FF31 | Works
Chrome | Untested

##Examples

```JavaScript
  //Creates a waiting masking and spinner over the element
  $('#elementID').waiting();
```

```JavaScript
  //Stops the spinner
  $('#elementID').waiting('pause');
```

```JavaScript
  //Starts the spinner back up
  $('#elementID').waiting('play');
```

```JavaScript
  //Removes the spinner
  $('#elementID').waiting('done');
```
###Options
<dl>
  <dt>JQuery.waiting([options])</dt>
  <dd>
    <dl>
      <dt>options</dt>
      <dd>Type: <a href="http://api.jquery.com/Types/#PlainObject">PlainObject</a><br/>
      A set of key/value pairs that configure the Waiting widget. All settings are optional.</dd>
      <dd>
        <dl>
          <dt>size (default: <code>0</code>)</dt>
          <dd>Type: Int<br/>Radius of spinner. If zero, or larger than target, spinner fills element. Can specify for element to be smaller than target.</dd>
          <dt>quantity (default: <code>10</code>)</dt>
          <dd>Type: Int<br/>Specifies the number of dots to generate.</dd>
          <dt>dotSize (default: <code>6</code>)</dt>
          <dd>Type: Int<br/>Specifies the radius of the dots to generate.</dd>
          <dt>enableReverse (default: <code>true</code>)</dt>
          <dd>Type: Boolean<br/>If true clicking the element/mask reverses the spinner.</dd>
          <dt>waitMovementIncrementer (default: <code>1</code>)</dt>
          <dd>Type: Int<br/>Determines the direction of the spinner. Runs clockwise be default. Negative is counter-clockwise.</dd>
          <dt>light (default: <code>false</code>)</dt>
          <dd>Type: Boolean<br/>Determines is the light/blue color theme is used or not.</dd>
          <dt>fullScreen (default: <code>false</code>)</dt>
          <dd>Type: Boolean<br/>Determines if the mask should target the entire screen instead of just the target element.</dd>
          <dt>speed (default: <code>100</code>)</dt>
          <dd>Type: Int<br/>Number of milliseconds between color changes. Lower number equates to faster changes.</dd>
          <dt>circleCount (default: <code>1</code>)</dt>
          <dd>Type: Int<br/>Determines the number of circles to display on target element. Each circle of dots will contain the same number of dots specified by quantity.</dd>
          <dt>tailPercent (default: <code>0.25</code>)</dt>
          <dd>Type: Double<br/>Determines the percent of dots to use can trailing gradients.</dd>
        </dl>
      </dd>
    </dl>
  </dd>
</dl>



## Future endeavours
- [ ] Move inline styles to css
- [ ] Finish browser testing
- [ ] Add example page
- [X] Add documentation
