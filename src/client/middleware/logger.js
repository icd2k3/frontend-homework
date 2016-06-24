import createLogger from 'redux-logger';

export const
    logger = createLogger({
        duration: true,
        stateTransformer: (state) => state.toJS(),
        timestamp: true
    });
