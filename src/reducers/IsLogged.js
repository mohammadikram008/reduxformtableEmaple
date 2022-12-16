


const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'isSigned':
            return !state ;
        case 'notSign':
            return false ;   
        default:
            return false;
    }

}
export default isLoggedReducer;