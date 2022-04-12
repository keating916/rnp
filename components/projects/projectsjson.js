import Calculator from './reactCalc'
import Goog from './googReact'
import Etch from './etchReact'
import RPS from './rpsReact'
import Quote from './simpsonQuote'


const projectData = [
    {
        id: 'reactRps',
        func: RPS,
        img: '/assets/rps.png',
        title: "Rock Paper Scissors",
        description: 'Text based RPS game'
    },
    {
        id: 'goog',
        func: Goog,
        img: "/assets/goog.webp",
        title: "Google Home Page",
        description: "Reproduction of Google's Home page",
    },
    {
        id: 'reactCalc',
        func: Calculator,
        img: '/assets/snip.png',
        title: 'Javascript Calculator',
        description: "Browser calculator using React.js"
    },
    {
        id: 'reactEtch',
        func: Etch,
        img: '/assets/etch.jpg',
        title: "Etch-A-Sketch",
        description: "Etch-A-Sketch with your mouse!",
    }, 
    {
        id: 'quote',
        func: Quote,
        img: '/assets/simpsons.png',
        title: "Simpsons Quote Generator",
        description: "Funny Quotes pulled from an API"
    }, 
    
]

export default projectData;