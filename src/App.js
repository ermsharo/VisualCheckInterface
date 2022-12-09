import React, { useRef } from 'react';
import sample from './images/sample.png';
import pattern from './images/pattern.png'
import "./cardStyle.css"
import * as htmlToImage from 'html-to-image';
import styled from 'styled-components'

const Teste = styled.div`
padding: 20px;
font-family: 'Courier New', Courier, monospace;
background-image: url("https://php-noise.com/images/noise_r155-g104-b233-t50-tS7-bW0-mB-mu0.4-st5_53b88b15060f41621edd48c03cba940f.png");
`

function App() {

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  }

  return (
    <div className="App">
      <button onClick={downloadImage}>Download Image</button>

      <div id='domEl' ref={domEl}>
      <div class="card" style={
{"backgroundImage": "url(./images/sample.png)"}
      }>
        <div class="cardName">Infernoble Arms</div>

        <div class="image"> <img alt = "cardimage " id = "imgStuct" src = {sample}/></div>

        <div class="description">
            <div>
                <strong>Spell Card</strong>

            </div>

            <div>
                While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your
                Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster
                is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it,
                also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only
                use 1 ""Infernoble Arms - Durendal"" effect per turn, and only once that turn.

            </div>
<Teste>asdasdasd</Teste>
            <div>
                <strong>Atk:500/Def:1500</strong>

            </div>



        </div>

    </div>
      </div>

    </div>
  );
}

export default App;