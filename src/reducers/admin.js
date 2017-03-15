export default function admin(state = 'LOCKED', action) {
    if(action.type === 'LOG_IN' && action.payload === '12345') {
        return 'UNLOCKED';
    } else {
        return 'LOCKED';
    }


}