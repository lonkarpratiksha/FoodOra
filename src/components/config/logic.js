export const isPresentInFavorites=(favorites,restaurant)=>{

    // console.log("my all favorites are:- ");
    // console.log(favorites);
    for(let item of favorites){
        if(restaurant.id===item.id){
            return true
        }
    }
    return false;
}