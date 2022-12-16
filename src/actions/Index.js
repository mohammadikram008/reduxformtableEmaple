export const increment =(nr)=> {
    return {
        type: 'INCREMENT',
        payload:nr
    };
};
export const decreament = (dr) => {
    return {
        type: 'DECREMENT',
        payload:dr
    };
};
export const isSigned = () => {
    return {
        type: 'isSigned',
        
        
    };
};
export const notSign = () => {
    return {
        type: 'notSign',
        
        
    };
};