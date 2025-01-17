export const isPresentInFavorites=(favorites,restaurant)=>{

    for(let item in favorites){
        if(restaurant.id===item.id){
            return true
        }
    }
    return false;
}