const app = new Vue({
    el : '#app',
    data : {
        titulo: 'App Gym using Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods : {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas)
            this.nuevaTarea=''
            localStorage.setItem('gymWithVue', JSON.stringify(this.tareas));
        },

        editarTarea: function(index){
            this.tareas[index].estado=true;
            localStorage.setItem('gymWithVue', JSON.stringify(this.tareas));
        },

        eliminarTarea: function(index){
            this.tareas.splice(index,1);
            localStorage.setItem('gymWithVue', JSON.stringify(this.tareas));
        }
    },

    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gymWithVue'));
        if (datosDB === null){
            this.tareas=[];
        }else{
            this.tareas=datosDB;
        }
    }
    
})