Vue.component('saludo', {
    template: `
      <div> 
        <h1>{{saludo}}</h1>
        <h3>subtitulo</h3>
      </div>
    `,//para insertar varias etiquetas html deben estar en un contenedor
    data(){
        return{
            saludo : 'Hola desde vue'
        }
    }
})