import Twitter from './view/components/twitter/Twitter';
import profile from './assets/images/profile.jpg'
import profile2 from './assets/images/profile2.jpg'
import profile3 from './assets/images/profile3.jpg'

function App() {
  return (
    <div>
       <Twitter
        username="Joe Biden"
        picture={profile}
        tweet="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, earum hic rem ab atque dignissimos repellat cumque impedit, velit nemo adipisci, nostrum voluptatem? Deserunt incidunt repudiandae, praesentium sint architecto nulla."
        tweetURL ="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"
        like={51}
        comment={32}
        share={12}
      />
             <Twitter
        username="D. Trump"
        picture={profile2}
        tweet="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, earum hic rem ab atque dignissimos repellat cumque impedit, velit nemo adipisci, nostrum voluptatem? Deserunt incidunt repudiandae, praesentium sint architecto nulla."
        tweetURL ="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"
        like={130}
        comment={52}
        share={13}
      />
             <Twitter
        username="Rick Morty"
        picture={profile3}
        tweet="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, earum hic rem ab atque dignissimos repellat cumque impedit, velit nemo adipisci, nostrum voluptatem? Deserunt incidunt repudiandae, praesentium sint architecto nulla."
        tweetURL ="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"
        like={11}
        comment={2}
        share={2}
      />
    </div>
  );
}

export default App;
