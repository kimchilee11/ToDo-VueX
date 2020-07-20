import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state:{
        listNames: [
            {
                id: 1,
                name: "name1",
                edit: false
            },
            {
                id: 2,
                name: "name2",
                edit: false

            },
            {
                id:3,
                name: "name3",
                edit: false

            },
            {
                id:4,
                name: "name4",
                edit: false

            },
            {
                id:5,
                name: "name5",
                edit: false

            }
        ] ,
        item : '',
        idName: 6
    }
})