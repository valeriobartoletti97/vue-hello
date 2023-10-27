const { createApp } = Vue

const app = createApp({
  data() {
    return {
        title: 'Ciao Marco e Stefano, come state?'
    }
  } 
});
app.mount('#app')
