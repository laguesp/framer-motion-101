# Framer Motion 101 | Luis Espinosa @ Improving - JS Adopters Talk

## Project Overview

Just an animated "app" using latest react version, bootstraped with CRA. It
should work similarly with Remix, Next, Gatsby, or any other React framework.

Here's the
[link to the talk slides](https://improving-my.sharepoint.com/:p:/p/luis_aguilar/EYqO2-kzBbFBiTKX774iVqIBjWt9KFoilRBWIffITJp54g?e=AgqiyA).

---

The latest version of framer motion uses .mjs extension files, which webpack 4
doesn't support.

\*\* Looks like it's supported in the latest webpack 4 version, but if you're
using an older one, it won't be supported.

You can downgrade to framer-motion 5 or add this
[config rule](https://github.com/formatjs/formatjs/issues/1395#issuecomment-518823361)
to your webpack (eject or use any package to extend the config).

## Packages Needed

- framer-motion
- react-router-dom

## Optional Stuff

- styled-components
- css-modules

## Integrating framer-motion and styled-components

You can create a styled component off of a motion component in this way:

```javascript
import { motion } from 'framer-motion'
import styled from 'styled-components'

const AnimatedTitle = styled(motion.h1)`
  /** Your styles here **/
`
```
