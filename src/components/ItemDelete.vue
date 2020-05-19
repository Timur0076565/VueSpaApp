<template>
  <div>
    <div 
        class="add-todo__overflow item-delete__overflow" 
    >
        <div class="add-todo__modal item-delete__overflow">
            <h2>Delete this note?</h2>
            <div class="item-delete__answer">
                <button 
                    @click="deleteItem(itemId)"
                    class="item-delete__yes"
                >Yes</button>
                <button 
                    @click="cancelDelete"
                    class="item-delete__no"
                >No</button> 
            </div>           
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemDelete',
  props: [
      'deleteItem',
      'cancelDelete',
      'itemId'
  ],

}
</script>

<style>
    .item-delete__overflow h2{
        color: #fff;
    }
    .item-delete__answer {
        display: flex;
    }
    .item-delete__yes,
    .item-delete__no{
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        padding: 0 10px;
    }
    .item-delete__yes:hover,
    .item-delete__no:hover{
        background: #fff;
        color: #445279;
        border-radius: 5px;
    }

</style>