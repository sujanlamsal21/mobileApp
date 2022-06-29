import {useSelector} from 'react-redux';
function useConfigHook() {
    const loginState = useSelector((state) => state);
    const config = {
        headers: {
            "Content-type": "application/json",
            "Accept":"application/json",
            "Authorization": "Bearer "+loginState.loginReducer.token,
        },
    }
    return config;
}
export default useConfigHook;