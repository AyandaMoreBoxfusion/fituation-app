import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '../providers/users'
import { ExerciseProvider } from '../providers/exercise'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExerciseProvider>
      <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </ExerciseProvider>
    
  
  )
}

export default MyApp
