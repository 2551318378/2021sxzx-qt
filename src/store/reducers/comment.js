const UPDATE = 'UPDATE'



const reducer = (state = 0, action)=>{
  switch (action.type){
    case UPDATE:
      return state+1
    default:
      return state
  }
}

export default reducer