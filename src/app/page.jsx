"use client"
import WeatherPage from '@/component/page/weatherPage'
import APP from './_app'
import { Provider } from 'react-redux'
import store from '../reducer/store';
export default function Home() {
  // weatherApi()
  return (
    <APP>
      <Provider store={store}>
        <WeatherPage />
      </Provider>
    </APP>
  )
}
