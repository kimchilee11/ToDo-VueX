<template>
    <div class="container">
        <header>
            <h1 class="todolist-title">
               ToDoList
            </h1>
            <form action="" class="todolist">
                <b-form-input type="text" class="todolist-create" placeholder="Nhap ten cua ban" v-model="item" > </b-form-input>
                <b-button class="todolist-button-add" id="addName" @click.prevent="addName" >Add Name</b-button>
            </form>
        </header>
        <div class="todolist-obj"  v-for=" (item,index) in listNames" v-bind:key=item.id >
                <div v-if="!item.edit" class="todolist-obj-content">{{ item.name}} </div>
                <b-form-input v-else type="text" v-model="item.name" 
                @blur="doneEdit(item)"
                @keyup.enter="doneEdit(item)"
                class="todolist-edit-content"></b-form-input>
            <itemList  class="todolist-button"  @onDel="deleting(index)"  @onEdit="editing(item)"/>
        </div>
    </div>
</template>

<script>
import itemList from './itemList'
export default {
     computed: {
     listNames(){
       return this.$store.state.listNames
     },
     item(){
        return this.$store.state.item
    }
  },
    components:{
        itemList
    },
    methods:{
        addName(){
            console.log('item'),
            this.$store.state.listNames.push({
            name:  this.item,
            }),
            this.item=''
        },
        deleting(index){
            this.$store.state.listNames.splice(index,1)
        },
        editing(index){
            index.edit=true
        },
        doneEdit(index){
            index.edit=false
        }
}
}
</script>

<style>
.todolist-title{
    padding:25px  20px;
    font-size: 90px;
}
.todolist-obj{
    margin: 10px;
    padding: 10px;
}
.todolist-obj-content {
    display: inline;
    margin: 10px;
    padding:  10px;
}
.todolist-button,.todolist-create,.todolist-edit-content{
    display: inline;
    width: 40%;
}

</style>