export default function admin(state = 'LOCKED', action) {
    switch (action.type) {
        case 'LOG_IN':

            if( action.payload === '12345'){
                return 'UNLOCKED';
            }
            else {
                return 'LOCKED';
            }

        case 'LOG_OUT':
            return 'LOCKED';

        default:
            return state;
    }

}