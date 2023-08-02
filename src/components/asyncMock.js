// const products = [
// { 
//     id: "1", 
//     name:"Juguete Perro Puzzle Tornado Nivel 2", 
//     price:26000, 
//     category:"Juguetes", 
//     img:"https://laikapp.s3.amazonaws.com/images_products/700603673327.jpg", 
//     stock:"15", 
//     description: "Con cuatro capas de diversión giratoria, el Tornado para Perros se convertirá en su nuevo juego para perros que dispensa golosinas. Ayude a reducir el comportamiento destructivo y a eliminar el aburrimiento mientras fortalece el vínculo entre usted y su perro, a través del juego interactivo con el Dog Tornado de Nina Ottosson."
// },
// { id: "2", name:"Champion Dog - Alimento Cachorros Minis y Pequeños", price:8500, category:"Comida", img:"https://laikapp.s3.amazonaws.com/dev_images_products/d97348fef9adb3c2c2aa1bb5e2c9c762_1686924602.jpg", stock:"53", description: "Champion Dog Cachorros Minis y Pequeños Sabor Carne, Pollo y Leche te ofrece un alimento completo y balanceado, especialmente formulado para satisfacer todos sus requerimientos nutricionales. La felicidad de tu perro se alimenta todos los días y en cada momento que compartes junto a él. Disfrutando tardes de juegos, paseos al parque y cariños por montón le demuestras lo importante que es para ti… Porque verlo feliz, te hace feliz. Junto a esto, una buena alimentación es fundamental para mantener su salud y bienestar. Recomendado para cachorros a partir del mes de edad."},
// { id: "3", name:"Mascan - Plato Anti-ahogo Verde", price:7600, category:"Accesorios", img:"https://laikapp.s3.amazonaws.com/dev_images_products/80667_Mascan___Plato_Anti_ahogo_Verde_1659453502_0_800x800.jpg", stock:"26", description: "Base antideslizante • Fácil de lavar, higiénico y durable • Diseñado para perros ansiosos al comer"}
// ]

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(products)
//         }, 500)
//     })
// }

// export const getProductById = (productId) => {
//     return new Promise((resolve,reject) => {
//         const item = products.find((prod) => prod.id === productId)
//         setTimeout(() => {
//             if (item){
//                 resolve(item)
//             } else {
//                 reject({
//                     error: "no se encontro el producto"
//                 })
//             }
//         }, 500)
//     })
// }

// export const getProductsByCategory = (productCategory) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === productCategory))
//         }, 500)
//     })
// }