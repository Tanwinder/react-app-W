const weatherdata = (state=['68'], action) => {
    switch(action.type){
        case 'data':
        return action.payload.data;
        break;
        default:
        return state;
    }
}

export default weatherdata;