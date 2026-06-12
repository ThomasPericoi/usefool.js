/*____________________________________ USEFOOL FUNCTIONS ____________________________________*/

/* Functions about random */

function getRandomIntBetween(min, max) {
  min = Math.ceil(Number(min));
  max = Math.floor(Number(max));

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (min > max) {
    var oldMin = min;
    min = max;
    max = oldMin;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatBetween(min, max, decimals) {
  min = Number(min);
  max = Number(max);

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (min > max) {
    var oldMin = min;
    min = max;
    max = oldMin;
  }

  var randomNumber = Math.random() * (max - min) + min;

  return decimals === undefined ? randomNumber : roundNumber(randomNumber, decimals);
}

function getRandomIdFromArray(arrayName) {
  if (!arrayName || arrayName.length === 0) {
    return -1;
  }

  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  var randomId = getRandomIdFromArray(arrayName);

  return randomId === -1 ? undefined : arrayName[randomId];
}

function shuffleArray(arrayName) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  var shuffledArray = arrayName.slice();

  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var randomId = getRandomIntBetween(0, i);
    var temporaryValue = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomId];
    shuffledArray[randomId] = temporaryValue;
  }

  return shuffledArray;
}

function probability(probability, on = 100) {
  probability = Number(probability);
  on = Number(on);

  if (!Number.isFinite(probability) || !Number.isFinite(on) || on <= 0) {
    return false;
  }

  probability = Math.max(0, Math.min(probability, on));

  return Math.random() * on < probability;
}

function getRandomColor() {
  var hexLetters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  var randomColor = "#";

  for (var i = 0; i < 6; i++) {
    randomColor += getRandomValueFromArray(hexLetters);
  }

  return randomColor;
}

/* Functions about arrays */

function uniqueArray(arrayName) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  return arrayName.filter(function (value, id) {
    return arrayName.indexOf(value) === id;
  });
}

function compactArray(arrayName) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  return arrayName.filter(Boolean);
}

function chunkArray(arrayName, size) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  size = Math.max(1, Math.floor(Number(size)) || 1);

  var chunks = [];

  for (var i = 0; i < arrayName.length; i += size) {
    chunks.push(arrayName.slice(i, i + size));
  }

  return chunks;
}

/* Functions about formats */

function isConsonant(x) {
  if (typeof x !== "string") {
    return false;
  }

  return (
    [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "z",
    ].indexOf(x.toLowerCase()) !== -1
  );
}

function isVowel(x) {
  if (typeof x !== "string") {
    return false;
  }

  return ["a", "e", "i", "o", "u", "y"].indexOf(x.toLowerCase()) !== -1;
}

function beautifyNumber(x) {
  return String(x).replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

function clampNumber(number, min, max) {
  number = Number(number);
  min = Number(min);
  max = Number(max);

  if (!Number.isFinite(number) || !Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (min > max) {
    var oldMin = min;
    min = max;
    max = oldMin;
  }

  return Math.min(Math.max(number, min), max);
}

function roundNumber(number, decimals = 0) {
  number = Number(number);
  decimals = Math.max(0, Math.floor(Number(decimals)) || 0);

  if (!Number.isFinite(number)) {
    return NaN;
  }

  var multiplier = Math.pow(10, decimals);

  return Math.round(number * multiplier) / multiplier;
}

function mapNumber(number, inMin, inMax, outMin, outMax) {
  number = Number(number);
  inMin = Number(inMin);
  inMax = Number(inMax);
  outMin = Number(outMin);
  outMax = Number(outMax);

  if (
    !Number.isFinite(number) ||
    !Number.isFinite(inMin) ||
    !Number.isFinite(inMax) ||
    !Number.isFinite(outMin) ||
    !Number.isFinite(outMax) ||
    inMin === inMax
  ) {
    return NaN;
  }

  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function countCharacter(string, character) {
  return String(string).split(character).length - 1;
}

function capitalize(string) {
  string = String(string);

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function slugify(string) {
  return String(string)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function truncate(string, maxLength, suffix = "...") {
  string = String(string);
  maxLength = Math.max(0, Math.floor(Number(maxLength)) || 0);
  suffix = String(suffix);

  if (string.length <= maxLength) {
    return string;
  }

  if (maxLength <= suffix.length) {
    return string.slice(0, maxLength);
  }

  return string.slice(0, maxLength - suffix.length) + suffix;
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"']/g, function (character) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[character];
  });
}

/* Functions about styles */

function isLight(color) {
  var hex = String(color).replace("#", "").trim();

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (letter) {
        return letter + letter;
      })
      .join("");
  }

  if (!/^[0-9a-f]{6}$/i.test(hex)) {
    return false;
  }

  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 155;
}

function transformToBlob(element) {
  if (!element || !element.style) {
    return;
  }

  function randomRadius() {
    var percentage1 = getRandomIntBetween(25, 75);
    var percentage1bis = 100 - percentage1;
    var percentage2 = getRandomIntBetween(25, 75);
    var percentage2bis = 100 - percentage2;
    var percentage3 = getRandomIntBetween(25, 75);
    var percentage3bis = 100 - percentage3;
    var percentage4 = getRandomIntBetween(25, 75);
    var percentage4bis = 100 - percentage4;
    return `${percentage1}% ${percentage1bis}% ${percentage2bis}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage4bis}% ${percentage3bis}%`;
  }

  element.style.borderRadius = randomRadius();
}

function setCssVariable(name, value, element = document.documentElement) {
  if (!element || !element.style) {
    return;
  }

  element.style.setProperty(name, value);
}

function getCssVariable(name, element = document.documentElement) {
  if (!element || !window.getComputedStyle) {
    return "";
  }

  return window.getComputedStyle(element).getPropertyValue(name).trim();
}

/* Functions about clipboard */

async function copyToClipboard(value) {
  var text = String(value);

  if (!navigator.clipboard || !window.isSecureContext) {
    return false;
  }

  await navigator.clipboard.writeText(text);
  console.log('"' + text + '" successfully copied to clipboard!');

  return true;
}

/* Functions about Google and searching */

function searchOnGoogle(query) {
  window.open("https://google.com/search?q=" + encodeURIComponent(query), "newTab");
}

function searchOnGoogleImage(query) {
  window.open(
    "https://google.com/search?q=" + encodeURIComponent(query) + "&tbm=isch",
    "newTab"
  );
}

function openUrl(query) {
  window.open(query, "newTab");
}

function getUrlParameter(name, url = window.location.href) {
  try {
    return new URL(url).searchParams.get(name);
  } catch (error) {
    return null;
  }
}

/* Functions about page title */

function changeTitleOnBlur(string) {
  var originalTitle = document.title;

  window.addEventListener("focus", function () {
    document.title = originalTitle;
  });

  window.addEventListener("blur", function () {
    document.title = string;
  });
}

/* Functions about responsive */

function isMobile() {
  if (navigator.userAgentData && typeof navigator.userAgentData.mobile === "boolean") {
    return navigator.userAgentData.mobile;
  }

  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }

  return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent || "");
}

/* Functions about time */

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, Math.max(0, Number(ms) || 0));
  });
}

function debounce(callback, delay = 250) {
  var timeoutId;

  return function () {
    var context = this;
    var args = arguments;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      callback.apply(context, args);
    }, Math.max(0, Number(delay) || 0));
  };
}

function throttle(callback, delay = 250) {
  var isWaiting = false;
  var lastArgs;
  var lastContext;

  return function () {
    if (isWaiting) {
      lastArgs = arguments;
      lastContext = this;
      return;
    }

    callback.apply(this, arguments);
    isWaiting = true;

    setTimeout(function () {
      isWaiting = false;

      if (lastArgs) {
        callback.apply(lastContext, lastArgs);
        lastArgs = undefined;
        lastContext = undefined;
      }
    }, Math.max(0, Number(delay) || 0));
  };
}
