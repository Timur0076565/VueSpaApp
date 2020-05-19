import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: JSON.parse(localStorage.getItem('notes') || '[]'),
    },
    mutations: {
        createNote(state, note) {
            state.notes.push(note)

            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        deleteNote(state, note ) {
            state.notes.splice(state.notes.indexOf(note), 1);
            
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        updateNote(state, {id, title, todos}) {
            const notes = state.notes.concat()
            const indx = notes.find(n => n.id === id)
            const note = notes[indx]

            notes[indx] = {...note, title, todos}

            localStorage.setItem('notes', JSON.stringify(state.notes))
        }
    },
    actions: {
        createNote({commit}, note) {
            commit('createNote', note)
        },
        deleteNote({commit},  note) {
            commit('deleteNote', note)
        },
        updateNote({commit}, note) {
            commit('updateNote', note)
        },
    },
    getters: {
        notes: state => state.notes,
        noteId: s => id => s.notes.find(n => n.id === id)
    }
})
