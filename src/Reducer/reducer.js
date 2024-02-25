const initialState={
    cartNumber:1
}
export const handleAddToCart=(state=initialState, action)=>{
  switch(action.type){
    case 'addToCart': return {...state, cartNumber: state.cartNumber + 1};
    default:
        return state;
  }
}