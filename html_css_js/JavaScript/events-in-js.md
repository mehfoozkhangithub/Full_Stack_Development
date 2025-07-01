
# JavaScript Events (Complete List)

JavaScript events are used to handle user interactions and browser behavior. Below is a categorized list of common events.

---

## 📌 UI Events
| Event | Description |
|-------|-------------|
| load | Fires when the page has loaded |
| unload | Fires when the page is unloaded |
| resize | Fires when the window is resized |
| scroll | Fires when an element is scrolled |
| error | Fires when an error occurs |

---

## 🖱️ Mouse Events
| Event | Description |
|-------|-------------|
| click | Fires when an element is clicked |
| dblclick | Fires when an element is double-clicked |
| mousedown | Fires when a mouse button is pressed |
| mouseup | Fires when a mouse button is released |
| mousemove | Fires when the mouse pointer moves |
| mouseover | Fires when the mouse pointer enters an element |
| mouseout | Fires when the mouse pointer leaves an element |
| contextmenu | Fires when the right mouse button is clicked |

---

## ⌨️ Keyboard Events
| Event | Description |
|-------|-------------|
| keydown | Fires when a key is pressed down |
| keyup | Fires when a key is released |
| keypress | Fires when a key is pressed (deprecated) |

---

## 🖊️ Input and Form Events
| Event | Description |
|-------|-------------|
| input | Fires when the value of an `<input>`, `<textarea>` or `<select>` changes |
| change | Fires when a form element loses focus after its value is changed |
| submit | Fires when a form is submitted |
| reset | Fires when a form is reset |
| focus | Fires when an element gets focus |
| blur | Fires when an element loses focus |
| focusin | Like focus, but bubbles |
| focusout | Like blur, but bubbles |

---

## 📦 Clipboard Events
| Event | Description |
|-------|-------------|
| copy | Fires when content is copied |
| cut | Fires when content is cut |
| paste | Fires when content is pasted |

---

## 🧭 Drag and Drop Events
| Event | Description |
|-------|-------------|
| drag | Fires when an element is dragged |
| dragstart | Fires when the dragging starts |
| dragend | Fires when the dragging ends |
| dragenter | Fires when a dragged element enters a drop zone |
| dragleave | Fires when a dragged element leaves a drop zone |
| dragover | Fires when a dragged element is over a drop zone |
| drop | Fires when a dragged element is dropped |

---

## 📲 Touch Events (for mobile)
| Event | Description |
|-------|-------------|
| touchstart | Fires when a finger is placed on the screen |
| touchmove | Fires when a finger is moved on the screen |
| touchend | Fires when a finger is removed from the screen |
| touchcancel | Fires when the touch event is interrupted |

---

## 📡 Network Events
| Event | Description |
|-------|-------------|
| online | Fires when the browser goes online |
| offline | Fires when the browser goes offline |

---

## 🧪 Mutation Events (Deprecated but useful for reference)
| Event | Description |
|-------|-------------|
| DOMSubtreeModified | Fires when a change occurs in a DOM subtree |
| DOMNodeInserted | Fires when a node has been added |
| DOMNodeRemoved | Fires when a node has been removed |

> ✅ Use [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) instead.

---

## 🧠 Other Notable Events
| Event | Description |
|-------|-------------|
| animationstart | CSS animation started |
| animationend | CSS animation ended |
| animationiteration | CSS animation iteration completed |
| transitionend | CSS transition ended |
| beforeunload | Fires before a page is unloaded |
| hashchange | Fires when the URL hash changes |
| popstate | Fires on browser back/forward navigation |

---

## 🧩 Custom Events
- You can create and dispatch your own custom events using the `CustomEvent` constructor:
```js
const event = new CustomEvent('myEvent', { detail: { name: 'chatgpt' } });
element.dispatchEvent(event);
```

---

## ✅ Example: Event Listener
```js
document.getElementById("btn").addEventListener("click", function() {
  alert("Button Clicked!");
});
```

---

## 📚 Resources
- [MDN Web Docs - Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
