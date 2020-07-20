<template>
    <div class="todolist-even"  >
        <b-button class="todolist-button-edit" @click="onEdit(edit)"> SỬA </b-button>
        <b-button class="todolist-button-delete"  @click="onDel(index)"> XÓA </b-button>
    </div>
</template>

<script>
import listNames from './ToDoList'
export default {
    name: 'item-list',
      props: {
        index: Object,
        edit: Boolean
    },

    methods:{
        onDel(index){
            this.$emit('onDel',index)
        },
        onEdit(index){
            this.$emit('onEdit',index)
        }
    }

}
</script>
<style>
.todolist-even{
    display : inline,
}
</style>