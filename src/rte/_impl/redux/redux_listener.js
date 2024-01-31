//INFO: a listener on redux store to add action handlers
//SEE: https://redux-toolkit.js.org/api/createListenerMiddleware

import { createListenerMiddleware } from '@reduxjs/toolkit'

export const listenerMiddleware= createListenerMiddleware()
