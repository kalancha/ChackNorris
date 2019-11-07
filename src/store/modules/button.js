export default {
    actions:{
        async fetchItems(ctx){
           const res = await fetch(
             "https://api.chucknorris.io/jokes/random"
           );
           const item = await res.json();

           ctx.commit('updateItem', item);
        }
    },
    mutations:{
        updateItem(state, item){
            
            state.item.push(item);
        }
    },
    state:{
        item:  []
    },
    getters:{
        items(state){
            return state.item
        }
    }

}