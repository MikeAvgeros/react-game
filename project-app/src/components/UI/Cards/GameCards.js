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
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
    ];

    const heroes = [];
    let i = 0;

    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * max);
    };

    while (i < 4) {
        const randomIndex = getRandomIndex(20);
        const randomHero = cardIds[randomIndex];

        if (heroes.includes(randomHero)) continue;
        heroes.push(randomHero);
        i++;
    }

    return (
        <Stack direction="row" spacing={3}>
            {heroes.map(hero => <GameCard key={hero} hero={hero} />)}
        </Stack>
    );
}

export default GameCards;