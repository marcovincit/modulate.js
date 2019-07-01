# How to use modulate.js

```js
modulate(input, [0, 250], [10, 450], true)
```

<br>

## Input Value

**input**
<br>
This is the reference value. You can use dynamic values like window scroll, cursor position, etc.

<br>

## Input Range

**[0, 250]**
<br>
Here you need to define the range based on the dynamic **value**, declaring the initial and final values.

<br>

## Output Range

**[10, 450]**
<br>
Here you need to define the range that you can change based on the range B, declaring the initial and final values.


<br>

## Explaining

In this case, when the **value**  is **0** the **result** is **10**, when the **value** is **250** the **result** is **450**.


<br>

## Limit

**true**
<br>
Here you can use a boolean value, if you use false, the *result* don't stop to calculate, but gonna keeping creating the sequence after then **450**.

You can or not define the limit, the default value is true.

<br>

## Reference link

https://medium.com/the-school-of-do/framer-cheat-sheets-utils-modulate-b88e359fdcc6
