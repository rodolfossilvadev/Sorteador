function generatenumber() {

    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-e").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);
    alert(result)
}