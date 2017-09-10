const letterFrequency = require('letter-frequency');

// let x = letterFrequency('OBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR');

// let x = letterFrequency('QHEENCTAYCREIFTBRSPAMHHEWENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITEGOEAOSDDRYDLORITRKLMLEHA');
// let x = letterFrequency('WENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITE');

function digraphs(input) {
  for (let i = 0; i < input.length - 1; i++) {
    // get a slice
    let digraph = input[i] + input[i+1];
    let count = 0;
    for (let j = i + 1; j < input.length - 1; j++) {
      let secondDigraph = input[j] + input[j+1];
      if (digraph === secondDigraph) {
        count++;
      }
    }
    if (count > 0)
      console.log(`Digraph: ${digraph} - ${count}`);
  }
}
function trigraphs(input) {
  for (let i = 0; i < input.length - 2; i++) {
    // get a slice
    let trigraph = input[i] + input[i+1] + input[i+2];
    let count = 0;
    for (let j = i + 1; j < input.length - 2; j++) {
      let secondTrigraph = input[j] + input[j+1] + input[j+2];
      if (trigraph === secondTrigraph) {
        count++;
      }
    }
    if (count > 0)
      console.log(`Trigraph: ${trigraph} - ${count}`);
  }
}
trigraphs('VFPJUDEEHZWETZYVGWHKKQETGFQJNCEGGWHKKDQMCPFQZDQMMIAGPFXHQRLGTIMVMZJANQLVKQEDAGDVFRPJUNGEUNAQZGZLECGYUXUEENJTBJLBQCRTBJDFHRRYIZETKZEMVDUFKSJHKFWHKUWQLSZFTIHHDDDUVHDWKBFUFPWNTDFIYCUQZEREEVLDKFEZMOQQJLTTUGSYQPFEUNLAVIDXFLGGTEZFKZBSFDQVGOGIPUFXHHDRKFFHQNTGPUAECNUVPDJMQCLQUMUNEDFQELZZVRRGKFFVOEEXBDMVPNFQXEZLGREDNQFMPNZGLFLPMRJQYALMGNUVPDXVKPDQUMEBEDMHDAFMJGZNUPLGEWJLLAETG');
