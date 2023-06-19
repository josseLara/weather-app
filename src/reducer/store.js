import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/weather';

export default configureStore({
  reducer: {
    weather: weatherReducer
  }
})