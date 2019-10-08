const state = {
    todos : [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": true
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
    ]
}

const getters = {
    completedTodos : state =>{
        return state.todos.filter(todo => todo.completed )
    },
    completedTodosLength : state =>{
        return state.todos.length;
    },
    completedTodosId : state => id =>{
        return state.todos.find(todo => todo.id ==id)
    }

}

const mutations = {
    setTodos : (state,todos) => (state.todos = todos)
}
const actions = {
    async fetchTodos({commit}) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log(res.data)
    commit("setTodos",res.data)
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}