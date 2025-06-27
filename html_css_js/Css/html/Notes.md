# CSS `Notes`

### Contant-Box Vs Border-Box

| Property          | `content-box`                                | `border-box`                                  |
| ----------------- | -------------------------------------------- | --------------------------------------------- |
| `width`           | **200px is only the content**                | **200px includes content + padding + border** |
| Actual total size | 200 + 40 (padding) + 20 (border) = **260px** | Total size stays exactly **200px**            |
| Used for          | More control over content area               | Easier layout control                         |

🧒 **Student-friendly Analogy:**

- _**Content-box**_ = You buy a bag that is 200px wide, and then put the padding and border on the outside of it — it becomes larger than 200px.

- **_Border-box_** = You buy a bag that is exactly 200px wide, and padding + border are fit inside the same 200px.

<img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*08DnApeCVZ9QwaxgOrzGkA.jpeg' alt='box-siging' />

### Border-Box

```css
.box-2 {
  width: 100px;
  height: 120px;
  padding: 5px;
  border: 2px solid blue;
  box-sizing: border-box;
}
```

<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*6bkwYO_x4podYrSpmHVSvw.png' alt='border-box' />

### Content-Box

```css
.box-1 {
  width: 100px;
  height: 120px;
  padding: 5px;
  border: 2px solid blue;
  box-sizing: content-box;
}
```

<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*dip8l678B6Md1ihJ8Yfxig.png' alt='border-box' />
