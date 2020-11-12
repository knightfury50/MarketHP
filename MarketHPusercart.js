function buttoncart (index) {
    let produk = {...data[index]} 
    let indexcart

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].nama === produk.nama) {
            indexcart = i
        }
    }

    if (data[index].stok === 0) {
        alert("stok kosong")
    } else {
        if (indexcart !== undefined) {
            cart[indexcart].jumlah += 1
        } else {
            cart.push(
                new addtocart (
                    cart.length + 1,
                    data[index].nama, 
                    data[index].gambar, 
                    data[index].harga,
                    1
                )
            )  
        }
        data[index].stok -= 1
    }
    let cetak = document.getElementById("cetak")
    if (cetak.disabled === true) {
        cetak.disabled = false
    }
    lihatproduk()
    lihatcart()
}

function lihatcart () {
    let table = document.getElementById("usercart")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ""
    for (let i = 0 ; i < cart.length ; i++) {
        tr += `
                <tr>
                    <td class="center"> ${i+1} </td>
                    <td> ${cart[i].nama} </td>
                    <td class="center"> 
                        <img src="${cart[i].gambar}" width = "60px">
                    </td>
                    <td class="right"> ${cart[i].harga} </td>
                    <td class="right"> ${cart[i].jumlah} </td>
                    <td class="right"> ${cart[i].total()} </td>
                    <td class="center">
                        <button class="disabled2" onclick="buttonhapuscart(${i})"> Hapus </button>
                    </td>
                </tr>
            `
    }
    tbody.innerHTML = tr
}

function buttonhapuscart (index) {
    let indexdata = data.findIndex((item) => item.nama === cart[index].nama)
    
    if (cart[index].jumlah === 1) {
        cart.splice(index, 1)
    } else {
        cart[index].jumlah -= 1
    }
    data[indexdata].stok += 1

    let cetak = document.getElementById("cetak")
    if (cart.length === 0) {
        cetak.disabled = true
    }
    lihatproduk()
    lihatcart()
}