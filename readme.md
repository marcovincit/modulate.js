# Use

```js
$(window).on('scroll', function () {
    var st = $(this).scrollTop();

    var elemento = $('.elemento');

    elemento.css({
        left: modulate(st, [0, 250], [0, 450], true),
        opacity: modulate(st, [0, $(window).height()], [1, 0], true)
    });
});

```

## Dicas

*(st)*
O valor de referencia. Nesse caso o scrollTop da janela que vai mudando enquanto vc scrolla.
___

*([0, 250])*
Aqui ele pega o valor de referencia e diz que de 0 a 250 (do scroll nesse caso) vai modular o próximo grupo de números, que é
___

*([0, 450])*
Aqui é o valor que vc quer mudar no elemento. No nosso exemplo, o left vai sair de 0 pra 450px quando o scroll passar de 0 para 250px.
___

*(true)*
Ele limita até 450px, se deixar nulo ou falso, ele ultrapassa os 450px, criando um parallax.
