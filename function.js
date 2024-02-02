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
//Function 
//Delacrian
//Function Delacrian - Hàm khai báo
function getTemMember(){
//spred operator
const [gk, ...fieldPlayers] = team;
console.log(gk, "gk");
console.log(fieldPlayers, "fieldPlayers");

}
// const {players : [team1, team2]} = game;
// getTemMember(team1)

//2.Function expression - Hàm biểu thức
// const getAllTeamMember = function(team, reserve){
//     //The spread operator
//     const allTeam = [...team, ...reserve];
//     console.log(allTeam);

// }
// const [team1, team2] = game.players;
// const reserve = ['Thiago', 'Coutinho', 'Perisic']
// getAllTeamMember(team1,reserve);
//3.Array function 
const getAllTeamMember = ()=>{
    
}
