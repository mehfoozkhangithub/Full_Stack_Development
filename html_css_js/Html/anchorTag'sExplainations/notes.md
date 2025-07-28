        | Tag      | Supports `target`? | Notes                                                                  |
    | -------- | ------------------ | ---------------------------------------------------------------------- |
    | `<a>`    | ✅ Yes              | Main usage for opening links in new or specific frames.                |
    | `<form>` | ✅ Yes              | Controls where form results are displayed (e.g., `_blank`, `_parent`). |
    | `<base>` | ✅ Yes              | Sets default `target` for all links/forms in the document.             |
    | `<area>` | ✅ Yes              | Used in image maps for clickable areas.                                |


        | Value       | Meaning                                                              |
    | ----------- | -------------------------------------------------------------------- |
    | `_self`     | Default — opens in the same frame or tab.                            |
    | `_blank`    | Opens in a new tab or window.                                        |
    | `_parent`   | Opens in the **immediate parent** frame (or same tab if no parent).  |
    | `_top`      | Opens in the **topmost** browsing context (removes all frames).      |
    | `framename` | Opens in a frame/window with the given name (`<iframe name="...">`). |
