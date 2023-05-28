import WeatherPage from '@/component/page/weatherPage'
import RootLayout from './layout'
import './globals.css'
export default function Home() {
  return (
    <RootLayout>
      <WeatherPage />
    </RootLayout>
  )
}
