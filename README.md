![Logo of UsefoolJS](https://github.com/ThomasPericoi/UsefoolFunctions/blob/master/usefooljs.svg?raw=true)

# Usefool functions

Usefool is a small collection of plain JavaScript helpers for everyday tasks: random values, arrays, formatting, DOM styling, clipboard actions, browser utilities, and responsive checks.

It is mostly meant as a personal utility file: simple functions, no build step required, no dependency, and no framework assumptions.

## Usage

Include `usefool.js` in a page, then call the helpers directly.

```html
<script src="usefool.js"></script>
<script>
  console.log(getRandomColor());
</script>
```

Use `usefool.min.js` if you want the minified version.

## Random helpers

### `getRandomIntBetween(min, max)`

Returns a random integer between `min` and `max`, including both limits. If `min` is greater than `max`, the function swaps them.

```js
getRandomIntBetween(1, 6);
// 4
```

### `getRandomFloatBetween(min, max, decimals)`

Returns a random floating-point number between `min` and `max`. If `decimals` is provided, the result is rounded to that number of decimal places.

```js
getRandomFloatBetween(1, 2, 2);
// 1.37
```

### `getRandomIdFromArray(arrayName)`

Returns a random valid index from an array-like value. Returns `-1` when the input is missing or empty.

```js
getRandomIdFromArray(["red", "green", "blue"]);
// 2

getRandomIdFromArray([]);
// -1
```

### `getRandomValueFromArray(arrayName)`

Returns a random value from an array-like value. Returns `undefined` when the input is missing or empty.

```js
getRandomValueFromArray(["red", "green", "blue"]);
// "green"
```

### `shuffleArray(arrayName)`

Returns a shuffled copy of an array. The original array is not modified.

```js
const numbers = [1, 2, 3, 4];

shuffleArray(numbers);
// [3, 1, 4, 2]

numbers;
// [1, 2, 3, 4]
```

### `probability(probability, on = 100)`

Returns `true` randomly according to the given probability. By default, `probability` is read as a value out of `100`.

```js
probability(25);
// true roughly 25% of the time

probability(1, 2);
// true roughly 50% of the time
```

### `getRandomColor()`

Returns a random hexadecimal color string.

```js
getRandomColor();
// "#3ecdef"
```

## Array helpers

### `uniqueArray(arrayName)`

Returns a new array with duplicate primitive values removed.

```js
uniqueArray(["a", "a", "b", "c", "c"]);
// ["a", "b", "c"]
```

### `compactArray(arrayName)`

Returns a new array without falsy values such as `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

```js
compactArray([0, "hello", false, 42, "", null]);
// ["hello", 42]
```

### `chunkArray(arrayName, size)`

Splits an array into smaller arrays of the given size.

```js
chunkArray([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

## Format helpers

### `isConsonant(x)`

Returns `true` when `x` is one of the supported consonant letters.

```js
isConsonant("b");
// true

isConsonant("a");
// false
```

### `isVowel(x)`

Returns `true` when `x` is one of the supported vowel letters: `a`, `e`, `i`, `o`, `u`, or `y`.

```js
isVowel("u");
// true

isVowel("z");
// false
```

### `beautifyNumber(x)`

Formats a number-like value with spaces between thousands.

```js
beautifyNumber(10000000);
// "10 000 000"
```

### `clampNumber(number, min, max)`

Keeps a number inside a range. If the number is lower than `min`, it returns `min`; if it is higher than `max`, it returns `max`.

```js
clampNumber(120, 0, 100);
// 100

clampNumber(-10, 0, 100);
// 0
```

### `roundNumber(number, decimals = 0)`

Rounds a number to a given number of decimal places.

```js
roundNumber(3.14159, 2);
// 3.14

roundNumber(3.7);
// 4
```

### `mapNumber(number, inMin, inMax, outMin, outMax)`

Maps a number from one range to another.

```js
mapNumber(5, 0, 10, 0, 100);
// 50
```

### `countCharacter(string, character)`

Counts how many times `character` appears in `string`.

```js
countCharacter("banana", "a");
// 3
```

### `capitalize(string)`

Uppercases the first character of a string and keeps the rest unchanged.

```js
capitalize("hello");
// "Hello"
```

### `slugify(string)`

Converts a string into a lowercase URL-friendly slug. Accents are removed, spaces and punctuation become hyphens.

```js
slugify("Hello, cafe!");
// "hello-cafe"
```

### `truncate(string, maxLength, suffix = "...")`

Shortens a string to a maximum length. If truncation happens, the suffix is added when there is enough room.

```js
truncate("Too much text", 8);
// "Too m..."

truncate("Too much text", 8, "!");
// "Too muc!"
```

### `escapeHtml(string)`

Escapes HTML-sensitive characters so a string can be displayed as text instead of being interpreted as markup.

```js
escapeHtml('<button class="danger">Delete</button>');
// "&lt;button class=&quot;danger&quot;&gt;Delete&lt;/button&gt;"
```

## Style helpers

### `isLight(color)`

Returns `true` when a hexadecimal color is visually light. Supports both short and long hex formats.

```js
isLight("#ffffff");
// true

isLight("#111");
// false
```

### `transformToBlob(element)`

Applies a random organic `border-radius` value to an element.

```js
const card = document.querySelector(".card");

transformToBlob(card);
// card.style.borderRadius is now a random blob-like shape
```

### `setCssVariable(name, value, element = document.documentElement)`

Sets a CSS custom property on an element. By default, it writes to `document.documentElement`, which means the variable is available globally.

```js
setCssVariable("--brand-color", "#3ecdef");
// document.documentElement now has --brand-color set to "#3ecdef"
```

### `getCssVariable(name, element = document.documentElement)`

Reads a CSS custom property from an element and returns the trimmed value.

```js
getCssVariable("--brand-color");
// "#3ecdef"
```

## Clipboard helpers

### `copyToClipboard(value)`

Copies a value to the clipboard using the modern Clipboard API. Returns a promise that resolves to `true` when copying worked, or `false` when the Clipboard API is unavailable.

This requires a secure context, such as HTTPS or localhost.

```js
await copyToClipboard("Hello clipboard");
// true
```

## Browser helpers

### `searchOnGoogle(query)`

Opens a new tab with a Google search for the given query.

```js
searchOnGoogle("useful javascript helpers");
// Opens https://google.com/search?q=useful%20javascript%20helpers
```

### `searchOnGoogleImage(query)`

Opens a new tab with a Google Images search for the given query.

```js
searchOnGoogleImage("blue gradient");
// Opens a Google Images search
```

### `openUrl(query)`

Opens a URL in a new tab.

```js
openUrl("https://example.com");
// Opens https://example.com
```

### `getUrlParameter(name, url = window.location.href)`

Reads a query parameter from a URL. If no URL is provided, it reads from the current page URL.

```js
getUrlParameter("page", "https://example.com/articles?page=2");
// "2"
```

### `changeTitleOnBlur(string)`

Changes the page title when the window loses focus, then restores the original title when the window gets focus again.

```js
changeTitleOnBlur("Come back!");
// The document title changes to "Come back!" when the tab is blurred.
```

### `isMobile()`

Returns `true` when the current browser looks like a mobile or touch-oriented device.

```js
isMobile();
// true or false
```

## Time helpers

### `sleep(ms)`

Returns a promise that resolves after the given number of milliseconds. Useful inside `async` functions.

```js
await sleep(500);
// waits for half a second
```

### `debounce(callback, delay = 250)`

Returns a debounced version of a function. The callback runs only after calls have stopped for the given delay.

```js
const saveSearch = debounce(function (query) {
  console.log(query);
}, 300);

saveSearch("use");
saveSearch("useful");
// Only "useful" is logged after 300ms
```

### `throttle(callback, delay = 250)`

Returns a throttled version of a function. The callback runs immediately, then at most once per delay.

```js
const onScroll = throttle(function () {
  console.log(window.scrollY);
}, 200);

window.addEventListener("scroll", onScroll);
// Logs scroll position at most once every 200ms
```
