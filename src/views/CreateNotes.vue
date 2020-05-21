<template>
  <div style="position: relative;">
    <NavBarCreate 
      :saveItemNote="saveItemNote"
      :noteById="noteById"
    />
    <div class="wrapper">
        <div 
          class="add-todo__overflow" 
          v-if="noteById == undefined"
          v-show="openAddTitle"
        >
          <div class="add-todo__modal">
            <input 
              type="text" 
              class="add-title__input" 
              required 
              placeholder="Add title"
              v-model="title"
              @keyup.enter="addToTitle()"
            >
            <button 
              class="btn-add-todo__create"
              @click="addToTitle()"
            >+</button>
          </div>
        </div>
        <div 
          class="add-todo__overflow" 
          v-else
          v-show="openAddTitle"
        >
          <div class="add-todo__modal">
            <input 
              type="text" 
              class="add-title__input" 
              required 
              placeholder="Add title"
              v-model="title"
              @keyup.enter="addToTitle()"
            >
            <button 
              class="btn-add-todo__create"
              @click="addToTitle()"
            >+</button>
          </div>
        </div>
        <button 
          class="btn-add-todo__chenge"
          @click="openAddTitle = true"
        >
        <h2>{{title}}</h2>
        </button>
        <div class="line"></div>
        <div 
          class="todos__items"
          v-for="todo in todos"
          :key="todo.id"
        >
          <div 
            class="todos__item"
            :class="{complete: todo.complete}"
            >
            <input class="todos__input-checkbox" type="checkbox" v-model="todo.complete">
            <p class="todos__text">{{todo.text}}</p>
            <button 
              class="edit" 
              @click="editTodo(todo)"  
            >Edit text</button>
            <button 
              class="todos__delete"
              @click="deleteTodo(todo)"  
            >x</button>
          </div>
        </div>
        <div class="add-todo__item">
          <button
            class="btn-add-todo"
            @click="openTodo = !false"
          >+</button>
          <h2 class="add-todo__title">Add todo</h2>
        </div>
        <div class="add-todo__overflow" v-show="openTodo">
          <div class="add-todo__modal">
            <input 
              type="text" 
              class="add-todo__input" 
              required 
              placeholder="Add todo"
              v-model="todoText"
              @keyup.enter="addTodo()"
            >
            <button 
              class="btn-add-todo__create"
              @click="addTodo()"
            >+</button>
          </div>
        </div>
        <div class="add-todo__overflow" v-show="openEditTodo">
          <div class="add-todo__modal">
            <input 
              type="text" 
              class="add-todo__input" 
              required 
              placeholder="Edit todo"
              v-model="todoText"
              @keyup.enter="AddEditTodo(todoText, editedTodo)"
            >
            <button 
              class="btn-add-todo__create"
              @click="AddEditTodo(todoText, editedTodo)"
            >+</button>
          </div>
        </div>
        <div class="note-chenge__btns" v-if="noteById != undefined">
          <button 
              class="note-chenge__btn-save notes__btn-chenge"
              @click="ChangeNote()"   
          >
          Save
          </button>
          <button 
              class="note-chenge__btn-cancel notes__btn-chenge"
              @click="openCancelEdit = true"  
          >
          Cancel
          </button>
          <div class="add-todo__overflow" v-show="openCancelEdit">
            <div class="add-todo__modal">
              <h2>Cancel editing?</h2>
              <div class="item-delete__answer">
                  <button 
                      @click="cancelChangeNote()"
                      class="item-delete__yes"
                  >Yes</button>
                  <button 
                      @click="openCancelEdit = false"
                      class="item-delete__no"
                  >No</button> 
              </div>  
            </div>         
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavBarCreate from '../components/NavBarCreate.vue'

export default {
  name: 'Todo',
  components: {
    NavBarCreate,
  },
  props: [
  ],
  data() {
    return {
      title: '',
      todoText: '',
      todos: [],    
      note: {},
      openTodo: false,
      openEditTodo: false,
      openAddTitle: false,
      openCancelEdit: false,
      editedTodo: null,
    }
  },
  computed: {
    noteById() {
      return this.$store.getters.noteId(+this.$route.params.id);
    }
  },
  methods: {
    saveItemNote() {
      this.note = {
        title: this.title,
        todos: this.todos,
        id: Date.now()
      }
      this.$store.dispatch('createNote', this.note)
      this.$router.push('/')
    },
    addToTitle() {
      this.title 
      this.openAddTitle = false
      // console.log(this.openAddTitle)
    },
    addTodo() {
      if(this.todoText != ''){
      this.todos.push({
        text: this.todoText,
        complete: false,
        id: new Date().valueOf()           
      });}
      this.todoText = ''
      this.openTodo = false
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    editTodo(todo) {
      this.openEditTodo = true;
      this.todoText = todo.text;
      this.editedTodo = todo;
    },
    AddEditTodo(todoText, editedTodo) {
      editedTodo.text = todoText.trim();
      if(!editedTodo.text) {
        this.deleteTodo(editedTodo)
      }
      this.openEditTodo = false;
      this.todoText = ''
    },
    ChangeNote(){
      this.$store.dispatch('updateNote', {
        id: this.note.id,
        title: this.title,
        todos: this.todos
      })
      this.$router.push('/')
      // console.log(this.note.id)
    },
    cancelChangeNote(){
      
      this.$router.push('/')
    },
  },
  mounted() {
    if (this.noteById != undefined && this.noteById != '') {
      this.title = this.noteById.title;
      this.todos = this.noteById.todos;
      this.note.id = this.noteById.id
    }
    if (this.title == '') {
      this.openAddTitle = true
    }
  },
}
</script>

<style>
  .add-todo__form {
    display: flex;
    flex-direction: column;
    padding: 5% 0;
  }
  .line {
    border-top: 1px solid #445279;
    margin-bottom: 10px;
  }
  .todos__item{
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: #445279;
    color: #fff;
    border-radius: 5px;
    width: 99%;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .edit {
    margin-left: auto;
    background: #44AF7C;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .todos__text {
    padding: 5px 5px 0 5px;
    margin: 0;
  }
  .todos__input-checkbox[type="checkbox"] {
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .complete{
    background-color: #447965;
  }
  .complete .todos__text {
    text-decoration: line-through;
  }
  .todos__delete {
    margin-left: 10px;
    background: rgb(199, 44, 44);
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .add-title__input,
  .add-todo__input {
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0 10px 10px;
    margin-top: 10px;
    margin-bottom: 10px;    
    border-radius: 5px;
    border: 1px solid #5446CF;
  } 
  .add-todo__input {
    width: 250px;
  }
  .add-todo__item {
    display: flex;
    align-items: center;
  }
  .btn-add-todo{
    width: 30px;
    height: 30px;
    background: transparent;
    border: 1px solid #445279;
    outline: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    color: #445279;
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;
  }
  .btn-add-todo:hover {
    background: #445279;
    color: #fff;
  }
  .add-todo__overflow {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-todo__modal {
    max-width: 300px;
    height: auto;
    background-color: #445279;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
  }
  .add-todo__modal h2{
    color: #fff;
  }
  .add-todo__title {
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0 10px 10px;
  }
  .btn-add-todo__create,.btn-add-todo__chenge {
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
    padding: 0;
  }
  .btn-add-todo__create {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .btn-add-todo__create:hover {
    background-color: #fff;
    color: #445279;
  }
  .btn-add-todo__chenge h2{
    color: #445279;
    margin: 30px 0 10px;
  }
  .note-chenge__btn-save,
  .note-chenge__btn-cancel {
    width: 100px;
    margin: 5px 10px 0 0;
  }
  .note-chenge__btn-cancel {
    background-color: #445279!important;
  }
</style>
