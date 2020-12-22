# Guía Introductoria a Vue.js

A continuación se presenta una introducción a los conceptos básicos de Vue.js, el framework principal utilizado en el proyecto de Clook Me para Digicard. En esta guía se explica el uso de métodos, variables y propiedades computadas reactivas así como el uso y la lógica de los componentes.


## ¿Qué es VueJS?

Vue JS es un framework javascript diseñado para crear páginas web completas, es decir, es un conjunto de herramientas y funciones que permiten desarrollar páginas web de una manera más cómoda pero escalable. Con Vue puedes crear todas las vistas de tu página web, hacerlas responsive y conectarla a un servidor para tener datos dinámicos de una base de datos, entre muchas otras funcionalidades. Vue nace con la necesidad de no tener que escribir tanto código Javascript, ahorrando tiempo y estructurando los proyectos de forma clara pero modular mediante el uso de componentes.


### Modularidad

Lo primero que salta a la vista de Vue es que es completamente modular, es decir, mientras que otros frameworks Javascript te dan todo lo que necesitas, Vue ofrece lo básico para que puedas elegir si instalar luego las utilidades que necesites.


### Reactividad

Vue tiene propiedades reactivas, eso quiere decir que si cambia una variable en una parte de la vista de la página, Vue actualizará su nuevo valor sin necesidad de que lo hagas manualmente.


### Componentes web

Vue se basa en componentes web. Un componente web es una parte de una web que puede ser reutilizada y que normalmente tiene estilos y funcionalidad aislada.
Básicamente, te permiten crear tus propias etiquetas HTML personalizables. Por ejemplo, imagina que necesitas crear un calendario y que lo vas a usar en varias vistas de la web, creando un calendario en forma de componente web, puedes crear calendarios simplemente llamando a la etiqueta que tu mismo definas para el HTML.

Ejemplo:

    // Define un nuevo boton llamado button-counter
    Vue.component('button-counter', {
	    data: function () {
		    return {
			    count: 0
		    }
	    },
	})
    
    template:
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  

### Virtual DOM (Document Object Model - Modelo de Objetos del Documento)

Si hay que hacer un cambio en la vista, en lugar de sustituir directamente los nuevos valores en la vista, Vue creará una especie de réplica del DOM, es decir, de los elementos de la página web para que a la hora de hacer cambios en la vista se hagan de forma más óptima.


### Eventos y transiciones

Puedes reaccionar a eventos que se producen en el DOM, por ejemplo cuando el usuario hace click en un elemento, cuando lo mueve, cuando escribe, entre muchos otros.


### Lifecycle (ciclo de vida) de los componentes

Con Vue, tienes control sobre todo el ciclo de vida de los componentes, es decir, puedes controlar lo que ocurre antes de que se cargue el componente, lo que pasa justo al cargarse o al destruirse. Esto es útil por ejemplo cuendo queremos que pasen ciertas cosas cuando el usuario entra en una página.

De esa misma manera:

    // lifecycle hooks
    beforeCreate(){
    alert('Before Create');
    },
    created(){
    alert('Created');
    },
    beforeMount(){
    alert('Before Mount');
    },
    mounted(){
    alert('Mounted');
    },
    beforeUpdate(){
    alert('Before Update');
    },
    updated(){
    alert('Updated');
    }


## Propiedades de datos

La opción de datos para un componente es una función. Vue llama a esta función como parte de la creación de una nueva instancia de componente.

Por ejemplo:

    <script>
    export  default {
    data() {
    	return {
    		title: 'Your first Vue file, wooo!'
    	}
    }
    </script>

En el data no pueden depender de otras variables del data, por ejemplo no puedes crear una variable en el data cuyo valor sea el doble de otra variable


## Vinculaciones de clase y estilo

Una necesidad común para el enlace de datos es manipular la lista de clases de un elemento y sus estilos en línea.

### **v-bind**

El **v-bind** nos ayuda a trabajar directamente con el dato, puesto que todo lo relacionado con el dato se verá afectado ante cualquier cambio. Es decir, podremos vincular un atributo html a un valor que tenemos en nuestro modelo, por lo que lo vuelve dinámico; de esta manera podríamos, por ejemplo, asignar el atributo _disabled_ condicionalmente a un botón. 

    <button v-bind:disabled="my_variable">Enviar</button>

### **v-on**

Podemos usar la directiva `v-on` para escuchar eventos DOM y ejecutar algo de JavaScript cuando se activan.
Vue proporciona **modificadores de eventos** para v-on. Recuerda que los modificadores son sufijos de directiva indicados por un punto.

-   .stop
-   .prevent
-   .capture
-   .self
-   .once
-   .passive

Esto podría verse de la siguiente manera:

    <button v-on:click="counter += 1">Add 1</button>

### **v-model**

El **v-model** es usado para crear bindings de datos bidireccionales (two-way binding) en elementos input, textarea y select de un formulario.

Así mismo se puede ver lo siguiente:

     <input v-model="message" placeholder="edíteme">
     <p>El mensaje es: {{ message }}</p>


## Condicionales

 - El **v-if** puedes hacer que ciertos elementos **se muestren o no** dependiendo del valor de una variable. En el **v-if** cuando no se muestra un elemento, Vue lo elimina directamente del DOM, es decir, elimina toda la etiqueta HTML y la muestra cuando la necesita.

 - El **v-show** también permitirá o no mostrar un elemento del html pero no elimina la etiqueta html, la oculta. Lo que hace el **v-show** es añadir **`display:none`** al elemento para que no se muestre, pero sigue estando dentro del DOM.
 

## Bucles
 Como en muchos lenguajes de programación, en las vistas de Vue también podemos tener bucles, en este caso para pintar varios elementos en el HTML. Este, es empleado con **v-for**, tal como: `<li  v-for="(item, i) in elements"  :key="i">`
 

## Métodos

Para agregar métodos a una instancia de componente usamos la opción `métodos`. Funcionan igual que en los otros lenguajes de programación, es decir, se pueden crear para poder llamarlos desde otra parte del código y así evitar la repetición de Código, además, pueden recibir parámetros. Este debe ser un objeto que contenga los métodos deseados:

    <script>
    export  default {
	    methods: {
		    punch: function(){
			    this.health  -=  10;
		    if ( this.health  <=  0 ){
			    this.ended  =  true;
		    }
		}
    }
    </script>

  
Vue vincula automáticamente el valor "this" para "métodos" para que siempre se refiera a la instancia del componente.


## Propiedades Computadas

Son propiedades asociadas a componentes que son computadas, lo que es lo mismo, son variables a las que antes se le pueden aplicar una serie de cálculos o transformaciones. Además, **las propiedades computadas se almacenan en caché en función de sus dependencias reactivas.** Esta solo se volverá a evaluar cuando algunas de sus dependencias reactivas hayan cambiado.

    <script>
    export default {
	    data: () => ({
		    value: 20
	    }),
	    computed: {
		    double() {
			    return this.value * 2;
		    }
	    }
    };
    </script>


## Props

Son formas de transferir datos de un componente principal a un componente secundario. son atributos personalizados que usted puede registrar en un componente. Cuando se pasa un valor a un atributo **prop**, se convierte en una propiedad en esa instancia de componente. Por ejemplo, para pasar un título a nuestro componente de publicación de blog, podemos incluirlo en la lista de **props** que este componente acepta, usando la opción `props`:

    Vue.component('blog-post', {
	    props: ['title'],
    })
    template:
    <h3>{{ title }}</h3>


## Valores Primitivos vs Valores de Referencia

Una variable puede contener uno de dos tipos de valores: valores primitivos o valores de referencia.

- El valor primitivo se almacena directamente en la ubicación a la que
   accede la variable.
- El valor de referencia es almacenado en la ubicación de la variable, es un puntero a una ubicación en la memoria donde se almacena el objeto.
- Los tipos primitivos incluyen Indefinido, Nulo, Booleano, Número o Cadena.
- Si se trabaja con valores de referencia, se cambia el contenido completo almacenado, si se trabaja con valores primitivos, se cambia el contenido individualmente seleccionado.

Cabe resaltar que los objetos son agregaciones de propiedades; una propiedad puede hacer referencia a un objeto o una primitiva. Los primitivos son valores, no tienen propiedades. JavaScript tiene 5 tipos de datos primitivos: cadena, número, booleano, nulo e indefinido.


## Eventos Personalizados

A diferencia de los componentes y props, los nombres de eventos no proporcionan ninguna transformación automática de clases. En su lugar, el nombre de un evento emitido debe coincidir exactamente con el nombre utilizado para escuchar ese evento.

    <template>
	    <div>
		    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
	    </div>
    </template>
    …………………
    <template>
	    <header>
	    <h1 v-on:click="changeTitle">{{ title }}</h1>
	    </header>
    </template>

    <script>
	    export default {
		    props: {
			    title: {
				    type: String,
				    required: true
			    }
		    },
		    data(){
			    return{
			    }
		    },
		    methods: {
			    changeTitle: function(){
				    this.$emit('changeTitle', 'Vue Ninjas');
			    }
		    }
	    }
	}
    </script>


## Bus Events

Los buses de eventos son una forma útil de comunicación entre componentes que no están directamente relacionados, es decir, no tienen una relación padre-hijo.

Es solo una instancia de Vue vacía, que se puede usar para **$emit** eventos o escuchar **$on** dichos eventos. Por ejemplo:

    // setup an event bus, do it in a separate js file
    var bus = new Vue()
    // imagine a component where you require to pass on a data property
    // or a computed property or a method!
    
    Vue.component('card', {
    template: `<div class='card'>

    <div class='margin-5'>
	    <input v-model='name'>
    </div>
	    <div class='margin-5'>
		    <button @click='submit'>Save</button>
	    </div>
    </div>`,
    
    <script>
	    data() {
		    return {
			    name: null
		    }
	    },
    
	    methods: {
		    submit() {
			    bus.$emit('name-set', this.name)
		    }
	    }
    })
    
    // In another component that requires the emitted data.
    var data = {
	    message: 'Hello Vue.js!'
    }
    var demo = new Vue({
	    el: '#demo',
	    data: data,
	    created() {
		    console.log(bus)
			 bus.$on('name-set', (name) => {
			    this.message = name
		    })
	    }
    })


## Slots

Los **slots** son un mecanismo de Vue JS que sirve para insertar contenido HTML dentro de los componentes. Es decir, con los **props** puedes pasar objetos y variables javascript a los componentes y con los **slots puedes insertar contenido HTML** dentro de otros componentes.

Esto le permite componer componentes como este:

    <navigation-link url="/profile">  
	    Su Perfil  
    </navigation-link>

Luego en la plantilla para <navigation-link>, es posible que usted tenga:

    <a v-bind:href="url" class="nav-link">  
	    <slot></slot>  
    </a>

Cuando el componente renderiza, el elemento `<slot>` será reemplazado por “Su Perfil”. Los Slots pueden contener cualquier plantilla de código, incluyendo HTML.


# Referencias para ingresantes

Para extender los conceptos explicados en este documento se recomiendan revisar los siguientes links:

Primero está la [documentacion oficial](https://es.vuejs.org/v2/guide/) de Vue.js 2 en español la cual es muy completa por el apoyo de la comunidad open source y contiene ejemplos de uso en cada tema. 

Por otra parte, para el uso de recursos en PDF se recomienda este [enlace](https://tutorialesenpdf.com/vue-js/) donde se pueden encontrar documentos extensos sobre el desarrollo de aplicaciones web tanto a nivel principiante como intermedio. 

Con respecto al material audiovisual se recomiendan los siguientes videos de youtube:

- En Español: [Curso de Vue.js por Bluuweb](https://www.youtube.com/watch?v=GAQB7Y4X5fM&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&ab_channel=Bluuweb%21)  
Recomendado hasta el video #26 inclusive, así como la parte vuetify. 

- En Inglés (MUY RECOMENDADO): [Curso de Vue.js 2 Tutorial by The Net Ninja](https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&ab_channel=TheNetNinja)  
Recomendado hasta el video #29 inclusive, y para la parte de vuetify utilizar el recurso anterior. 
