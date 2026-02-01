## Display `content`

### Q.1 What is display: contents?

> `display`: **contents removes the element’s own box, but keeps its children visible.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display all the property</title>
    <style>
      .parent {
        border: 2px solid black;
        display: contents;
      }

      .child {
        background: lightblue;
      }

      .container {
        display: flex;
      }

      .wrapper {
        display: contents;
      }
    </style>
  </head>

  <body>
    <!-- $ this is display content -->

    <div class="parent">
      <div class="child">A</div>
      <div class="child">B</div>
    </div>

    <div class="container">
      <div class="wrapper">
        <div class="item">1</div>
        <div class="item">2</div>
      </div>
    </div>
  </body>
</html>
```

### Q.2 What is display: flow-root?

> `display`: **flow-root creates a new block formatting context (BFC) so the element contains its floated children properly.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display all the property</title>
    <style>
      .parent::after {
        content: '';
        display: block;
        /* this is will clear the both float:left and float right*/
        clear: both;
      }

      .parent {
        border: 2px solid red;
        /* this is advance of old version */
        /* display: flow-root; */
      }

      .box {
        float: left;
        width: 100px;
        height: 100px;
        background: skyblue;
      }
    </style>
  </head>

  <body>
    <!-- ! this is display flow-root -->

    <div class="parent">
      <div class="box"></div>
    </div>
  </body>
</html>
```

## Q.3 What is display: inline-flex?

```html
<!-- inline flex -->

<div class="inline_flex">
  <div>🤞</div>
  <div>like</div>
</div>
```

```css
.inline_flex > div:first-child {
  background: tomato;
}

.inline_flex > div:last-child {
  background: teal;
}

.inline_flex {
  display: inline-flex;
  margin: 20px 0;
}
```

## Q.4 What is display: inline?

```html
<!-- inline  -->

<div class="block">hello</div>
<h1 class="block">hello</h1>

<span class="inline">hello</span>
<a class="inline">hello</a>
```

```css
.block {
  background: green;
  display: inline;
}

.inline {
  background: red;
  display: block;
}
```
