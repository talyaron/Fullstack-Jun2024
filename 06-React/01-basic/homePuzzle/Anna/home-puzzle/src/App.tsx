
import './App.css'
import Article from './View/componense/Article/Article'

export interface ArticleProps{
  proImg : string,
  subTitle : string,
  postTime : string,
  title : string,
  post : string
  postImg : string
}

const articles : ArticleProps [] = [
  { 
    proImg : "https://us4-cdn.inside-graph.com/custom/1-CAR_Avatar_icon.svg?1736437326100" , 
    title : "Tank Must de Cartier watch", 
    subTitle :"@annaPetro",
    postTime  : "1",
    post : 'Louis Cartier created the Tank watch in 1917. A legend was born. The first prototype was presented as a gift to General Pershing some years before the watch was introduced into the market in 1919. The lugs blend seamlessly into the bare edges of the flat vertical brancards, giving the watch its unique aesthetic. The clean, crisp lines have proved hugely popular with a free-spirited, elegant clientèle. The now-iconic Tank watch has inspired countless variations, yet managed to preserve its distinctive identity.' ,
    postImg: "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcbf1888d/images/large/5a6e30c284a059c2bb66ec1cd5660cc7.png?sw=750&sh=750&sm=fit&sfrm=png" 
  },
  {
    proImg : "https://diamondsourcenyc.com/cdn/shop/articles/rolex-logo_1_520x.jpg?v=1727380631",
    title : "Datejust 36",
    subTitle :"@annaPetro",
    postTime  : "2",
    post: "This Oyster Perpetual Datejust 36 in Oystersteel and white gold features a mint green dial and a Jubilee bracelet.",
    postImg: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2024/upright-c/m126234-0051"
  },
  {
    proImg : "https://us4-cdn.inside-graph.com/custom/1-CAR_Avatar_icon.svg?1736437326100",
    title : "Santos de Cartier watch",
    subTitle: "@annaPetro",
    postTime: "3",
    post: '1904, Louis Cartier granted the wish of the famous Brazilian aviator Alberto Santos Dumont: to be able to tell time while flying. The birth of one of the first ever wristwatches sealed the bonds of friendship between these two pioneers. ',
    postImg : "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8c673ac9/images/large/5422c5fc673d5f9a8a41a1aecb8a87fa.png?sw=750&sh=750&sm=fit&sfrm=png"
  }

];
function App() {


  return (
    <>
    {articles.map((art,index) =>
      <Article  key={index} article={art} ></Article>
  )}
    </>
  )
}

export default App
