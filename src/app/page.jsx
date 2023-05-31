import WeatherPage from '@/component/page/weatherPage'
import RootLayout from './layout'
import './globals.css'
import weatherApi from './api/weatherApi'

export default function Home() {
  weatherApi()
  return (
    <RootLayout>
      <WeatherPage />
    </RootLayout>
  )
}
