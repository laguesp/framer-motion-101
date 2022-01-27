import { AnimatePresence } from 'framer-motion'
import { ReactElement } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CharacterPage from 'app/pages/character-page'
import HomePage from 'app/pages/home-page'

export interface AppProps {}

const App = (props: AppProps): ReactElement => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes/:characterId" element={<CharacterPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
