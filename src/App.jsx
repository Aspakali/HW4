import {img1} from './assets/item1.jpeg'
import {img2} from './assets/item2.jpeg'
import {img3} from './assets/item3.jpeg'
import {img4} from './assets/item4.jpeg'
import {img5} from './assets/item4.jpeg'

function App() {
const data = [
  {
    image:{img1},
    productName: "Nord stage 3 88",
    price: "€ 3,999.00",
    description: "The Nord Stage 3 is the fifth generation of our successful Stage series continuing our vision of the ultimate instrument for the performing musician.",
  },

  {
    image:{img2},
    productName: "Line 6 Helix LT Guitar Processor",
    price: "€ 999.00",
    description: "The Line 6 Helix LT guitar processor features the same advanced HX Modeling technology found in the Helix Floor and Helix Rack processors.",
  },

  {
    image:{img3},
    productName: "Nord lead A1",
    price: "€ 1,599.00",
    description: "The Nord Lead A1 is a stunning sounding synthesizer with a simplified yet hugely powerful front panel interface.",
  },

  {
    image:{img4},
    productName: "Moog Subsequent 37",
    price: "€ 1,599.00",
    description: "The Moog Subsequent 37 is a (2-note) paraphonic analog synthesizer that builds upon the award-winning design of the ultra-powerful Sub 37 Tribute Edition.",
  },

  {
    image:{img5},
    productName: "Moog Minitaur 2010s Black",
    price: "€ 1,599.00",
    description: "The Moog Minitaur is a powerful, compact Analog Bass Synthesizer that features a classic one knob per function design.",
  }
]
  return (
    <>
        <parent value={data}></parent>
     
    </>
  )
}

export default App
