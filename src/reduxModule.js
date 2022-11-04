
const initial = {
    counter: 0, 
    status: false,
    name: "dũng",
    products: [
        {
            id: 1,
            name: "api", 
        }
    ]
}

export const reducer = (state = initial, action) => {
    switch(action.type){
        case "increment":
            return {
                ...state, 
                counter: state.counter + action.value
            }
        case "product": 
            return {
                ...state, 
                products: [...state.products, action.value]
            }
        default: 
            return state;
    }
}
// state chỉ thay đổi trong reducer

export const countFunc = detal => {
    return {
        type: "increment",
        value: detal
    }
}


export const updateProducts = obj => {
    return {
        type: "product",
        value: obj
    }
}