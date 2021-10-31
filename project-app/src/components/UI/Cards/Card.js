import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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

  const flip = (e) => {
    console.log(e.target)
    const flipCard = document.querySelector('.card')
    flipCard.classList.toggle('is-flipped');
  }

  return ready ? (
    <div className='scene'>
      <div className='card' onClick={flip} >
        <div className='card__face card__face--front'>
          <Card sx={{height:'600'}}>
            <CardContent 
              sx={{backgroundImage: 
                "url(" + "https://cdn.pixabay.com/photo/2019/07/07/06/27/superhero-background-4321804__480.jpg" + ")"}}
            >
            </CardContent>
          </Card>
        </div>
        <div className='card__face card__face--back'>
          <Card sx={{height: 'fit-content' }}>
            <CardMedia
            component="img"
            height="250"
            image={heroData.image.url}
            alt="hero image"
            />
            <CardContent sx={{ backgroundColor: 'slategray' }}>
              <Typography 
                sx={{ textAlign: 'center', marginBottom: 2 }} 
                gutterBottom 
                variant="h4" 
                component="div"
              >
                {heroData.name}
              </Typography>
              <Stack direction="column" spacing={1}>
                <Button 
                  onClick={handleClick} 
                  sx={{ backgroundColor: 'purple' }} 
                  variant="contained"
                >
                  {`Combat: ${heroData.powerstats.combat}`}
                </Button>
                <Button 
                  onClick={handleClick} 
                  sx={{ backgroundColor: 'purple' }} 
                  variant="contained"
                >
                  {`Durability: ${heroData.powerstats.durability}`}
                </Button>
                <Button 
                  onClick={handleClick} 
                  sx={{ backgroundColor: 'purple' }} 
                  variant="contained"
                >
                  {`Intelligence: ${heroData.powerstats.intelligence}`}
                </Button>
                <Button 
                  onClick={handleClick} 
                  sx={{ backgroundColor: 'purple' }} 
                  variant="contained"
                >
                  {`Power: ${heroData.powerstats.power}`}
                </Button>
                <Button 
                  onClick={handleClick} 
                  sx={{ backgroundColor: 'purple' }} 
                  variant="contained"
                >
                  {`Speed: ${heroData.powerstats.speed}`}
                </Button>
                <Button 
                  onClick={handleClick} 
                  sx={{ backgroundColor: 'purple' }} 
                  variant="contained"
                >
                  {`Strength: ${heroData.powerstats.strength}`}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ) : null;
};

export default GameCard;
