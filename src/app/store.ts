import { configureStore } from '@reduxjs/toolkit'

type Appstate = ReturnType<typeof store.getState>

const store = configureStore({
})

export { store, Appstate }