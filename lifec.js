const app = new Vue({
    el : '#app',
    data : {
        saludo : 'soy ciclo de vida'
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
    created(){
        /*Cuando se tienen creados los metodos, observadores
        y eventos pero aun no se accede al DOM, aun no se puede acceder a 'el'*/
        console.log('created')
    },
    beforeMount(){ //Antes de insertar el DOM
        console.log('beforeMount')
    },
    mounted(){//Al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate(){ //Cuando se detecta algun cambio
        console.log('beforeUpdate')
    },
    updated(){ //Al realizar cambios
        console.log('updated')
    },
    beforeDestroy(){ //Antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed(){ //Cuando se destruye toda la instancia
        console.log('destroyed')
    },

    methods : {
        destruir(){
            /*al destruir la instancia el DOM queda como estaba hasta el momento
            pero ya no trabaja ninguna de las funcionalidades de vue*/
            this.$destroy()
        }
    }

})