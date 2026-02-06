const ap1= Vue.createApp({
     data(){
        return {
            titulo: 'Objetos Malditos ',
            nombre: 'Omega .', 
            subtitulo: 'Museo Paranormal CDMX'    
        }
    
    }
});
const ap2=Vue.createApp({
  data(){
    return{
        Objetos: [
          {maldicion:"Diamante Hope",fecha:1668,nivel:2,limpieza:4},
          {maldicion:"Unlucky Mummy",fecha:1889,nivel:4,limpieza:6},
          {maldicion:"Tumba de Tutankamón",fecha:1922,nivel:5,limpieza:3},
          {maldicion:"Muñeca Annabelle",fecha:1970,nivel:7,limpieza:2},
          {maldicion:"Pintura “The Crying Boy”",fecha:1985,nivel:8, limpieza:1},
          {maldicion:"Pintura “The Hands Resist Him”",fecha:2000,nivel:9,limpieza:5},
          {maldicion:"Dybbuk Box",fecha:2003,nivel:10,limpieza:4},
        ],
        minimo:10,
       
        }
  },
  computed:{
    objetosMalditos(){
      return this.Objetos.filter((objeto)=>objeto.nivel>=this.minimo);
    },
    fechaMaldiciones(){
      return this.Objetos.filter((objeto)=>objeto.fecha>= this.minimo);
    },
    limpiezaMaldiciones(){
      return this.Objetos.filter((objeto)=>objeto.limpieza>=this.minimo);
    }
  }
});

ap2.mount('#articulo1')

const ap3= Vue.createApp({
  data(){
     return {        
         nombre: 'Omega.' ,
         mensaje:'Hoy es: '+new Date().toLocaleString(),
         bandera:true, 
         contador:0,
    }
  },
  methods: {
      incremento() {
        this.contador++;
        return this.contador
      }
    }
    
});
ap3.mount('#divfooter')