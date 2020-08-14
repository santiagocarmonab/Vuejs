Vue.component('padre',{
    template : `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre : {{numeroPadre}}</h2>
        <button class="btn btn-warning" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})