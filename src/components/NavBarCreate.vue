<template>
  <div>
    <div class="nav-bar">
        <div class="wrapper">
            <ul class="nav-bar__ul">
                <li class="nav-bar__li" v-if="noteById == undefined"><a>Create new notes</a></li>
                <p
                    v-else   
                    class="btn-save" 
                >
                Chenge
                </p>
                <!-- <router-link 
                    teg="button" 
                    class="nav-bar__li"
                    to="/"
                    active-class="active"
                ><a href="#">Save</a></router-link> -->
                <button 
                    v-if="noteById == undefined"
                    class="btn-save notes__btn-chenge"
                    @click="saveItemNote()"  
                >
                Add note
                </button>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarCreate',
  props: [
      'saveItemNote',
      'noteById'
  ],
}
</script>

<style>
    .nav-bar__li a, .btn-save{
        text-decoration: none;
        color: #fff;
        font-weight: 800;
    }
    .btn-save {
        outline: none;
        cursor: pointer;
        padding: 8px 10px!important;
    }
    
</style>