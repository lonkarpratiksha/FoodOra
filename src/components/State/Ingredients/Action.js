import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionTypes";



export const getIngredientsOfRestaurant=({id,jwt})=>{
    return async (dispatch)=>{;
        try{
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}`,{
                headers: {
                    Authorization: `Bearer ${jwt}`, 
                }
            });
            console.log("get all ingredients",response.data);
            dispatch({type:GET_INGREDIENTS,payload:response.data});
        }catch(error){
            console.log("catch error", error);
        }
    }
}

export const createIngredient=({data,jwt})=>{
    return async (dispatch)=>{;
        try{
            const response = await api.post(`/api/admin/ingredients`,data,{
                headers: {
                    Authorization: `Bearer ${jwt}`, 
                }
            });
            console.log("create ingredients",response.data);
            dispatch({type:CREATE_INGREDIENT_SUCCESS,payload:response.data});
        }catch(error){
            console.log("catch error", error);
        }
    }
}


export const createIngredientCategory=({data,jwt})=>{
    return async (dispatch)=>{;
        try{
            const response = await api.post(`/api/admin/ingredients/category`,data,{
                headers: {
                    Authorization: `Bearer ${jwt}`, 
                }
            });
            console.log("create ingredients category",response.data);
            dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
        }catch(error){
            console.log("catch error", error);
        }
    }
}

export const getIngredientCategory=({id,jwt})=>{
    return async (dispatch)=>{;
        try{
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`,{
                headers: {
                    Authorization: `Bearer ${jwt}`, 
                }
            });
            console.log("get ingredients category",response.data);
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
        }catch(error){
            console.log("catch error", error);
        }
    }
}


export const updateStockOfIngredient=({id,jwt})=>{
    return async (dispatch)=>{;
        try{
            const {data} = await api.put(`/api/admin/ingredients/${id}/stoke`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`, 
                }
            });
            console.log("update ingredients stock ",data);
            dispatch({type:UPDATE_STOCK,payload:data});
        }catch(error){
            console.log("catch error", error);
        }
    }
}
