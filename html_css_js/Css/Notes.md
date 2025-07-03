| Feature           | `fixed`        | `sticky`                           |
| ----------------- | -------------- | ---------------------------------- |
| Scrolls with page | ❌ No          | ✅ Yes (until it "sticks")         |
| Stays on screen   | ✅ Always      | ✅ Only after reaching threshold   |
| Parent affects it | ❌ Independent | ✅ Sticky inside parent boundaries |

## matrix or 3d animations

- 👉 It's a function that defines a 3D transformation matrix using 16 values.

transform: matrix3d(
a1, a2, a3, a4,
b1, b2, b3, b4,
c1, c2, c3, c4,
d1, d2, d3, d4
);

| Matrix Row    | Controls                    | Example Usage      |
| ------------- | --------------------------- | ------------------ |
| Row 1 (a1–a4) | X-axis transformations      | scaleX, skewY      |
| Row 2 (b1–b4) | Y-axis transformations      | scaleY, skewX      |
| Row 3 (c1–c4) | Z-axis transformations      | rotationZ, depth   |
| Row 4 (d1–d4) | Translation and perspective | translateX/Y/Z, 3D |
