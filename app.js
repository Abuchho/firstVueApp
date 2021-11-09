const app = Vue.createApp({
    
    data() {
        return {
            activity: 'run',
            type: 'diy'
        }
    },
    methods: {
        async newActivity(){
            const res = await fetch('http://www.boredapi.com/api/activity/')
            const data = await res.json();
            console.log(data)
            this.activity = data.activity
            this.type = data.type
        }
    }
})

app.mount('#app')