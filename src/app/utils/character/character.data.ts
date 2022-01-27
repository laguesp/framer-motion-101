import { Character } from './character.types'

export const characters: Record<Character['id'], Character> = {
  'eric-cartman': {
    id: 'eric-cartman',
    age: 10,
    color: '#FF5E5B',
    imageUrl: '/assets/eric-cartman.png',
    name: 'Eric Theodore Cartman',
    memorableQuotes: [
      'HOW DO I REEEEECH THESE KEEEEEDS!?!?!?!?',
      'I am a COP and you will respect my authoritah!',
      'I’m not fat! I’m festively plump!',
    ],
  },
  'kenny-mccormick': {
    id: 'kenny-mccormick',
    age: 9,
    color: '#F4D35E',
    imageUrl: '/assets/kenny-mccormick.png',
    name: 'Kenneth McCormick',
    memorableQuotes: [
      "I can't die",
      'WOOO HOO HOO!',
      'Mrrph rmph rmmph mrrphh!',
    ],
  },
  'kyle-broflovski': {
    id: 'kyle-broflovski',
    age: 9,
    color: '#5CF64A',
    imageUrl: '/assets/kyle-broflovski.png',
    name: 'Kyle Broflovski',
    memorableQuotes: [
      'Kick the baby!',
      "Don't you see? I learned something today...",
      'Oh my god, I killed Kenny!',
    ],
  },
  'stan-marsh': {
    id: 'stan-marsh',
    age: 10,
    color: '#034078',
    imageUrl: '/assets/stan-marsh.png',
    name: 'Stanley Marsh',
    memorableQuotes: [
      'Oh my god, they killed Kenny!',
      'AH-TAHHH',
      'I shall return. Do not attempt to stop me.',
    ],
  },
}
