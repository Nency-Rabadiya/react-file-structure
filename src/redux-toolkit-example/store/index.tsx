import {configureStore} from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-unresolved
import userSlice from "./slices/userSlice.tsx"


const store = configureStore({
    reducer : {
        users : userSlice,
    }
})

type AppState = ReturnType<typeof store.getState>

export {store, AppState};