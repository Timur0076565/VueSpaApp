<template>
  <div>
    <div class="nav-bar">
        <div class="wrapper">
            <ul class="nav-bar__ul">
                <router-link 
                    teg="li" 
                    class="nav-bar__li"
                    to="/"
                    exact
                    active-class="active"
                ><a href="#">Notes</a></router-link>
                <router-link 
                    teg="li" 
                    class="nav-bar__li"
                    to="/create"
                    active-class="active"
                ><a href="#">Create note</a></router-link>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
}
</script>

<style>
    .nav-bar {
        background-color: #445279;
    }
    .nav-bar__ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    .nav-bar__li {
        padding: 2% 0;
        text-decoration: none;
        list-style: none;
    }
    .nav-bar__li a{
        text-decoration: none;
        color: #fff;
        font-weight: 800;
    }
</style>