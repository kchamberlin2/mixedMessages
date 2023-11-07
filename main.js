const treeFacts = [
    `Trees are the largest plants in existence.`,
    `Cottonwood seeds are able to stay airborne for days -- much longer than any other type of seed`,
    `The manchineel tree is the most poisonous tree on earth. Standing under the tree during a rainstorm can cause blisters!`,
    `The largest tree by volume is a sequoia in Sequoia National Park named General Sherman at 52,508 cubic feet.`,
    `There are 3.04 trillion trees on Earth, or about 422 for each person.`
];

function randomFact() {
    return treeFacts[Math.floor(Math.random() * treeFacts.length)];
}

console.log(randomFact());