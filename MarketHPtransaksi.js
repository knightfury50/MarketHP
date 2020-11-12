function buttoncetak () {
    let receipt = document.getElementById("receipt")
    let output = "Detail Belanja : <br>"
    let total = 0
    for (let i = 0 ; i < cart.length ; i++) {
        output += `
        ${i+1}. ${cart[i].nama}  (${cart[i].jumlah}) = ${cart[i].total()} <br>
        `
        total += cart[i].total()
    }
    output += `<br>
    Total belanja : Rp. ${total},00
    `
    receipt.innerHTML = output
    
    let disabled1 = document.body.getElementsByClassName("disabled1")
    let disabled2 = document.body.getElementsByClassName("disabled2")
    for (let item of disabled1) {
        item.disabled = true
    }
    for (let item of disabled2) {
        item.disabled = true
    }
    let uang = document.getElementById("uang")
    let beli = document.getElementById("beli")
    uang.hidden = false
    beli.hidden = false
} 

function buttonbeli () {
    console.log("button berfungsi")
    let uang = document.getElementById("uang")
    let bayar = parseInt(uang.value)
    let total = 0
    for (let item of cart) {
        total += item.total()
    }
    let kembalian = bayar - total
    if (bayar < total) {
        alert("uang anda kurang")
    } else if (isNaN(bayar)) {
        alert("masukkan jumlah uang")
    } else if (kembalian > 0) {
        alert(`terima kasih, kembalian anda ${kembalian}`)
        reset()
    } else {
        alert("terima kasih")
        reset()
    }
    uang.value = ""
}

function reset() {
    cart = []
    let disabled1 = document.body.getElementsByClassName("disabled1")
    let disabled2 = document.body.getElementsByClassName("disabled2")
    for (let item of disabled1) {
        item.disabled = false
    }
    for (let item of disabled2) {
        item.disabled = false
    }

    let cetak = document.getElementById("cetak")
    cetak.disabled = true
    
    let receipt = document.getElementById("receipt")
    receipt.textContent = "Receipt :"

    let beli = document.getElementById("beli")
    uang.hidden = true
    beli.hidden = true
    
    lihatproduk()
    lihatcart()
}