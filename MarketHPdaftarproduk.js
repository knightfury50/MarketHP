function lihatproduk (index) {
    let table = document.getElementById("daftarproduk")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ""
    for (let i=0 ; i<data.length ; i++) {
        if (index===i) {
            tr += `
                <tr>
                    <td></td>
                    <td> <input id="editnama" type="text" value="${data[i].nama}"> </td>
                    <td> <input id="editgambar" type="text" value="${data[i].gambar}"> </td>
                    <td> <input id="editharga" type="number" value="${data[i].harga}"> </td>
                    <td> <input id="editstok" type="number" value="${data[i].stok}"> </td>
                    <td>
                        <button onclick="buttonsimpan(${i})"> Simpan </button>
                        <button onclick="buttonbatal()""> Batal </button>
                    </td>
                <tr>
            `
        } else {
            tr += `
                <tr>
                    <td class="center"> ${i+1} </td> 
                    <td> ${data[i].nama} </td>
                    <td class="center"> 
                        <img src="${data[i].gambar}" width = "60px">
                    </td>
                    <td class="right"> ${data[i].harga} </td>
                    <td class="center"> ${data[i].stok} </td>
                    <td class="center">
                        <button onclick="buttonedit(${i})"> Edit </button>
                        <button onclick="buttonhapus(${i})"> Hapus </button>
                        <br><br>
                        <button class="disabled1" onclick="buttoncart(${i})"> Add to Cart </button>
                    </td>
                </tr>
            `
        } 
    }
    tbody.innerHTML = tr
}
lihatproduk()

function buttontambah() {
    event.preventDefault()

    let input = document.getElementById("produkbaru")
    let nama =  input["nama"].value
    let gambar = input["gambar"].value
    let harga = input["harga"].value
    let stok = input["stok"].value

    if (nama === "" || gambar === "" || harga === "" || stok === "") {
        alert("input tidak boleh kosong")
    } else if (harga < 0 || stok < 0) {
        alert("input tidak boleh minus")
    } else {
        data.push(new produk(
            data.length+1, 
            input["nama"].value, 
            input["gambar"].value, 
            parseInt(input["harga"].value), 
            parseInt(input["stok"].value)
        ))
        lihatproduk()
        input["nama"].value = ""
        input["gambar"].value = ""
        input["harga"].value = ""
        input["stok"].value = ""
    }
}

function buttonhapus (index) {
    data.splice(index, 1)
    lihatproduk()
}

function buttonedit (index) { 
    lihatproduk(index)
}

function buttonsimpan (index) {
    let editnama = document.getElementById("editnama").value
    let editgambar = document.getElementById("editgambar").value
    let editharga = parseInt(document.getElementById("editharga").value)
    let editstok = parseInt(document.getElementById("editstok").value)
    
    if (editharga < 0 || editstok < 0) {
        alert("input tidak boleh minus")
    } else {
        data[index].nama = editnama
        data[index].gambar = editgambar
        data[index].harga = editharga
        data[index].stok = editstok
        lihatproduk()
    }
}

function buttonbatal () {
    lihatproduk()
}

function buttoncari () {
    let input = document.getElementById("cariproduk").value
    let re = new RegExp(`${input}`, 'gi')
    let hasil = []
    for (let i = 0 ; i < data.length ; i++) {
        let hasilre = re.test(data[i].nama)
        if (hasilre) {
            hasil.push(data[i])
        }
    }
    let tbody = document.getElementById("tbodyproduk")
    let tr = ""
    for (let i = 0 ; i < hasil.length ; i++) {
        tr += `
            <tr>
                <td> ${i + 1} </td>
                <td> ${hasil[i].nama} </td>
                <td>
                    <img src="${hasil[i].gambar}" width = "60px">
                </td>
                <td> ${hasil[i].harga} </td>
                <td> ${hasil[i].stok} </td>
                <td></td>
            </tr>
        `
    }
    tbody.innerHTML = tr
}

function buttonsortnama () {
   let option = document.getElementById("sortnama")
   function sortnama (a, b) {
    if (a.nama > b.nama) {
        return option.value === '1' ? 1 : -1
    }
    if (a.nama < b.nama) {
        return option.value === '1' ? -1 : 1
    }
    return 0
    }

    data.sort(sortnama)
    lihatproduk()
}

function buttonsortharga () {
    let option = document.getElementById("sortharga")
    function sortharga1 (a,b) {
        if (a.harga > b.harga) {
            return 1
        }
        if (a.harga < b.harga) {
            return -1
        }
        return 0
    }
    function sortharga2 (a,b) {
        if (a.harga > b.harga) {
            return -1
        }
        if (a.harga < b.harga) {
            return 1
        }
        return 0
    }
    if (option.value === "1") {
        data.sort(sortharga1)
    } else {
        data.sort(sortharga2)
    }
    lihatproduk()
}

