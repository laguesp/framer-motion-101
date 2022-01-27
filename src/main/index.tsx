import './styles/global.css'
import { ReactElement } from 'react'
import App from './components/app.component'
import Providers from './components/providers.component'

export interface MainProps {}

const Main = (props: MainProps): ReactElement => {
  return (
    <Providers>
      <App />
    </Providers>
  )
}

export default Main
