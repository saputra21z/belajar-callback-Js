// untuk menampilkan data 
// console.log('belajar javascript')

// sudah tidak ada  semicolon

/**
 * 1. Variabel
 * 
 * cara penulisan variable di javascript itu ada 3 cara
 * -let 
 * -var
 * -const
 */

//  let belajar1 = 'let'

//  console.log(belajar1)
// //  let belajar = 123
// //  let belajar = true
// //  let belajar = 12.4 //fload


// var belajar = 'var'

// console.log(belajar)

// const belajar2 = 'const'
// console.log(belajar2)

/*  CONST
variable const adalah variable yang tidak bisa di rubah type datanya dan isinya kecuali object atau array ,
dan harus sudah di definisikan sejak awal value nya

SIFAT-sIFAT const
-harus di definisikan di awal
-bisa menampung semua tipe data
-datanya tidak bisa di rubah secara sepontant
*/

// const variableConst = {}

// variableConst['santri'] = 'Hendy'


// console.log(variableConst['santri']);

// var variableConst2
// console.log(variableConst2)

/** 
 * Sifat variable VAR
 * -tidak harus di definisikan di awal
 * -bisa menampung semua tipe data
 * - datanya bisa di rubah secar sepontan
 * scope nya lebih luas
*/

// var belajarVar = 1234

//  belajarVar = 'budi'

// console.log(belajarVar);

/** 
 * SIFAT VARIABLE LET
 * tidak harus di definisikan di awal
 * -bisa menampung semua tipe data
 * - datanya bisa di rubah secar sepontan
 * -scope// tidak dapat di pindah nya lebih sempit
*/

// let belajarlet = 1234

//  belajarlet = 'asd'

// console.log(belajarlet);

//SCOPE


// // function

// //car 1
// function belajar() {
//     console.log('belajar')
// }

// // cara 2 (arrow function)
// const belajar2 = function() {
//     console.log('belajar2')

// }

// const belajar3 = () => {
//     console.log('belajar3')

// }

// belajar()
// belajar2()
// belajar3()

// LOOPING
// di dalam js tidak ada while

// for (let i= 0; i < 10; i++) {
//     console.log(i)
    
// }


// Callback
// arrow function
// const belajarCallback = callback => {
//     callback()
// }

// belajarCallback(() => {
//     console.log('belajar calback')
// })


// const MenggunakanCallback = (hendy,callback) => {
//     hendy(callback)
// }

// MenggunakanCallback( params, 'belajar js' =>{
//     console.log(params)
// })


// const belajarJs = (text,title) => {
//     title(text)
// }

// belajarJs('makan bang', (params) =>{ // params termasuk function
//     console.log(params)
// })  

// function belajarPromise() {
//     setTimeout(function(){
//         console.log('hendy dan asmawi')
//     }, 1000)
// }


// setTimeout(function(){
//     console.log('hendy dan asmawi')
// }, 1000)
// PROMISE (janji)
/**
 * 
 */





//  const belajarJs = (text,title) => {
//     title(text)
// }

// belajarJs('makan bang', (params) =>{ // params termasuk function
//     console.log(params)
// })  

 

// const belajarCallback = callback => {
//     callback()
// }

// belajarCallback(() => {
//     console.log('belajar callback')
// })


// const belajarPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('berhasil')
//     }, 3000)
// })

// belajarPromise.then(function(response) {
//     console.log(response)
// })


// const belajarPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        try {
//            fgfdggdgdfgdgfgfdgdgd
//            resolve('berhasil')
//        } catch (error) {
//            reject(error.message)
//        }
//     }, 3000)
// })

// belajarPromise2.then(function(response) {
//     console.log(response)
// })
// .catch(function(error) {
//     console.error(error)
// })


// Soal Callback

/**
 * buat suatu function denga nama hitung 2 parameter
 * parameter 1 rumusPersegiPanjang
 * parameter 2 rumusKubus
 * di dalam function buat looping 1 sampail 10
 * di dalam looping buat condition 
 * jika looping = ganjil maka  looping di jadikan parameter untuk callback rumusPersegiPanjang
 * jika looping = genap maka looping di jadikan parameter untuk callback rumusKubus
 * untuk rumus persegi panjang sisi panjang nya di tambah 2 angka dari parameter
 * untuk rumus kubus setiap di tambah 2 angka dari parameter
 */

//  function hitung(rumusPersegiPanjang, rumusKubus) {
//      let total = 0
//     for (let i = 1; i <= 10; i++) {
//         if (i == 1 || i ==3 || i ==5 || i ==7 || i == 9) {
//             total = total + rumusPersegiPanjang(i)
//         } else {
//             total = total +  rumusKubus(i)
//         }
//     }
//     console.log(total)
// }

// hitung(function (i) {
//     let panjang = i +2
//     let lebar   = i
//     let hasil   = panjang * lebar
    
//     return hasil
//     // console.log('persegi panjang:',hasil)
// },
// function (i) {
//     let sisi = i +2
//     let hasil = sisi * sisi

//     // console.log('Kubus:',hasil)

//     return hasil
// })


// function belajar() {
//     return '1'
// }

// console.log(belajar())


function rumusPersegiPanjang(panjang, lebar) {
    return panjang * lebar
}

function rumusKubus(sisi) {
    return sisi * sisi
}

function hasil(rumusPersegiPanjang, rumusKubus) {
  let hasilRumusPersegiPanjang =  rumusPersegiPanjang(10, 8)
  let hasilRumusKubus = rumusKubus(10)

  console.log(hasilRumusPersegiPanjang + hasilRumusKubus)
}



// console.log('rumusPersegiPanjang :', rumusPersegiPanjang(10, 8))
// console.log('rumusKubus :', rumusKubus(10))
// console.log('hasil :', hasil(rumusPersegiPanjang(10, 8), rumusKubus(10)));

hasil(function(panjang, lebar) {
    return panjang * lebar
},
function(sisi) {
    return sisi * sisi
})