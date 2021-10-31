import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import api from "../../Api/Api";
import './card.css';

const GameCard = ({ hero }) => {
  const [heroData, setHeroData] = useState([]);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await api.get(hero);
      setHeroData(data);
      setReady(true);
    };
    fetchApi();
  }, [hero]);

  const handleClick = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const flip = () => {
    const flipCard = document.querySelector('.card')
    flipCard.classList.toggle('is-flipped');
  }

  return ready ? (
    <div className='scene'>
      <div className='card' onClick={flip} >
        <div className='card__face card__face--front'>
          <Card>
            <CardContent 
              sx={{height:600, backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2019/07/07/06/27/superhero-background-4321804__480.jpg" + ")"}}
            >
            </CardContent>
          </Card>
        </div>
        <div className='card__face card__face--back'>
          <Card sx={{height:600}}>
            <CardMedia
            component="img"
            height="250"
            image={heroData.image.url}
            alt="hero image"
            />
            <CardContent sx={{ backgroundColor: 'slategray' }}>
              <Typography sx={{ textAlign: 'center', marginBottom: 2 }} gutterBottom variant="h4" component="div">
              {heroData.name}
              </Typography>
              <Button onClick={handleClick} sx={{ backgroundColor: 'purple', marginBottom: 1 }} variant="contained">
              {`Combat: ${heroData.powerstats.combat}`}
              </Button>
              <Button onClick={handleClick} sx={{ backgroundColor: 'purple', marginBottom: 1 }} variant="contained">
              {`Durability: ${heroData.powerstats.durability}`}
              </Button>
              <Button onClick={handleClick} sx={{ backgroundColor: 'purple', marginBottom: 1 }} variant="contained">
              {`Intelligence: ${heroData.powerstats.intelligence}`}
              </Button>
              <Button onClick={handleClick} sx={{ backgroundColor: 'purple', marginBottom: 1 }} variant="contained">
              {`Power: ${heroData.powerstats.power}`}
              </Button>
              <Button onClick={handleClick} sx={{ backgroundColor: 'purple', marginBottom: 1 }} variant="contained">
              {`Speed: ${heroData.powerstats.speed}`}
              </Button>
              <Button onClick={handleClick} sx={{ backgroundColor: 'purple', marginBottom: 1 }} variant="contained">
              {`Strength: ${heroData.powerstats.strength}`}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    // <Card sx={{ maxWidth: 250, maxHeight: 600 }}>
    //   <CardMedia
    //     component="img"
    //     height="200"
    //     image={heroData.image.url}
    //     alt="hero image"
    //   />
    //   <CardContent>
    //     <Typography
    //       sx={{ textAlign: "center", marginBottom: 2 }}
    //       gutterBottom
    //       variant="h4"
    //       component="div"
    //     >
    //       {heroData.name}
    //     </Typography>
    //     <Button
    //       sx={{ backgroundColor: "purple", marginBottom: 2 }}
    //       variant="contained"
    //       value={heroData.powerstats.combat}
    //       onClick={handleClick}
    //     >
    //       {`Combat: ${heroData.powerstats.combat}`}
    //     </Button>
    //     <Button
    //       sx={{ backgroundColor: "purple", marginBottom: 2 }}
    //       variant="contained"
    //       value={heroData.powerstats.durability}
    //       onClick={handleClick}
    //     >
    //       {`Durability: ${heroData.powerstats.durability}`}
    //     </Button>
    //     <Button
    //       sx={{ backgroundColor: "purple", marginBottom: 2 }}
    //       variant="contained"
    //       value={heroData.powerstats.intelligence}
    //       onClick={handleClick}
    //     >
    //       {`Intelligence: ${heroData.powerstats.intelligence}`}
    //     </Button>
    //     <Button
    //       sx={{ backgroundColor: "purple", marginBottom: 2 }}
    //       variant="contained"
    //       value={heroData.powerstats.power}
    //       onClick={handleClick}
    //     >
    //       {`Power: ${heroData.powerstats.power}`}
    //     </Button>
    //     <Button
    //       sx={{ backgroundColor: "purple", marginBottom: 2 }}
    //       variant="contained"
    //       value={heroData.powerstats.speed}
    //       onClick={handleClick}
    //     >
    //       {`Speed: ${heroData.powerstats.speed}`}
    //     </Button>
    //     <Button
    //       sx={{ backgroundColor: "purple", marginBottom: 2 }}
    //       variant="contained"
    //       value={heroData.powerstats.strength}
    //       onClick={handleClick}
    //     >
    //       {`Strength: ${heroData.powerstats.strength}`}
    //     </Button>
    //   </CardContent>
    // </Card>
  ) : null;
};

export default GameCard;
