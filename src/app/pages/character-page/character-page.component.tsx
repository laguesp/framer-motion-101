import { ReactElement } from 'react'
import { Character, characters } from 'app/utils/character'
import cx from 'classnames'
import styles from './character-page.module.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export interface CharacterPageProps {}

const getRandomQuote = (quotes: string[]) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  return randomQuote
}

const CharacterPage = (props: CharacterPageProps): ReactElement => {
  const navigate = useNavigate()
  const params = useParams<{ characterId: string }>()

  const [randomQuoteNumber, setRandomQuoteNumber] = useState<number>(0)

  const character = useMemo<Character | undefined>(() => {
    if (params.characterId) {
      return characters[params.characterId]
    }
  }, [params])

  const navigateBack = () => {
    navigate('/')
  }

  const getAnotherQuote = () => {
    setRandomQuoteNumber((prevNum) => prevNum + 1)
  }

  if (!character) {
    return <Navigate to="/" />
  }

  return (
    <motion.div
      className={cx(styles.wrapper)}
      initial="initial"
      animate="animate"
      exit="exit">
      <header className={cx(styles.header)}>
        <motion.strong
          className={cx(styles.navigateBack)}
          onClick={navigateBack}
          variants={{
            initial: { x: -30, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -30, opacity: 0 },
          }}>
          Choose another character
        </motion.strong>
      </header>
      <main className={cx(styles.main)}>
        <article className={cx(styles.randomQuote)}>
          <AnimatePresence exitBeforeEnter={true}>
            <motion.h1
              key={randomQuoteNumber}
              className={cx(styles.text)}
              variants={{
                initial: { x: -30, opacity: 0 },
                animate: {
                  x: 0,
                  opacity: 1,
                },
                exit: {
                  x: 30,
                  opacity: 0,
                },
              }}>
              {getRandomQuote(character.memorableQuotes)}
            </motion.h1>
          </AnimatePresence>
          <motion.div
            className={styles.backgroundColor}
            style={{ backgroundColor: character.color }}
            variants={{
              initial: { x: '75%' },
              animate: { x: 0, transition: { duration: 0.5 } },
              exit: { x: '100%', transition: { duration: 1 } },
            }}
          />
        </article>
      </main>
      <footer className={cx(styles.footer)}>
        <motion.strong
          className={cx(styles.getAnotherQuote)}
          onClick={getAnotherQuote}
          variants={{
            initial: { x: -30, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -30, opacity: 0 },
          }}>
          Get another quote!!
        </motion.strong>
      </footer>
    </motion.div>
  )
}

export default CharacterPage
