const app = {
    data() {
        return {
            tasks: [{image : '/images/leng.png',title: 'Leng'},
                    {image : '/images/guy.png',title: 'Guy'},
                    {image : '/images/pizza.jpg',title: 'Pizza'},
                    {image : '/images/cake.jpg',title: 'Cake'}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },

    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
    }
}
Vue.createApp(app).mount('#app')
