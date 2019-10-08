<template>
  <div id="app">
    <!-- <p>{{count}}</p> -->
    <button @click="incrementCount">+</button>
    <span> {{count}} </span>
    <button @click="decrementCount({count:4})"> - </button>
    <br>
    <br>
    <div>
      {{completedTodos}}
    </div>
    <p>{{completedTodosLength}}</p>
    <p>{{completedTodosId(4)}}</p>

    <button @click="fetchTodos">拉去数据</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      // completedTodos:true
    }
  },
  methods: {
    incrementCount(){
      console.log(1111)
      this.$store.commit("incrementCount",)
    },
    decrementCount(y){
      console.log(2222)
      this.$store.commit("decrementCount",y)
    },
    fetchTodos(){
      console.log("拉去数据")
      this.$store.dispatch("fetchTodos")
    }
    
  },
  computed: {
    count(){
      return this.$store.getters.count
    },
    completedTodos(){
      return this.$store.getters.completedTodos
    },
    completedTodosLength(){
      return this.$store.getters.completedTodosLength;
    },
    completedTodosId(){
      return this.$store.getters.completedTodosId;
    }
  },
}
</script>
<style>

</style>
