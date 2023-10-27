const { createApp } = Vue

const app = createApp({
  data() {
    return {
        title: 'Ciao Marco e Stefano, come state?',
        subtitle: 'Questi siete voi ogni pomeriggio:',
        img: 'img/marco-e-stefano.png',
        subColor: 'sub-color',
        bgColor: 'app-bg',
    }
  } 
});
app.mount('#app')
