import store from '../../store/store'

const is_anon = (func) => {
    const user = store.getState().userReducer.session_user
    const nav = store.getState().globalReducer._navigate

    if(user.isAnon){
       return nav.navigate('RegisterScreen')
    }

    return func();
}

export default is_anon;