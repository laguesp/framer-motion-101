import { IconContext, IconProps } from 'phosphor-react'
import { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export interface ProvidersProps {
  children: ReactNode
}

const iconContectValue: IconProps = {
  color: 'currentColor',
  size: '1em',
  weight: 'bold',
}

const Providers = (props: ProvidersProps): ReactElement => {
  return (
    <IconContext.Provider value={iconContectValue}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </IconContext.Provider>
  )
}

export default Providers
