const { encrypt, decrypt } = require('./vigenere');

// let k = 'WENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITE';
// let c = 'OBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR';
//
// let totalK = 'QHEENCTAYCREIFTBRSPAMHHEWENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITEGOEAOSDDRYDLORITRKLMLEHA';
//
// for (let i = 0; i < 48; i++) {
//   let k = totalK.slice(i, i+97);
//   // console.log("k", k);
//   let dec = decrypt(c, k);
//   // console.log("decrypted", dec);
//   if (dec.indexOf("BERLIN") > -1)
//     console.log("WOW");
// }


// result -> BWAQLXSXCPBIWUTKABWWEADUDOIZSBCOZUKKMWNHCCUOAAXUBZXOJAYUBKCEIQYILSNINLQOJZBYGHHJWOKSOPFSWFVSWQQPJ

// ENDYAHROHNLSRHEOCPTEOIBIDYSHNAIACHTNREYULDSLLSLLNOHSNOSMRWXMNETPRNGATIHNRARPESLNNELEBLPIIACAEWMTWNDITEENRAHCTENEUDRETNHAEOETFOLSEDTIWENHAEIOYTEY
// QHEENCTAYCREIFTBRSPAMHHEWENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITEGOEAOSDDRYDLORITRKLMLEHA
// GTDHARDPNEOHMGFMFEUHEECDMRIPFEIMEHNLSSTTRTVDOHWOBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR


// CENTERPOINT: 'WENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITE'

// REVERSE
// YETYOIEAHNEWITDESLOFTEOEAHNTERDUENETCHARNEETIDNWTMWEACAIIPLBELENNLSEPRARNHITAGNRPTENMXWRMSONSHONLLSLLSDLUYERNTHCAIANHSYDIBIOETPCOEHRSLNHORHAYDNE
// AHELMLKRTIROLDYRDDSOAEOGETISHIECLIHDDTCEABEFWEIRGAOREIPWETSMTTHAAINDDESBITRNTREEAMRAOTOEAUTEUTOIFSAOFEETBLREEYGETAMATANEWEHHMAPSRBTFIERCYATCNEEHQ
// RACKEUAUHUKGIDCJTXZKDGWKPFZMTTVPYNBFNIWAIDULKJTAWZZKESSQJSQTWTOSSKGNRPQQVRLFWBBFILOSBLUHGOXOURKBOWHODVTRTTSSLNHEMIEFPIRMDCEEHUEFMFGMHOENPDRAHDTG

let k = 'BERLINCLOCK';

let kk = "EMUFPHZLRFAXYUSDJKZLDKRNSHGNFIVJYQTQUXQBQVYUVLLTREVJYQTMKYRDMFDVFPJUDEEHZWETZYVGWHKKQETGFQJNCEGGWHKKDQMCPFQZDQMMIAGPFXHQRLGTIMVMZJANQLVKQEDAGDVFRPJUNGEUNAQZGZLECGYUXUEENJTBJLBQCRTBJDFHRRYIZETKZEMVDUFKSJHKFWHKUWQLSZFTIHHDDDUVHDWKBFUFPWNTDFIYCUQZEREEVLDKFEZMOQQJLTTUGSYQPFEUNLAVIDXFLGGTEZFKZBSFDQVGOGIPUFXHHDRKFFHQNTGPUAECNUVPDJMQCLQUMUNEDFQELZZVRRGKFFVOEEXBDMVPNFQXEZLGREDNQFMPNZGLFLPMRJQYALMGNUVPDXVKPDQUMEBEDMHDAFMJGZNUPLGEWJLLAETGENDYAHROHNLSRHEOCPTEOIBIDYSHNAIACHTNREYULDSLLSLLNOHSNOSMRWXMNETPRNGATIHNRARPESLNNELEBLPIIACAEWMTWNDITEENRAHCTENEUDRETNHAEOETFOLSEDTIWENHAEIOYTEYQHEENCTAYCREIFTBRSPAMHHEWENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITEGOEAOSDDRYDLORITRKLMLEHAGTDHARDPNEOHMGFMFEUHEECDMRIPFEIMEHNLSSTTRTVDOHWOBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR";

// decrypt ciphertext given BERLIN;

let c = "NYPVTTMZFPK"
let dec = decrypt(c, k);
console.log("decrypted", dec);
// ELYOIECBAQK
// KQABCEIOYLE
