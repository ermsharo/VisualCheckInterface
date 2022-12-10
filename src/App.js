import React, { useRef } from 'react';
import sample from './images/sample.png';
import pattern from './images/pattern.png'
import "./cardStyle.css"
import * as htmlToImage from 'html-to-image';
import styled from 'styled-components'
import GeneratedCard from "./GeneratedCard";
const Teste = styled.div`
padding: 20px;
font-family: 'Courier New', Courier, monospace;
background-image: url("https://php-noise.com/images/noise_r155-g104-b233-t50-tS7-bW0-mB-mu0.4-st5_53b88b15060f41621edd48c03cba940f.png");
`

const CardName = styled.div`

background-color: white;
color: black;
font-family: 'Yeseva One', cursive;
font-weight: bold;
font-size: calc(46vw * 0.05);
line-height:  calc(46vw * 0.1);
text-align: center;
border-radius: 15px;
display: flex;
justify-content: center;
flex-direction: column;
border: calc(46vw * 0.01) solid black;


background-color: #d3c390;
background-image: url("https://i.ibb.co/HYYS0fF/noise-hex-d3c390-t50-t-S7-b-W0-m-B-mu1-5-st5-7064a5e0643fb4eb360f3e1edcb15ed9.png");



`

const CardStruct = styled.div`
background-color: #e1b75b;
padding: 5%;
background-image: url("https://i.ibb.co/r34cCD8/noise-hex-e1b75b-t50-t-S7-b-W0-m-B-mu1-5-st5-ffbdccc6aabd22eba1abbb61200e511e.png");
border-radius: calc(46vw * 0.06) ;
border: calc(46vw * 0.025) solid black;

`

const CardImage = styled.div`
width: 91%;

aspect-ratio: 1 / 1;
margin: auto;
img{
  border-radius: calc(46vw * 0.025) calc(46vw * 0.025) 0px 0px;
  width: 100%;
  height: 100%;
}
`

const Description = styled.div`
background-color: #d7d4ca;
width: 88%;
margin: auto;
margin-top: -0.6vw;
background-image: url("https://i.postimg.cc/Prwt8nTK/noise-hex-d7d4ca-t50-t-S7-b-W0-m-B-mu1-5-st5-35d14bf23c1fd498fb8f7716d9fdaf04.png");

border-radius: 0px 0px 10px 10px;
padding: 2%;
`

const DescriptionText = styled.div`
padding: 2%;
font-size: calc(46vw * 0.03);
font-family: 'Merriweather', serif;

`

const DescriptionType = styled.div`
padding: 0.5%;
font-size: calc(46vw * 0.03);

`

const CardAtributes = styled.div`
padding: 0.5%;
font-size: calc(46vw * 0.04);
text-align: right;

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
 <GeneratedCard/>
    </div>
  );
}

export default App;