
import './App.css'
import Article from './view/components/article/Article'

function App() {

  return (
    <>
      <Article title="The animals that give each other gifts" text="We may think that gift giving is a purely human trait, but it turns out many other animals also treat their mates and companions." />
      <hr />
      <Article title="Russian ship under US sanctions sinks after engine room blast" text="Ursa Major ran into trouble in the Mediterranean between Spain and Algeria, with two crew still missing." time="35 mins ago" place="| World" /> 
      <hr />
      <Article title="Ex-Abercrombie & Fitch CEO has dementia, lawyers say" text="The legal team behind Mike Jeffries, arrested earlier this year on sex trafficking charges, has requested a hearing to determine his fitness to stand trial." time="2 hrs ago" place="| US & Canada" />
      <hr />
      <Article title="The US town where it’s the law to own a gun" text="Kennesaw, Georgia became the first American town to require people to own a gun in the 1980s." time ="16 hrs ago " place="| US & Canada" />
    </>
  )
}

export default App
