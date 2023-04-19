import axios from 'axios';
const state = {
    user: null,
    home: null,
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
};
const actions = {
    async LoginView({dispatch}, form) {
        await axios.post('auth/login', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
      },
      async LogIn({commit}, User) {
        await axios.post('/auth/login', User)
        await commit('setUser', User.get('username'))
      },
      async LogOut({commit}){
        let user = null
        commit('logout', user)
      }
};
const mutations = {
    setUser(state, username) {
        state.user = username;
      },
    
      setPosts(state, posts) {
        state.posts = posts;
      },
      logout(state, user) {
        state.user = user;
      },
};
export default {
  state,
  getters,
  actions,
  mutations
};