const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: 'Hello world from',
            logo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
            is_colore_secondario: false
        }
    },

    methods: {
        cambioColoreSfondo() {
            console.log('ciao')
            this.is_colore_secondario = !this.is_colore_secondario; 
            console.log(this.is_colore_secondario)
        }
    }
}).mount('#app');