```js
// Save token in cookie
document.cookie =
  'token=your_token_value; path=/; max-age=3600; secure; samesite=strict';

console.log(document.cookie); // "token=your_token_value"
```
