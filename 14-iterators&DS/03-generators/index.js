//generators
function* createTeamIterator(teams) {
    for (let i = 0; i < teams.length; i++) {
        yield teams[i]
    }
}

const teams = ['red', 'blue', 'green']
let teamGenerator = createTeamIterator(teams);
// console.log(teamGenerator.next().value);
// console.log(teamGenerator.next().value);
// console.log(teamGenerator.next().value);
// console.log(teamGenerator.next().value);

// for (const team of teamGenerator) {
//     console.log(team);
// }

console.log([...teamGenerator]);

