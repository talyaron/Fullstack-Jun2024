import './App.css';
import News from './view/components/news/News';

function App() {
  return (
    <div className="container">
      <News 
        title="The 80s Christmas TV horror that terrified Britain" 
        imgURL="https://ichef.bbci.co.uk/images/ic/1024x576/p0kdcjr3.jpg.webp" 
        description="First airing on Christmas Eve 1989, the original TV adaptation of Susan Hill's creepy novel The Woman in Black contains what some consider one of the greatest scares in screen history." 
        footer="6 hrs ago | Culture" 
      />
      <News 
        title="How bubbles make wine seem better" 
        imgURL="https://ichef.bbci.co.uk/images/ic/1024x576/p0bdn7by.jpg.webp" 
        description="A flute or coupe filled with a sparkling wine has become the very essence of celebration, but the bubbles can affect your enjoyment, how it tastes and teach us about other planets." 
        footer="31 Dec 2021 | Future" 
      />
    </div>
  );
}

export default App;
