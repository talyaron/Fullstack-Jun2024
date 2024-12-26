import './App.css'
import yoskPic from './assets/pics/aaa.png'
import { Box, Box2 } from './view/components/box/Box'
import { CSSProperties } from 'react';

function App() {

  const display: CSSProperties = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'flex-start', 
  };

  const itemStyle: CSSProperties = {
    textAlign: 'center',
    maxWidth: '300px',
  };

  const imageStyle: CSSProperties = {
    width: '100%', // התאמת התמונה לגודל ההורה
    height: 'auto',
    borderRadius: '8px', // עיגול פינות אופציונלי
  };

  return (
    <>
      <p>Yosef Fovrite</p>
      <div style={display}> 
        <div style={itemStyle}>
           <img alt="yosef pic" src={yoskPic} style={imageStyle}/>
           <Box text="hasidjsaijdijadiasjdijsijasdey" />
        </div>
        <div style={itemStyle}>
           <img alt="yosef pic" src={yoskPic} style={imageStyle}/>
           <Box text="haoijasdijasiasjijdijasijaijsaijasidasjey" />
        </div>
      </div>
      <h1>Yosef Forvrite</h1>
      <div style={display}> 
      <Box2 image='https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-mobile/season-5/global_assets/images/2023/03/fifa-mobile-grid-tile-season-5-16x9-1.jpg.adapt.crop191x100.1200w.jpg' title='new new' text='hey' />
      <Box2 image='https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-mobile/season-5/global_assets/images/2023/03/fifa-mobile-grid-tile-season-5-16x9-1.jpg.adapt.crop191x100.1200w.jpg' title='new new' text='hey' />
      </div>
    </>
  );
}

export default App
