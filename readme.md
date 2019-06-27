# How to use

```js
modulate({value: valueToModulate,  rangeA: [0, 250], rangeB: [10, 450], limit: true})
```

<br>

## Value

**(value: valueToModulate)**
<br>
This is the reference value. You can use dynamic values like window scroll, cursor position, etc.

<br>

## Range A

**(rangeA: [0, 250])**
<br>
Here you need to define the range based on the dynamic *value*, declaring the initial and final values.

<br>

## Range B

**(rangeB: [10, 450])**
<br>
Here you need to define the range that you can change based on the range B, declaring the initial and final values.


<br>

## Explaining

In this case, when the **value**  is **0** the **result** is **10**, when the **value** is **250** the **result** is **450**.


<br>

## Limit

**(limit: true)**
<br>
Here you can use a boolean value, if you use false, the *result* don't stop to calculate, but gonna keeping creating the sequence after then **450**.

You can or not define the limit, the default value is true.
