function generatenumber() {

    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-e").value)

    if (min >= max) {
        alert("O valor mínimo tem que ser maior que o valor máximo")
    } else {

        const result = Math.floor(Math.random() * (max - min + 1) + min);
        alert(result)
    }
}