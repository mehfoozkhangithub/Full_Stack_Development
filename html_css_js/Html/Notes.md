# **_Html_** `Hyper Text Markup language`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- browser side -->
    <!-- meta tag's which define the browser to understand the layout to run on it... -->
  </head>
  <body>
    <!-- for client/UI side  -->
    <!-- sementic tag's and non-sementic's tag's  -->
  </body>
</html>
```

```html
<!--  this is the code which i explain to sunday batch -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro</title>
</head>

<body>
    U+0068 ->h
    U+0065 ->e
    U+006C ->l
    U+006C ->l
    U+006F ->o

    U+0048 -> H
    U+0045 -> E
    U+004C -> L
    U+004C -> L
    U+004F -> O

    <!-- elements in html-->
    <open>
        <!-- contain -->
        </close>

        <h1>hello world</h1>
        <h2>hello world</h2>
        <h3>hello world</h3>
        <h4>hello world</h4>
        <h5>hello world</h5>
        <h6>hello world</h6>

</body>

</html>

-> elements  in html

<open>
  containt
</close>



```

```html
<!-- this is the task -->

<label for="email">Email:</label>
<input type="email" id="email" name="email" />
<!-- form -->
<form action="/submit-form" method="post">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>

<!-- 
    
    📌 Why we use the action attribute:
    Defines the target URL where the form data goes.

    Helps the server know which endpoint to handle the submitted data.

    It can point to:

    A server file (e.g., submit.php)

    An API endpoint (e.g., /api/login)

    A full URL (e.g., https://example.com/process)

    -->

<!-- 

    🔁 If action is omitted:
    The form submits to the current page URL (same page reloads with submitted data).

    -->

<form action="/login" method="post">
  <input name="user" type="text" />
  <input name="pass" type="password" />
  <button type="submit">Login</button>
</form>

<!-- 

    This sends the form data to /login on the same server using POST method.

    TL;DR:
    The action attribute tells the browser where to send the form data when the user submits it.
    -->
```
