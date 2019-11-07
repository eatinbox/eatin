import store from '../../store/store'
import NavigatorService from '../../Utils/NavigatorService'

const is_anon = (func) => {
    const user = store.getState().userReducer.session_user

    if(user.isAnon){
       return NavigatorService.navigate('RegisterScreen')
    }

    return func();
}

export default is_anon;