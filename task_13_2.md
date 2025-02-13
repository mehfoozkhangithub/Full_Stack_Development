# `Position: static`(_default_)

- This is the default position.
- The element follows the normal document flow.
- It does not respond to `top`, `left`, `right`, or `bottom`.

```html
<div class="box static">Static Position</div>

<style>
  .box {
    width: 200px;
    height: 100px;
    background: lightblue;
    border: 2px solid blue;
    margin: 10px;
  }
</style>
```

# `Position: relative`

- The element stays in the normal document flow.
- You can move it using `top`, `left`, `right`, `bottom` relative to its normal position.

```html
<div class="box relative">Relative Position</div>

<style>
  .relative {
    position: relative;
    top: 20px;
    left: 30px;
    background: lightcoral;
  }
</style>
```

# `Position: absolut`

- The element is removed from the normal document flow.
- It is positioned relative to the nearest positioned ancestor (if none, it positions itself relative to `<html>`).
- Uses `top`, `left`, `right`, `bottom` to move.

```html
<div class="container">
  <div class="box absolute">Absolute Position</div>
</div>

<style>
  .container {
    position: relative; /* Makes this the reference for absolute child */
    width: 300px;
    height: 200px;
    background: lightgray;
  }
  .absolute {
    position: absolute;
    top: 50px;
    left: 50px;
    background: yellow;
  }
</style>
```

# `Position: fixed`

- The element is removed from the document flow.
- It is positioned relative to the viewport (screen).
- It stays in place even when scrolling.

```html
<div class="box fixed">Fixed Position</div>

<style>
  .fixed {
    position: fixed;
    top: 10px;
    right: 10px;
    background: lightgreen;
  }
</style>
```

# `Position: sticky`

- Acts like relative until you scroll past it, then it behaves like fixed.
- Requires `top`, `left`, `right`, or `bottom` to work.

```html
<div class="box sticky">Sticky Position</div>
<p>Scroll down to see the effect...</p>
<div style="height: 1000px;"></div>

<style>
  .sticky {
    position: sticky;
    top: 0;
    background: orange;
    padding: 10px;
  }
</style>
```
