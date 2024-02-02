const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yello card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yello card'],
]);
//1. 
const events =[...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);

//3.
console.log(`An event happend , on average, every ${90/gameEvents.size /90} minutes`)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend , on average, every ${time/gameEvents.size /90} minutes`)
//4.
for(const [min, event] of gameEvents){
    const half=min<=45?'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`)
}

