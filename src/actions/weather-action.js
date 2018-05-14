
function showData(result){
    return{
        type: 'data',
        payload: {
            data: result
        }
    }
}

export function fetchData(url){
    return (dispatch,getstate)=> {
        fetch(url)
        .then((res)=> {
            return res.json();
        })
        .then((result)=> {
            dispatch(showData(result));
        });
    }
    
}

