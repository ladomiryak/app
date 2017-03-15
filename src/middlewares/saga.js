import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

export function runSaga() {
    return sagaMiddleware.run();
}

export default sagaMiddleware;
