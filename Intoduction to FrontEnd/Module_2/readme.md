## Simple HTML Tags — Notes

### 1. Headings
- Use `` to `` for titles and subtitles.
- `` is the largest, `` is the smallest.

**Example:**
```html
Main Title
Sub Title
```

### 2. Paragraphs
- Paragraphs are defined with ` ... `.
- Line breaks in code are ignored in display.

**Example:**
```html
This is a paragraph.
```

### 3. Line Breaks
- Use `` to force a line break inside text.
- `` has no closing tag.

**Example:**
```html
Line oneLine two
```

### 4. Strong and Bold
- `` indicates important content (semantically meaningful, for accessibility).
- `` simply makes text bold (for visual attention).

**Example:**
```html
Warning: Do not feed dogs chocolate.
The primary colors are red, yellow and blue.
```

### 5. Emphasis and Italics
- `` adds emphasis and is read accordingly by screen readers.
- `` makes text italic, for off-set text like book titles or terms.

**Example:**
```html
Wake up now!
The term HTML stands for HyperText Markup Language.
```

### 6. Lists
- **Unordered lists:** ``, with items in ``.
- **Ordered lists:** ``, with items in ``.

**Examples:**
```html

  Tea
  Sugar
  Milk


  Rocky
  Rocky II
  Rocky III

```

### 7. Div Tags
- `` defines a generic container for grouping content; has no visual effect unless styled.
- Can be nested inside other tags.
- Useful for layout and styling with CSS.

**Example:**
```html

  This is a paragraph inside a div

```

**With CSS styling:**
```html

div {
  border: 1px solid black;
  padding: 2px;
}


  
    This is a paragraph inside stylized divs
  

```

### 8. Comments
- Use `` to add notes in HTML code.
- Comments are not shown in the browser.

**Summary Table of Tags:**

| Purpose    | Tag(s)                         |
|------------|-------------------------------|
| Heading    | `` ... ``             |
| Paragraph  | ``                         |
| Line Break | ``                        |
| Bold       | ``, ``             |
| Italic     | ``, ``                 |
| Unordered List | ``, ``            |
| Ordered List   | ``, ``            |
| Division   | ``                       |
| Comment    | ``                |

**Notes:**
- `` and `` are for visual styling.
- `` and `` give meaning (important for SEO and accessibility).
- Use `` for bullet lists, `` for numbered lists.
- `` helps organize and style page content.



## ` Tag (Hyperlink)`

- **Purpose:** Creates a **clickable link** to another page, section, file, or email.
- **Syntax:**
  ```html
  <a href="URL">Link Text</a>
  ```
- **Key Attributes:**
  - **`href`** (required): Where the link goes.
  - **`target="_blank"`**: Opens link in a **new tab**.
  - **`title`**: Shows a tooltip when you hover.
  - **`rel="noopener noreferrer"`**: Use with `target="_blank"` for **security**.
- **Example:**
  ```html
  <a href="https://example.com" target="_blank">Visit Example</a>
  ```

## `` Tag (Image)

- **Purpose:** **Inserts an image** into the page.
- **Syntax:**
  ```html
  <a href="home.html"><img src="logo.png" alt="Home"></a>
  ```
- **Key Attributes:**
  - **`src`** (required): Path or URL to the image.
  - **`alt`** (required for accessibility): **Describes the image**.
  - **`width`/`height`**: Set image size in pixels.
  - **`title`**: Tooltip text on hover.
---
## **CSS Basics**

### **What is CSS?**
- **CSS** (**Cascading Style Sheets**) is a language used to **style and layout web pages**.
- Controls color, fonts, spacing, positioning, layouts, and more[2][7][8].

### **Why Use CSS?**
- **Separates style from HTML content**.
- **Saves work**: style many pages by editing one `.css` file[2][9].
- Enables responsive design for different devices[2].

## **CSS Syntax**

- Consists of **selectors**, **properties**, and **values**:

  ```css
  selector {
      property: value;
  }
  ```
  **Example:**
  ```css
  p {
      color: blue;
      font-size: 18px;
  }
  ```
- **Selectors** choose which HTML elements to style[6].
- **Properties** are what you want to change (e.g., `color`).
- **Values** specify the new style (e.g., `blue`).

## **How to Add CSS**

1. **Inline**: Inside HTML elements (not recommended)
   ```html
   Text
   ```
2. **Internal**: Inside `` tags in ``
   ```html
    p {
      color: red;
      }
   
   ```
3. **External**: In a separate `.css` file (recommended)
   ```html
   <link rel="stylesheet" href="style.css">
   ```

## **Selectors**
- **Element Selector:** `p` (all `` tags)
- **Class Selector:** `.classname` (elements with class)
- **ID Selector:** `#idname` (element with id)
- **Attribute Selector:** `[attribute="value"]`
- **Pseudo-classes/elements:** `:hover`, `::after`, etc.[1][6]

## **Common Properties**

- **Colors/Background:** `color`, `background-color`
- **Text:** `font-size`, `font-family`, `font-weight`, `text-align`
- **Box Model:** `width`, `height`, `margin`, `padding`, `border`
- **Layout:** `display`, `position`, `top/right/bottom/left`, `float`, `flex`, `grid`
- **Others:** `opacity`, `z-index`, `overflow`, `max-width`, `min-height`

## **Box Model**
- Each element is a **box** with:  
  **Content → Padding → Border → Margin**.

## **Responsive Design**
- Use **media queries** for different screen sizes:
  ```css
  @media (max-width: 600px) {
    body { background: yellow; }
  }
  ```

## **Advanced Topics**
- **Flexbox / Grid:** Powerful layout systems for modern designs.
- **Animations & Transitions:** Add motion and interactive effects.
- **Selectors Specificity & Cascade:** Controls which style “wins”.

## **Tips**
- Use an **external stylesheet** to manage large sites.
- Always use **meaningful selectors** for maintainability.
- Validate your CSS for errors using tools (like the W3C Validator)[4].

**Summary:**  
CSS is **essential for styling websites**, allowing you to control how web pages look and adapt to different devices and needs. Mastering selectors, properties, and the box model is key to effective CSS.

Here are **the most important and commonly used CSS properties** every developer should know, summarized for quick documentation and easy understanding:

## **Essential CSS Properties**

- **color**: Sets the text color.
  ```css
  color: red;
  ```

- **background-color**: Sets the background color of an element.
  ```css
  background-color: #f0f0f0;
  ```

- **font-family**: Specifies the typeface.
  ```css
  font-family: Arial, sans-serif;
  ```

- **font-size**: Sets the size of the text.
  ```css
  font-size: 16px;
  ```

- **font-weight**: Controls the boldness.
  ```css
  font-weight: bold;
  ```

- **line-height**: Sets the space between lines of text.
  ```css
  line-height: 1.5;
  ```

- **width / height**: Sets the size of an element.
  ```css
  width: 300px;
  height: 200px;
  ```

- **margin**: Controls spacing **outside** the border.
  ```css
  margin: 20px;
  ```

- **padding**: Controls spacing **inside** the border, around content.
  ```css
  padding: 10px;
  ```

- **border**: Sets the border's width, style, and color.
  ```css
  border: 1px solid #333;
  ```

- **display**: Determines the display behavior (`block`, `inline`, `flex`, `grid`, etc.).
  ```css
  display: flex;
  ```

- **position**: Positions element (`static`, `relative`, `absolute`, `fixed`, `sticky`).
  ```css
  position: absolute;
  top: 50px;
  left: 20px;
  ```

- **flex / grid**: Modern layout systems.
  ```css
  display: flex;
  display: grid;
  ```

- **justify-content / align-items**: Align and distribute items inside flex or grid containers.
  ```css
  justify-content: space-between;
  align-items: center;
  ```

- **z-index**: Controls stack order of positioned elements (used with `position`).
  ```css
  z-index: 10;
  ```

- **overflow**: Controls what happens when content overflows its box.
  ```css
  overflow: auto; /* or hidden, scroll, visible */
  ```

- **object-fit**: Defines how an image or video should fit in its container.
  ```css
  object-fit: cover;
  ```

- **box-shadow**: Adds shadow to elements.
  ```css
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  ```

- **opacity**: Sets the transparency.
  ```css
  opacity: 0.8;
  ```

- **transition**: Smoothly animates property changes.
  ```css
  transition: background 0.3s;
  ```

- **:hover / :focus / :active**: Pseudo-classes for interaction styles.
  ```css
  a:hover { color: blue; }
  ```

- **!important**: Overrides all other declarations for that property (use sparingly).
  ```css
  color: green !important;
  ```

These properties form the foundation for most web layouts and designs. Mastery of **margin, padding, display, color, font, position, and layout (flex, grid)** is crucial for CSS development.

## **CSS Box Model**

The **CSS box model** is a fundamental concept used to understand how elements are structured and laid out on a web page. Every HTML element is considered as a rectangular box, which consists of four parts:

### **Box Model Structure**

1. **Content**  
   - The actual text, image, or other media inside the element.

2. **Padding**  
   - Transparent space around the content, *inside* the border.  
   - Increases the space between content and border.

3. **Border**  
   - A line surrounding the padding and content.
   - Thickness, style, and color can be adjusted (e.g., `1px solid #333`).

4. **Margin**  
   - Transparent space *outside* the border.
   - Creates separation between elements.

### **Box Model Diagram**

```
+-----------------------------+
|         Margin              |
|  +-----------------------+  |
|  |      Border           |  |
|  |  +-----------------+  |  |
|  |  |    Padding      |  |  |
|  |  | +-----------+   |  |  |
|  |  | | Content   |   |  |  |
|  |  | +-----------+   |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

### **Box Model Example in CSS**

```css
div {
  width: 300px;           /* Content width */
  height: 100px;          /* Content height */
  padding: 20px;          /* Space inside the border */
  border: 2px solid blue; /* Border thickness and color */
  margin: 30px;           /* Space outside the border */
}
```

### **Total Element Size Calculation**

By default (using `box-sizing: content-box`), the total size **includes** content, padding, and border (not margin):

- **Total Width:**  
  $$ \text{width} + \text{left padding} + \text{right padding} + \text{left border} + \text{right border} $$
- **Total Height:**  
  $$ \text{height} + \text{top padding} + \text{bottom padding} + \text{top border} + \text{bottom border} $$

To make `width` and `height` include padding and border (recommended for easier layout), use:

```css
box-sizing: border-box;
```

### **Summary Table**

| Layer     | Purpose                         | CSS Properties             |
|-----------|---------------------------------|----------------------------|
| Content   | Displays element’s main content | `width`, `height`          |
| Padding   | Space *inside* border           | `padding`, `padding-top`…  |
| Border    | Outlines the element            | `border`, `border-width`…  |
| Margin    | Space *outside* border          | `margin`, `margin-top`…    |

**Key Points**
- **Margin:** Separates from other elements.
- **Border:** Visual outline.
- **Padding:** Space between border and content.
- **Content:** The innermost part.

---

## **HTML Block vs. Inline Elements**

### **Block Elements**
- **Start on a new line** and take up the **full width** available, stretching from left to right of their parent container[1][2][4][6].
- **Browsers automatically add space (margins) above and below** block elements[1][2].
- Can contain **other block elements and inline elements**[7].
- **Common examples**:
  - ``
  - ``
  - ``–``
  - ``, ``, ``
  - ``, ``
  - ``, ``, ``, ``, ``.
- **Usage:** Structure major sections of a web page (headings, paragraphs, sections, lists).

### **Inline Elements**
- **Do not start on a new line**; appear **in-line with surrounding content**[1][2][4][6].
- Only take up **as much width as necessary** for their content—do **not** stretch the whole line[2][4].
- **Do not have top or bottom margins** by default[2][4][6].
- **Cannot contain block elements.**
- **Common examples**:
  - ``
  - ``
  - ``, ``, ``, ``
  - ``
  - ``, ``, ``.
- **Usage:** Mark up a **piece of text** or element within a block (emphasize, style, or create links).

### **Comparison Table**

|                | **Block Elements**                         | **Inline Elements**                 |
|----------------|--------------------------------------------|-------------------------------------|
| **Line**       | Start on a new line                        | Do not start on a new line          |
| **Width**      | Take up full available width                | Only as wide as their content       |
| **Margin**     | May have top and bottom margins             | No top or bottom margin             |
| **Containment**| Can contain block & inline elements         | Only contain other inline elements  |
| **Examples**   | ``, ``, ``, ``, ``  | ``, ``, ``, ``     |

**Summary:**  
- Use **block elements** for major sections and layout.
- Use **inline elements** for emphasizing or marking up sections within lines of text.  
- Choosing the right type helps structure and control your webpage’s layout and appearance.
