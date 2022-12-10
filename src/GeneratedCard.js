import React, { useRef,useState ,useEffect } from 'react';
import "./cardStyle.css"
import * as htmlToImage from 'html-to-image';
import styled from 'styled-components'
import { getCardInfoById } from './utils/cardInfo';



const CardName = styled.div`

background-color: white;
color: black;
font-family: 'Yeseva One', cursive;
font-weight: bold;
font-size: calc(46vw * 0.035);
line-height:  calc(46vw * 0.1);
text-align: center;
border-radius: 15px;
display: flex;
justify-content: center;
flex-direction: column;
border: calc(46vw * 0.01) solid black;
margin-bottom: calc(46vw * 0.02);
text-overflow: ellipsis;

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
max-height: calc(46vw * 0.535);
min-height: calc(46vw * 0.535);
display: flex;
flex-direction: column;
justify-content: space-between;
text-overflow: ellipsis;
`

const DescriptionText = styled.div`
padding: 2%;
font-size: calc(46vw * 0.027);
font-family: 'Merriweather', serif;
text-overflow: ellipsis;

`

const DescriptionType = styled.div`
padding: 0.5%;
font-size: calc(46vw * 0.03);

`

const CardAtributes = styled.div`
padding: 0.6%;
font-size: calc(46vw * 0.031);
text-align: right;

`


function GeneratedCard({ cardId , count}) {

    useEffect(
        () => {
        console.log("count from here", count)
        downloadImage();
        },
        [count]
    );


    const domEl = useRef(null);

    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        const link = document.createElement('a');
        link.download = `${cardId}.png`;
        link.href = dataUrl;
        link.click();
    }

    const cardInfo =  getCardInfoById(cardId);
    console.log("get card by id ",getCardInfoById(cardId))
    

    return (
        <div className="App">
            <button onClick={downloadImage}>Download Image</button>

            <div id='domEl' ref={domEl}>
                <div class="card" >
                    <CardStruct><CardName><div>{cardInfo.Name}</div></CardName>

                        <CardImage><img alt = {cardInfo.name} src={cardInfo.image} /></CardImage>
                        <Description>

                            <DescriptionText >
                                <div>
                                    <DescriptionType>   <strong>[ {cardInfo.Type} ]</strong></DescriptionType>


                                </div>
                                <div>
                                    {cardInfo.Description}

                                </div>
                            </DescriptionText>
                            <CardAtributes> <strong>Atk:{cardInfo.atk}/Def:{cardInfo.def}</strong></CardAtributes>

                        </Description>

                    </CardStruct>



                </div>
            </div>

        </div>
    );
}

export default GeneratedCard;