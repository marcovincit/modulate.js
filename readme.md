# 🌈 Modulate.js

Use modulate.js to take any range of values and transform it into any other, in order to create animations based on events.

<br>

## Syntax

```js
modulate(input, [inicial, final], [inicial, final], true)
```
<br>

## Parameters

**1.** **Input Value**

This is the reference value. Replace the variable *input* to a dynamic value, such as *window scroll*, input range, *cursor position*, etc.

```js
input
```

**2. Input Range**

Set the initial and the final values on the first array. This values ranges are based on the input value in which the user will interact with.

```js
[inicial, final]
```

**3. Output Range**

Set the initial and final values to generate your modulated result.

```js
[inicial, final]
```

**4. Limit**

Define if the modulate will or not occur. Set to *true* or *false*. The default value is *true*.

```js
true
```

<br>

## Examples

```js
const slider = document.getElementById("slider")
const circle = document.getElementById("circle")

slider.oninput = () => {
    circle.style.borderRadius = `${modulate(slider.value, [0, 100], [0, 50], true)}`
}
```

[Show example](https://s.codepen.io/marcovincit/debug/EBEdWE/LQAExKzKnYdr)

<br>

## Reference links

[https://medium.com/the-school-of-do/framer-cheat-sheets-utils-modulate-b88e359fdcc6](https://medium.com/the-school-of-do/framer-cheat-sheets-utils-modulate-b88e359fdcc6)

[https://github.com/processing/p5.js/blob/master/src/math/calculation.js](https://github.com/processing/p5.js/blob/master/src/math/calculation.js)

<br>

## Contributors

[@giovanayahiro](https://github.com/giovanayahiro) 👩🏻‍💻
[@koz](https://github.com/koz) 👨🏾‍💻

[@marcioshiz](https://github.com/marcioshiz) 👨🏾‍💻