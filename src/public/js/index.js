

let log = document.getElementById("allProducts")
let logs = JSON.stringify(log.innerHTML)
let gg = JSON.parse(logs)
console.log(typeof(logs))
console.log(JSON.parse(gg))
log.innerHTML = ''

gg.forEach(productss => {
    for (let i = 0; i < gg[0].length; i++) {
        log.innerHTML = log.innerHTML + "Producto: " + productss[i].nombre + "  Stock: " + productss[i].stock + `<br>`
    }
})
