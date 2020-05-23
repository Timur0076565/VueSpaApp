<template>
  <div>
    <NavBar />
    <div class="wrapper">
      <div 
        v-if="notes.length"
        class="container-notes"
      >
        <div 
          class="notes"
          v-for="note in notes"
          :key="note.id"
        >
          <div class="notes__item">
            <div class="notes__content">
              <h2>{{note.title}}</h2>
              <hr>
              <div 
                class="notes__todos"
                v-for="todo in note.todos.slice(0, 3)"
                :key="todo.id"
                :class="{completed: todo.complete}"
              >
                <p>{{todo.text | limitedLenTodo}}</p>
              </div>
            </div>
            <router-link 
              teg="button" 
              class="notes__btn-chenge"
              :to="'/create/' + note.id"
              active-class="active"
            >Change</router-link>
            <button 
              class="notes__btn-delete"
              @click="openaskDelete(note)"
            >x</button>
          </div>
        </div>
      </div>
      <h1 v-else>No notes</h1>
      <ItemDelete 
          v-show="showDelete"
          :deleteItem="deleteItem"
          :itemId="itemId"
          :cancelDelete="cancelDelete"
        />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ItemDelete from '../components/ItemDelete.vue'


export default {
  name: 'Notes',
  components: {
    NavBar,
    ItemDelete,
  },
  data() {
    return {
      showDelete: false,
      itemId: '',
    }
  },
  computed: {
    notes() {
      return this.$store.getters.notes
    }
    
  },
  filters: {
    limitedLenTodo: function(value) {
       return value.slice(0, 30);
    } 
  },
  methods: {
    deleteItem(note) {
      this.$store.dispatch('deleteNote', note);
      this.showDelete = false;
    },
    cancelDelete() {
      this.showDelete = false;
    },
    openaskDelete(id) {
      this.itemId = id;
      this.showDelete = true;
    },

  },
  mounted() {
    console.log(this.notes)
  },
}
</script>

<style>
  .container-notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 15px 0;
  }
  .notes {
    padding: 10px;
  }
  .notes__item {
    width: 280px;
    min-height: 250px;
    padding: 10px 30px;
    background-color: #445279;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  .notes__item h2,
  .notes__todos p{
    color: #fff;
  }
  .notes__btn-delete,
  .notes__btn-chenge {
    cursor: pointer;
    color: #fff;
    outline: none;
  }
  .notes__btn-chenge {
    background-color: #44AF7C;
    border: none;
    border-radius: 5px;
    padding: 15px 0;
    text-decoration: none;
    text-align: center;
  }
  .notes__btn-delete {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px;
    border: 1px solid #fff;
    background-color: transparent;
    margin: 8px;
    padding: 3px 8px;
  }
  .notes__btn-delete:hover {
    background-color: #fff;
    color: #445279;
  }
  .notes__btn-chenge:hover {
    opacity: 0.8;
  }
  .completed p {
    text-decoration: line-through;
  }

</style>
