const questions = [
    ["What does the `<img src='image.jpg' alt='Description'>` tag do?", "Inserts a video", "Displays an image with alternative text", "Defines image properties", "Creates a link to an image", "B"],
    ["Which HTML tag is used to define the title of an HTML document?", "<head>", "<document>", "<meta>", "<title>", "D"],
    ["Which HTML tag defines a table data cell?", "<th>", "<table>", "<td>", "<tr>", "C"],
    ["Which HTML tag is used for defining navigation links?", "<links>", "<menu>", "<nav>", "<navigation>", "C"],
    ["Which CSS property controls the text size?", "text-style", "font-style", "font-size", "text-size", "C"],
    ["What does `display: flex;` used for?", "To hide an element", "To align text", "To create a flexible box layout", "To make an element block-level", "C"],
    ["What is the output of `console.log(typeof 'hello');`?", "undefined", "boolean", "string", "number", "C"],
    ["How do you call a function named 'myFunction'?", "execute myFunction", "myFunction()", "run myFunction()", "call myFunction()", "B"],
    ["Which method is used to remove the last element from an array?", "removeLast()", "shift()", "pop()", "splice()", "C"],
    ["What is the correct syntax for an arrow function with no parameters?", "() => function{}", "() => {}", "=> {}", "function() {}", "B"],
    ["Which JavaScript method is used to select an HTML element by its ID?", "document.getById()", "document.querySelector()", "document.getElementsByTagName()", "document.getElementById()", "D"],
    ["How do you convert an object to a JSON string?", "JSON.parse()", "object.toJSON()", "JSON.stringify()", "JSON.toText()", "C"],
    ["How do you clear a `setTimeout` timer?", "stopTimeout()", "clearTimeout()", "resetTimeout()", "clearInterval()", "B"],
    ["Which built-in method sorts the elements of an array?", "orderBy()", "order()", "arrange()", "sort()", "D"],
    ["What is the correct HTML tag for inserting a line break?", "<line>", "<lb>", "<br>", "<break>", "C"],
    ["What is the purpose of the `<body>` tag in HTML?", "Defines the document's body", "Contains metadata about the HTML document", "Contains JavaScript code", "Defines the main content of the HTML document", "D"],
    ["Which HTML tag is used to define an independent, self-contained content?", "<aside>", "<section>", "<main>", "<article>", "D"],
    ["What does CSS stand for?", "Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "C"],
    ["How do you include an external stylesheet in an HTML document?", "<import stylesheet='style.css'>", "<stylesheet>style.css</stylesheet>", "<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "D"],
    ["Which CSS property is used to hide an element?", "hide: true;", "display: none;", "visibility: hidden;", "Both A and B", "D"],
    ["Which CSS unit is relative to the font-size of the root element?", "px", "em", "%", "rem", "D"],
    ["What is the output of `2 + '2'` in JavaScript?", "Error", "4", "'22'", "NaN", "C"],
    ["How do you write an IF statement in JavaScript?", "if i == 5 else", "if (i == 5)", "if i == 5 then", "if i = 5", "B"],
    ["Which operator is used for strict equality (value and type)?", "==", "!=", "=", "===", "D"],
    ["How do you comment out a single line in JavaScript?", "/* This is a comment */", "# This is a comment", "// This is a comment", "", "C"],
    ["Which method is used to add new elements to the end of an array?", "append()", "add()", "unshift()", "push()", "D"],
    ["Which built-in method returns the value of a string converted to uppercase?", "upperCase()", "toUpper()", "toUpperCase()", "convertToUpper()", "C"],
    ["How do you convert a string to an integer in JavaScript?", "toFloat()", "parseInt()", "Number()", "Both A and B", "D"],
    ["Which JavaScript method is used to change the content of an HTML element?", "textContent", "innerText", "innerHTML", "All of the above", "D"],
    ["What is `NaN` in JavaScript?", "New attribute Name", "Not-a-Number", "Null and Null", "No access", "B"],
    ["Which method is used to execute a function after a specified delay?", "wait()", "delay()", "setTimeout()", "setInterval()", "C"],
    ["How do you get the number of elements in an array?", "array.count", "array.numberOfElements", "array.size", "array.length", "D"],
    ["What is the result of `typeof null` in JavaScript?", "number", "null", "undefined", "object", "D"],
    ["What is the correct HTML for creating a hyperlink?", "<link url='url'>Link</link>", "<a href='url'>Link</a>", "<url>Link</url>", "<a>url<link></a>", "B"],
    ["Which HTML element is used to specify a footer for a document or section?", "<end>", "<bottom>", "<footer>", "<section>", "C"],
    ["Which HTML element is used for short quotes?", "<blockquote>", "<cite>", "<q>", "<quote>", "C"],
    ["Which HTML tag is used to define an unordered list?", "<dl>", "<ol>", "<ul>", "<li>", "C"],
    ["What is the correct HTML for a comment?", "/* This is a comment */", "<comment>This is a comment</comment>", "", "// This is a comment", "C"],
    ["Which attribute is used to make an input field mandatory?", "mandatory", "compulsory", "required", "must", "C"],
    ["Which HTML tag is used to define a table row?", "<table>", "<th>", "<tr>", "<td>", "C"],
    ["What is the HTML element for striking through text?", "<s>", "<del>", "<strike>", "All of the above", "D"],
    ["Which HTML element is used for defining important text?", "<b>", "<important>", "<bold>", "<strong>", "D"],
    ["Which CSS property is used to change the background color?", "background", "bgcolor", "color-background", "background-color", "D"],
    ["Which property is used to create space between the element's border and its content?", "margin", "padding", "border-spacing", "gap", "B"],
    ["Which CSS property is used to set the font family?", "typeface", "text-font", "font-family", "font-name", "C"],
    ["What does the `box-sizing: border-box;` property do?", "Excludes padding and border from the element's total width and height", "Changes the shape of the box", "Includes padding and border in the element's total width and height", "Adds a border around the box", "C"],
    ["How do you set a background image in CSS?", "image: url('image.jpg');", "background-image: url('image.jpg');", "background: url('image.jpg');", "bg-image: url('image.jpg');", "B"],
    ["Which pseudo-class is used to select an element that has been clicked (activated) by the user?", ":focus", ":visited", ":active", ":hover", "C"],
    ["What is the property for making text transparent?", "transparent", "visibility", "alpha", "opacity", "D"],
    ["Which CSS property defines the type of cursor to be displayed?", "pointer", "icon", "mouse", "cursor", "D"],
    ["Which CSS property specifies the duration of a transition effect?", "duration", "transition-duration", "animation-duration", "transition-delay", "B"],
    ["What does `float: left;` do?", "Aligns text to the left", "Moves the element to the left margin", "Floats an element to the left of its container", "Clears floats on the left side", "C"],
    ["Which property sets the background size?", "bg-size", "background-width", "size", "background-size", "D"],
    ["What is the CSS property for adjusting the space between words?", "letter-spacing", "line-spacing", "text-spacing", "word-spacing", "D"],
    ["Which property is used to specify a different style for the first line of a text?", "::initial-line", ":first-line", "::first-line", "first-line", "C"],
    ["Which CSS selector selects the direct child of an element?", "~", " ", "+", ">", "D"],
    ["Which CSS property defines the minimum width of an element?", "minimum-width", "width-min", "min-size", "min-width", "D"],
    ["Which keyword is used to declare a variable in JavaScript that can be reassigned?", "const", "int", "var", "let", "D"],
    ["What is the correct way to write a JavaScript array?", "const colors = {'red', 'green', 'blue'}", "const colors = (red, green, blue)", "const colors = ['red', 'green', 'blue']", "const colors = 'red', 'green', 'blue'", "C"],
    ["How does a FOR loop start?", "for (i <= 5; i++)", "for (let i = 0; i < 5; i++)", "for (i from 0 to 5)", "for (i = 0; i < 5)", "B"],
    ["Which method is used to add new elements to the beginning of an array?", "addFirst()", "prepend()", "unshift()", "push()", "C"],
    ["What is the result of `10 % 3` in JavaScript?", "3", "Error", "0", "1", "D"],
    ["How do you access the value of an object property?", "object->property", "object['property']", "object.property", "Both A and B", "D"],
    ["Which built-in method returns the length of a string?", "count", "len", "size", "length", "D"],
    ["Which built-in method returns the value of a string converted to lowercase?", "lowerCase()", "toLower()", "toLowerCase()", "convertToLower()", "C"],
    ["How do you generate a random number between 0 (inclusive) and 1 (exclusive)?", "Random()", "Math.rand()", "Math.random()", "Math.random(1)", "C"],
    ["Which JavaScript event occurs when an HTML element changes?", "onupdate", "onmodify", "oninput", "onchange", "D"],
    ["Which keyword defines a block-scoped local variable?", "var", "static", "let", "const", "C"],
    ["Which JavaScript operator for exponentiation?", "^", "*", "**", "pow()", "C"],
    ["Which comparison operator means 'not equal to' (loose equality)?", "not equal", "!=", "<>", "!==", "B"],
    ["Which method stops the propagation of an event?", "event.stopBubble()", "event.haltPropagation()", "event.stopPropagation()", "event.preventBubble()", "C"],
    ["How do you convert a JSON string to a JavaScript object?", "JSON.stringify()", "JSON.from_string()", "JSON.toObject()", "JSON.parse()", "D"],
    ["How do you check if a variable is `NaN`?", "isNotANumber()", "isNaN()", "Number.isNaN()", "Both A and B", "D"],
    ["Which method is used to repeatedly execute a function with a fixed delay?", "loop()", "repeat()", "setInterval()", "setTimeout()", "C"],
    ["What is the purpose of the `try...catch` statement?", "To define functions", "To create loops", "To handle errors", "To declare variables", "C"],
    ["What is the result of `typeof undefined` in JavaScript?", "object", "null", "string", "undefined", "D"],
    ["Which HTML tag is used for the largest heading?", "<head>", "<h6>", "<heading>", "<h1>", "D"],
    ["Which tag is used to define an unordered list?", "<dl>", "<ul>", "<ol>", "<li>", "B"],
    ["Which HTML attribute is used to define inline styles?", "id", "class", "style", "font", "C"],
    ["What is the purpose of the `<form>` tag?", "To define a group of fields", "To submit data to a server", "To create a form for user input", "All of the above", "C"],
    ["Which HTML tag defines a table header?", "<td>", "<tr>", "<thead>", "<th>", "D"],
    ["What is the HTML element for defining emphasized text?", "<i>", "<highlight>", "<em>", "<italic>", "C"],
    ["Which doctype is correct for HTML5?", "<!DOCTYPE html PUBLIC>", "<!DOCTYPE HTML PUBLIC>", "<!DOCTYPE HTML5>", "<!DOCTYPE html>", "D"],
    ["Which attribute specifies a unique ID for an HTML element?", "class", "uid", "id", "name", "C"],
    ["What is the default value of the 'type' attribute for an `<input>` tag if not specified?", "button", "submit", "checkbox", "text", "D"],
    ["To create a dropdown list, which HTML tag do you use?", "<option>", "<dropdown>", "<select>", "<list>", "C"],
    ["Which HTML tag is used to embed video content?", "<play>", "<movie>", "<video>", "<media>", "C"],
    ["Which HTML tag is used to add a favicon?", "<favicon src='favicon.ico'>", "<meta name='icon' content='favicon.ico'>", "<image rel='shortcut icon' href='favicon.ico'>", "<link rel='icon' href='favicon.ico'>", "D"],
    ["What does the `<details>` tag do?", "Displays detailed information", "Sets the detail level of an element", "Creates an expandable section of content", "Defines a list of details", "C"],
    ["Which HTML tag is used for indicating sample output from a computer program?", "<program>", "<output>", "<samp>", "<result>", "C"],
    ["What is the primary purpose of the `<!DOCTYPE html>` declaration?", "To embed a JavaScript script", "To declare the document type and HTML version", "To define a new HTML element", "To link to an external CSS stylesheet", "B"],
    ["Which HTML tag defines a generic block-level container?", "<span>", "<section>", "<article>", "<div>", "D"],
    ["What does the `target='_blank'` attribute do in an `<a>` tag?", "Opens the linked document in a parent frame", "Opens the linked document in the same frame", "Opens the linked document in the full body of the window", "Opens the linked document in a new window/tab", "D"],
    ["What does the `colspan` attribute do in an HTML table?", "Specifies the number of columns in the table", "Specifies the number of rows a cell should span", "Specifies the column width", "Specifies the number of columns a cell should span", "D"],
    ["How do you select an element with id 'header' in CSS?", "*header", "header", ".header", "#header", "D"],
    ["Which CSS property is used to change the text color?", "foreground-color", "text-color", "font-color", "color", "D"],
    ["Which CSS property controls the spacing between lines of text?", "height", "text-spacing", "line-height", "line-spacing", "C"],
    ["Which property is used to create space outside the element's border?", "padding", "outer-space", "margin", "border-spacing", "C"],
    ["What is the CSS property for italicizing text?", "italicize: text;", "font-italic: true;", "text-style: italic;", "font-style: italic;", "D"],
    ["What is the default value of the `position` property?", "absolute", "fixed", "static", "relative", "C"],
    ["Which CSS property sets the stacking order of positioned elements?", "depth", "layer", "stack-order", "z-index", "D"],
    ["Which CSS unit is relative to the font-size of the element?", "rem", "px", "%", "em", "D"],
    ["Which CSS property is used to make text uppercase?", "text-case: upper;", "font-transform: uppercase;", "transform: uppercase;", "text-transform: uppercase;", "D"],
    ["Which pseudo-class is used to select an element when the user mouses over it?", ":focus", ":link", ":active", ":hover", "D"],
    ["Which CSS property defines the number of columns in a multi-column layout?", "columns", "num-columns", "col-count", "column-count", "D"],
    ["Which CSS property applies a 2D or 3D transformation to an element?", "translate", "animation", "transition", "transform", "D"],
    ["Which CSS property specifies a delay for the transition effect?", "animation-delay", "delay", "transition-duration", "transition-delay", "D"],
    ["What does `clear: both;` do?", "Removes all floats", "Sets the clarity of an element", "Clears all styling", "Prevents elements from floating on both sides", "D"],
    ["Which property is used for controlling the appearance of lists?", "list-type", "item-style", "marker-style", "list-style", "D"],
    ["What is the CSS property for adjusting the space between characters?", "char-spacing", "text-spacing", "word-spacing", "letter-spacing", "D"],
    ["Which property is used to specify a different style for the first letter of a text?", "first-letter", "::initial-letter", "::first-letter", ":first-letter", "C"],
    ["What does `media` query in CSS allow you to do?", "Define media types", "Embed media files", "Apply styles based on device characteristics", "Change media playback settings", "C"],
    ["Which CSS selector selects all elements?", "all", "#all", "element", "*", "D"],
    ["Which CSS selector selects adjacent sibling elements?", ">", " ", "~", "+", "C"],
    ["Which CSS property is used to set the type of a list item marker?", "list-marker", "marker-type", "list-style-type", "list-style", "C"],
    ["What is `flex-direction` used for in Flexbox?", "To justify content", "To align items along the cross axis", "To set the main axis direction", "To wrap flex items", "C"],
    ["Which CSS value for `display` makes an element generate a block box that flows with its content, but allows other elements to flow around it?", "block", "inline", "float", "inline-block", "D"],
    ["Which CSS property defines the maximum width of an element?", "width-max", "max-size", "max-width", "maximum-width", "C"],
    ["What does `border-radius` property do?", "Sets the width of the border", "Changes the border style", "Adds a border around an element", "Rounds the corners of an element's border", "D"],
    ["Which keyword is used to declare a constant variable in JavaScript?", "final", "var", "let", "const", "D"],
    ["Which operator is used for loose equality (value only)?", "=", "===", "!=", "==", "D"],
    ["How do you comment out multiple lines in JavaScript?", "## This is a multi-line comment ##", "// This is a multi-line comment", "", "/* This is a multi-line comment */", "D"],
    ["Which method is used to remove the first element from an array?", "splice()", "pop()", "removeFirst()", "shift()", "D"],
    ["Which built-in method returns the value of a string converted to lowercase?", "toLowerCase()", "lowerCase()", "toLower()", "convertToLower()", "A"],
    ["How do you convert a string to an integer in JavaScript?", "parseFloat()", "Number()", "parseInt()", "Both B and C", "D"],
    ["Which JavaScript event occurs when the user clicks on an HTML element?", "onselect", "onmouseover", "onclick", "onchange", "C"],
    ["Which keyword defines a function-scoped or globally-scoped variable?", "const", "static", "let", "var", "D"],
    ["Which comparison operator means 'not equal to' (strict equality)?", "<>", "not strict equal", "!==", "!=", "C"],
    ["What is the correct way to write an object in JavaScript?", "const person = ('John', 'Doe')", "const person = ['John', 'Doe']", "const person = {firstName: 'John', lastName: 'Doe'}", "const person = 'John'; 'Doe'", "C"],
    ["Which method prevents the default action of an event?", "event.cancel()", "event.stopDefault()", "event.stopEvent()", "event.preventDefault()", "D"],
    ["How do you clear a `setInterval` timer?", "stopInterval()", "clearTimeout()", "resetInterval()", "clearInterval()", "D"],
    ["Which built-in method joins all elements of an array into a string?", "concat()", "combine()", "toString()", "join()", "D"],
    ["What does HTML stand for?", "Hyper Tool Multi Language", "Home Tool Markup Language", "Hyperlinks and Text Marking Language", "Hyper Text Markup Language", "D"],
    ["Which HTML tag is used to define a paragraph?", "<br>", "<para>", "<text>", "<p>", "D"],
    ["Which HTML element is used to specify a header for a document or section?", "<hgroup>", "<head>", "<top>", "<header>", "D"],
    ["Which HTML element is used for long, block-level quotes?", "<q>", "<quote>", "<cite>", "<blockquote>", "D"],
    ["How do you create a button in HTML?", "<input type='button' value='Click Me'>", "<btn>Click Me</btn>", "<button>Click Me</button>", "Both A and C", "D"],
    ["Which HTML tag defines a table row?", "<td>", "<table>", "<th>", "<tr>", "D"],
    ["Which HTML element specifies preformatted text?", "<p>", "<text>", "<format>", "<pre>", "D"],
    ["Which HTML element is the root element of an HTML page?", "<body>", "<!DOCTYPE>", "<head>", "<html>", "D"],
    ["Which attribute specifies one or more classnames for an HTML element?", "id", "name", "style", "class", "D"],
    ["Which HTML tag is used to embed audio content?", "<mp3>", "<sound>", "<play>", "<audio>", "D"],
    ["Which HTML tag is used to define content aside from the content it is placed in?", "<section>", "<sidebar>", "<extra>", "<aside>", "D"],
    ["What does the `<summary>` tag do?", "Summarizes content", "Highlights key points", "Creates a summary table", "Provides a visible heading for a `<details>` element", "D"],
    ["Which HTML tag is used for marking up programming code?", "<pre>", "<var>", "<kbd>", "<code>", "D"],
    ["Which HTML tag is used for user input (keyboard)?", "<input>", "<key>", "<user>", "<kbd>", "D"],
    ["Which HTML tag is used for defining a variable?", "<data>", "<val>", "<variable>", "<var>", "D"],
    ["Which HTML element is typically placed inside the `<head>` section?", "<body>", "<h1>", "<script>", "<meta>", "D"],
    ["Which HTML tag defines a generic inline container?", "<div>", "<p>", "<a>", "<span>", "D"],
    ["Which HTML tag is used to define a caption for a `<table>`?", "<figcaption>", "<title>", "<header>", "<caption>", "D"],
    ["How do you select elements with class 'item' in CSS?", "#item", "$item", "item", ".item", "D"],
    ["Which CSS property is used to change the text color?", "text-color", "font-color", "foreground-color", "color", "D"],
    ["What is the CSS property for italicizing text?", "text-style: italic;", "font-italic: true;", "italicize: text;", "font-style: italic;", "D"],
    ["What is the default value of the `position` property?", "relative", "absolute", "fixed", "static", "D"],
    ["Which CSS property sets the stacking order of positioned elements?", "stack-order", "layer", "depth", "z-index", "D"],
    ["Which CSS property is used to make text uppercase?", "font-transform: uppercase;", "text-case: upper;", "transform: uppercase;", "text-transform: uppercase;", "D"],
    ["Which pseudo-class is used to select an element that has been clicked (activated) by the user?", ":hover", ":focus", ":visited", ":active", "D"],
    ["What is the property for making text transparent?", "alpha", "transparent", "visibility", "opacity", "D"],
    ["What is the CSS property for adjusting the space between characters?", "word-spacing", "char-spacing", "text-spacing", "letter-spacing", "D"],
    ["Which property is used to specify a different style for the first letter of a text?", ":first-letter", "first-letter", "::initial-letter", "::first-letter", "D"],
    ["What does `media` query in CSS allow you to do?", "Embed media files", "Change media playback settings", "Define media types", "Apply styles based on device characteristics", "D"],
    ["Which CSS selector selects the direct child of an element?", "+", "~", " ", ">", "D"],
    ["Which CSS selector selects adjacent sibling elements?", ">", " ", "+", "~", "D"],
    ["Which CSS property is used to set the type of a list item marker?", "list-marker", "marker-type", "list-style", "list-style-type", "D"],
    ["What is `flex-direction` used for in Flexbox?", "To align items along the cross axis", "To wrap flex items", "To justify content", "To set the main axis direction", "D"],
    ["Which CSS value for `display` makes an element generate a block box that flows with its content, but allows other elements to flow around it?", "block", "inline", "float", "inline-block", "D"],
    ["Which CSS property defines the minimum width of an element?", "width-min", "minimum-width", "min-size", "min-width", "D"],
    ["Which CSS property defines the maximum width of an element?", "width-max", "maximum-width", "max-size", "max-width", "D"],
    ["What does `border-radius` property do?", "Adds a border around an element", "Sets the width of the border", "Changes the border style", "Rounds the corners of an element's border", "D"],
    ["What is the output of `2 + '2'` in JavaScript?", "4", "NaN", "Error", "'22'", "D"],
    ["How does a FOR loop start?", "for (i = 0; i < 5)", "for (i <= 5; i++)", "for (i from 0 to 5)", "for (let i = 0; i < 5; i++)", "D"],
    ["Which operator is used for strict equality (value and type)?", "==", "=", "!=", "===", "D"],
    ["Which operator is used for loose equality (value only)?", "===", "=", "!=", "==", "D"],
    ["How do you comment out a single line in JavaScript?", "/* This is a comment */", "# This is a comment", "", "// This is a comment", "D"],
    ["How do you comment out multiple lines in JavaScript?", "// This is a multi-line comment", "", "## This is a multi-line comment ##", "/* This is a multi-line comment */", "D"],
    ["What is the JavaScript syntax for printing 'Hello World' in the console?", "print('Hello World');", "log.console('Hello World');", "System.out.println('Hello World');", "console.log('Hello World');", "D"],
    ["Which method is used to remove the last element from an array?", "shift()", "splice()", "removeLast()", "pop()", "D"],
    ["Which method is used to add new elements to the end of an array?", "unshift()", "add()", "append()", "push()", "D"],
    ["Which method is used to remove the first element from an array?", "pop()", "splice()", "removeFirst()", "shift()", "D"],
    ["Which method is used to add new elements to the beginning of an array?", "push()", "addFirst()", "prepend()", "unshift()", "D"],
    ["What is the result of `10 % 3` in JavaScript?", "0", "3", "Error", "1", "D"],
    ["What is the correct syntax for an arrow function with no parameters?", "function() {}", "=> {}", "() => function{}", "() => {}", "D"],
    ["How do you access the value of an object property?", "object->property", "object.property", "object['property']", "Both A and B", "D"],
    ["Which built-in method returns the length of a string?", "size", "count", "len", "length", "D"],
    ["Which built-in method returns the value of a string converted to uppercase?", "upperCase()", "toUpper()", "convertToUpper()", "toUpperCase()", "D"],
    ["How do you convert a string to an integer in JavaScript?", "parseInt()", "Number()", "toFloat()", "Both A and B", "D"],
    ["How do you generate a random number between 0 (inclusive) and 1 (exclusive)?", "Math.random(1)", "Random()", "Math.rand()", "Math.random()", "D"],
    ["Which JavaScript event occurs when the user clicks on an HTML element?", "onmouseover", "onchange", "onselect", "onclick", "D"],
    ["Which JavaScript event occurs when an HTML element changes?", "oninput", "onmodify", "onupdate", "onchange", "D"],
    ["Which JavaScript method is used to select an HTML element by its ID?", "document.querySelector()", "document.getElementsByTagName()", "document.getById()", "document.getElementById()", "D"],
    ["Which JavaScript method is used to change the content of an HTML element?", "innerHTML", "textContent", "innerText", "All of the above", "D"],
    ["Which keyword defines a block-scoped local variable?", "var", "const", "static", "let", "D"],
    ["Which keyword defines a function-scoped or globally-scoped variable?", "let", "const", "static", "var", "D"],
    ["What is the JavaScript operator for exponentiation?", "^", "pow()", "*", "**", "D"],
    ["Which comparison operator means 'not equal to' (loose equality)?", "!==", "<>", "not equal", "!=", "D"],
    ["Which comparison operator means 'not equal to' (strict equality)?", "!=", "<>", "not strict equal", "!==", "D"],
    ["What is the correct way to write an object in JavaScript?", "const person = ['John', 'Doe']", "const person = ('John', 'Doe')", "const person = 'John'; 'Doe'", "const person = {firstName: 'John', lastName: 'Doe'}", "D"],
    ["Which method prevents the default action of an event?", "event.stopDefault()", "event.cancel()", "event.stopEvent()", "event.preventDefault()", "D"],
    ["Which method stops the propagation of an event?", "event.stopBubble()", "event.preventBubble()", "event.haltPropagation()", "event.stopPropagation()", "D"],
    ["How do you convert an object to a JSON string?", "JSON.parse()", "JSON.toText()", "object.toJSON()", "JSON.stringify()", "D"],
    ["How do you convert a JSON string to a JavaScript object?", "JSON.stringify()", "JSON.toObject()", "JSON.fromString()", "JSON.parse()", "D"],
    ["What is `NaN` in JavaScript?", "Null and Null", "No access", "New attribute Name", "Not-a-Number", "D"],
    ["How do you check if a variable is `NaN`?", "isNaN()", "Number.isNaN()", "isNotANumber()", "Both A and B", "D"],
    ["Which method is used to execute a function after a specified delay?", "setInterval()", "delay()", "wait()", "setTimeout()", "D"],
    ["Which method is used to repeatedly execute a function with a fixed delay?", "setTimeout()", "repeat()", "loop()", "setInterval()", "D"],
    ["How do you clear a `setTimeout` timer?", "clearInterval()", "stopTimeout()", "resetTimeout()", "clearTimeout()", "D"],
    ["How do you clear a `setInterval` timer?", "clearTimeout()", "stopInterval()", "resetInterval()", "clearInterval()", "D"],
    ["What is the purpose of the `try...catch` statement?", "To create loops", "To define functions", "To declare variables", "To handle errors", "D"],
    ["Which built-in method sorts the elements of an array?", "orderBy()", "arrange()", "order()", "sort()", "D"],
    ["Which built-in method joins all elements of an array into a string?", "concat()", "toString()", "combine()", "join()", "D"],
    ["How do you get the number of elements in an array?", "array.size", "array.count", "array.numberOfElements", "array.length", "D"],
    ["What is the result of `typeof null` in JavaScript?", "null", "undefined", "number", "object", "D"],
    ["What is the result of `typeof undefined` in JavaScript?", "null", "object", "string", "undefined", "D"]
];
let selectedq = [];
let selectedqindex = [];
let allButtons = document.querySelectorAll(".question-btn");
function shuffle() {

    // Create a copy of the full question list
    let shuffled = [...questions];

    // Randomly shuffle it
    shuffled.sort(() => Math.random() - 0.5);

    // Take first 25 questions
    selectedq = shuffled.slice(0, 25);

    // Store their original indices (if needed)
    selectedqindex = selectedq.map(q => questions.indexOf(q));
}
shuffle();
let rstbtn = document.querySelector("#rst-btn");

function reset() {
    shuffle();
    index = 0;
    userAnswers = Array(25).fill(null);
    userAnswersnum = Array(25).fill(null);
    updateQuestionDisplay();
    if (winoverlay.style.display == "flex") {
        winoverlay.style.display = "none";
    }
    for (let i = 0; i < 25; i++) {
        allButtons[i].style.backgroundColor = "#749BC2";
        allButtons[i].style.color = "white";
    }
    buttoncolorchange();
}
rstbtn.addEventListener("click", reset);

let newgame = document.querySelector("#newbtn");
newgame.addEventListener("click", reset);
let q = document.querySelector("#question");
let options = document.querySelectorAll(".option-indi");
let index = 0;

let radioInputs = document.querySelectorAll('input[name="options"]');
let userAnswers = Array(25).fill(null);
let userAnswersnum = Array(25).fill(null);

function updateQuestionDisplay() {
    q.textContent = selectedq[index][0];
    options[0].textContent = selectedq[index][1];
    options[1].textContent = selectedq[index][2];
    options[2].textContent = selectedq[index][3];
    options[3].textContent = selectedq[index][4];

    clearSelection(); // Clear existing radio button selections

    // If an answer was previously selected for this question, check the corresponding radio button
    if (userAnswers[index] !== null) {

        radioInputs[userAnswersnum[index]].checked = true;
    }

    // Update button states
    nxtbtn.disabled = index === 24;
    prevbtn.disabled = index === 0;
}

function clearSelection() {
    radioInputs.forEach(radio => radio.checked = false);
}

let nxtbtn = document.querySelector("#nxt-btn");
let prevbtn = document.querySelector("#prev-btn");
let questionnum = document.querySelector("#question-num");
nxtbtn.addEventListener("click", () => {
    if (index < 24) {
        index++;
        console.log(index + 1);
        questionnum.textContent = "Q"+(index+1)+".";
        updateQuestionDisplay();
        allButtons[index].style.backgroundColor = "white";
        allButtons[index].style.color = "#91C8E4";
    }
});
prevbtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        console.log(index + 1);
        questionnum.textContent = "Q"+(index+1)+".";
        q.textContent = selectedq[index][0];
        updateQuestionDisplay();
        allButtons[index].style.backgroundColor = "white";
        allButtons[index].style.color = "#91C8E4";
    }
});
allButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "white";
        btn.style.color = "#91C8E4";
        index = i;
        console.log(index + 1);
        questionnum.textContent = "Q"+(index+1)+".";
        updateQuestionDisplay();
    });
});

radioInputs.forEach((radio, i) => {
    radio.addEventListener("change", () => {
        userAnswersnum[index] = i;
        if (i == 0) {
            userAnswers[index] = 'A';
        }
        else if (i == 1) {
            userAnswers[index] = 'B';
        }
        else if (i == 2) {
            userAnswers[index] = 'C';
        }
        else {
            userAnswers[index] = 'D';
        }
    });
});

updateQuestionDisplay();
function buttoncolorchange() {
    allButtons[0].style.backgroundColor = "white";
    allButtons[0].style.color = "#91C8E4";
}
buttoncolorchange();
let winoverlay = document.querySelector('.contain');
let wintext = document.querySelector("#win");

let submit = document.querySelector("#sbt-btn");
submit.addEventListener("click", () => {
    let counter = 0;
    for (let i = 0; i < 25; i++) {
        console.log(i, "user = ", userAnswers[i], " real = ", selectedq[i][5]);
        if (userAnswers[i] === selectedq[i][5]) {
            counter++;
        }
    }
    wintext.textContent = `You scored ${counter} out of 25.`;
    winoverlay.style.display = "flex";
    console.log("You Scored", counter,);
});
for (let i = 0; i < 25; i++) {
    console.log(i + 1, (selectedq[i][5]));
}