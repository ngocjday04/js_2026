const game ={
    team1:'Bayern Munich',
    team2:"Borrussia Dortmund",
    players:[
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandoski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
],
    score: '4:0',
    scored:['Lewandoski','Gnarby','Lewandoski','Hummels'],
    date: 'Nov 9th,2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },

};
//Tên đội
//ES6 Destructring
const {team1: nameTeam1, team2: nameTeam2} = game
// console.log(team1, team2);

//Nets destructoring 
const {odds: {team1, team2, x}} = game
// console.log(team1, team2, x);

//Destructoring Array
const  {players: [players1, players2]}= game
console.log(players1);
//
