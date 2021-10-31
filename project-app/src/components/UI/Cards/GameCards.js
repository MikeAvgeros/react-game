// import { Fragment } from 'react';
// import { Card } from '@mui/material';
import Stack from '@mui/material/Stack'
import GameCard from './Card';

const GameCards = () => {
    const cardIds = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
    ]

    const heroes = []
    let i = 0;

    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * max);
    }

    while (i < 4) {
        const randomIndex = getRandomIndex(10);
        const randomHero = cardIds[randomIndex];

        if (heroes.includes(randomHero)) continue;
        heroes.push(randomHero);
        i++;
        
    }

    console.log(heroes);

    


    return (
        <Stack direction="row" spacing={2}>
            {heroes.map(hero => <GameCard key={hero} hero={hero} />)}
        </Stack>
    );
}


export default GameCards;