import { AnimatePresence, motion } from 'framer-motion'
import { Character, characters } from 'app/utils/character'
import { MouseEvent, ReactElement } from 'react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import cx from 'classnames'
import styles from './home-page.module.css'

export interface HomePageProps {}

const charactersArray = Object.values(characters)

const HomePage = (props: HomePageProps): ReactElement => {
  const navigate = useNavigate()

  const [currentCharacterIndex, setCurrentCharacterIndex] = useState<number>(0)

  const currentCharacter = useMemo<Character>(() => {
    return charactersArray[currentCharacterIndex]
  }, [currentCharacterIndex])

  const getNextSlide = () => {
    setCurrentCharacterIndex(
      (currentIndex) => (currentIndex + 1) % charactersArray.length
    )
  }

  const navigateToQuotesPage = (event: MouseEvent<HTMLHeadingElement>) => {
    event.stopPropagation()
    navigate(`/quotes/${currentCharacter.id}`)
  }

  return (
    <motion.div
      className={cx(styles.wrapper)}
      onClick={getNextSlide}
      initial="initial"
      animate="animate"
      exit="slideOut">
      <header className={cx(styles.header)}>
        <motion.strong
          variants={{
            initial: { x: -30, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -30, opacity: 0 },
          }}>
          South Park Characters
        </motion.strong>
      </header>
      <main className={cx(styles.main)}>
        <AnimatePresence exitBeforeEnter={true}>
          <motion.article
            key={currentCharacterIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cx(styles.slider)}>
            <motion.h1
              onClick={navigateToQuotesPage}
              className={cx(styles.characterName)}
              variants={{
                animate: {
                  transition: {
                    duration: 0.5,
                    delayChildren: 1,
                    staggerChildren: 0.1,
                  },
                },
                exit: {
                  transition: {
                    duration: 0.5,
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}>
              {currentCharacter.name.split(' ').map((word) => (
                <motion.span
                  key={word}
                  className={cx(styles.word)}
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
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.img
              className={cx(styles.characterImage)}
              src={currentCharacter.imageUrl}
              alt={currentCharacter.name}
              variants={{
                initial: { right: 30, opacity: 0 },
                animate: {
                  right: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                },
                exit: {
                  right: -30,
                  opacity: 0,
                  transition: { duration: 0.5 },
                },
              }}
            />
            <motion.div
              className={cx(styles.backgroundColor)}
              style={{ backgroundColor: currentCharacter.color }}
              variants={{
                initial: { x: '-100%' },
                animate: { x: '75%', transition: { duration: 1 } },
                exit: {
                  x: '100%',
                  transition: { duration: 0.5, delay: 0.5 },
                },
              }}
            />
          </motion.article>
        </AnimatePresence>
      </main>
      <footer className={cx(styles.footer)}>
        <strong className={cx(styles.slideCount)}>
          <AnimatePresence>
            <motion.span
              key={currentCharacterIndex}
              className={cx(styles.currentSlide)}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}>
              {currentCharacterIndex + 1}
            </motion.span>
          </AnimatePresence>
          <span>/ {charactersArray.length}</span>
        </strong>
      </footer>
    </motion.div>
  )
}

export default HomePage
