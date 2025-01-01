import "./App.css";
import Image1 from "./view/compoments/image/Image";
import Text1 from "./view/compoments/text/Text";
import Title from "./view/compoments/title/Title";
import userImage from './assets/x.webp'

function App() {
  return (
    <>
      <Title
        text={"YonatanSilam"}
        imageUrl={userImage}
        time={"31/12/2024"}
      />
      <Text1
        text={
          "yonatan ijbasjh iufgsaiuv gaib iagwi jwagiucsb c oiejfoif   hiufidsh shfoihfo ihf irhoirg hi h nfndf jgne jng s kjdfng kjng jkfbkjd viner jkntn jknkns nonien"
        }
      />
      <Image1 imageUrl={userImage} />
    </>
  );
}

export default App;
