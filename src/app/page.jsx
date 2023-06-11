"use client"
import WeatherPage from '@/component/page/weatherPage'
import RootLayout from './layout'
import './globals.css'
import { Provider } from 'react-redux'
import store from '../_reducers/store';
export default function Home() {
  // weatherApi()
  return (
    <Provider store={store}>
      <RootLayout>
        <WeatherPage />
      </RootLayout>
     </Provider>
  )
}
