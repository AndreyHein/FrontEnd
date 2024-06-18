const footballPlayers = [
    { id: 1, name: "Player 1", position: "Goalkeeper" },
    { id: 2, name: "Player 2", position: "Defender" },
    { id: 3, name: "Player 3", position: "Defender" },
    { id: 4, name: "Player 4", position: "Defender" },
    { id: 5, name: "Player 5", position: "Midfielder" },
    { id: 6, name: "Player 6", position: "Midfielder" },
    { id: 7, name: "Player 7", position: "Midfielder" },
    { id: 8, name: "Player 8", position: "Forward" },
    { id: 9, name: "Player 9", position: "Forward" },
    { id: 10, name: "Player 10", position: "Forward" }
  ];

//   const footballPlayers = [
//     { id: 1, name: "P 1", position: "Goalkeeper" },
//     { id: 2, name: "P 2", position: "Defender" },
//     { id: 3, name: "P 3", position: "Defender" },
//     { id: 4, name: "P 4", position: "Defender" },
//     { id: 5, name: "P 5", position: "Midfielder" },
//     { id: 6, name: "P 6", position: "Midfielder" },
//     { id: 7, name: "P 7", position: "Midfielder" },
//     { id: 8, name: "P 8", position: "Forward" },
//     { id: 9, name: "P 9", position: "Forward" },
//     { id: 10, name: "P 10", position: "Forward" }
//   ];

const footballPlayersChange = footballPlayers.map((elem) => ({
    id: elem.id,
    name: `P ${elem.id}`,
    position: elem.position,
}));

console.log(footballPlayersChange);

// variant 2
const updateP = footballPlayers.map(
    player => {
    const newName = player.name.replace('Player ', 'P ');
    return {...player, name: newName}
  }
);
console.log(updateP);