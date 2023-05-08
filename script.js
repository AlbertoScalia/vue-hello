const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: 'Hello world from',
            logo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg'
        }
    }
}).mount('#app');