/************************************************
CSS
*************************************************/

'use strict';

const {createApp} = Vue;

createApp({
    data(){
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            cpuGeneratorMail : null,
            mailSetting: 'color',
            mailsList: [],
        };
    },
    methods: {},
    mounted() {
        for(let i = 0; i < 10; i++) {
            axios.get(
                    this.apiUrl)
                .then((data) => {
                    const result = data.data.response;
                    this.mailsList.push(result);
                });
            }
        }
    }).mount('#app');

//sono created
//sono mouted
//{success: true, response: 'champlin.thora@gmail.com'}



//1)FETCH
// const objs = fetch(
//     'https://flynn.boolean.careers/exercises/api/random/mail'
// )
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//2)AXIOS
//axios fa una chiamata in get a una risorsa .quando ottieni una risposta fammi un console.log di data.data
// const objsAxios = axios.get(
//     'https://flynn.boolean.careers/exercises/api/random/mail'
// ).then((data) => {
//     console.log(data.data);
// });