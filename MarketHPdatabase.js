let data = [
    { 
        id : 1,
        nama : "Apple iPhone 11 Pro",
        gambar : "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
        harga : 20000000,
        stok  : 20
    },
    { 
        id : 2,
        nama : "Samsung Galaxy Fold",
        gambar : "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-fold.jpg",
        harga : 18000000,
        stok  : 20
    },
    { 
        id : 3,
        nama : "Oppo Reno4 Pro",
        gambar : "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4-pro.jpg",
        harga : 6000000,
        stok  : 20
    },
    { 
        id : 4,
        nama : "Asus ROG Phone 3",
        gambar : "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-3-zs661ks.jpg",
        harga : 10000000,
        stok  : 20
    }
]

let cart = []

class produk {
    constructor(id, nama, gambar, harga, stok) {
        this.id = id,
        this.nama = nama,
        this.gambar = gambar,
        this.harga = harga,
        this.stok = stok
    }
}

class addtocart {
    constructor(id, nama, gambar, harga, jumlah, total) {
        this.id = id,
        this.nama = nama,
        this.gambar = gambar,
        this.harga = harga,
        this.jumlah = jumlah
    }
    total = function () {
        return this.jumlah * this.harga
    }
}