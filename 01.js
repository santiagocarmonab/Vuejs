const app = new Vue ({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 12},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Platano', cantidad: 14}
        ],
        nuevaFruta: '' 
    },
    
    methods: {
        agregarFruta (){
            this.frutas.push({
                nombre : this.nuevaFruta, cantidad:0
            })
        }
    }

})