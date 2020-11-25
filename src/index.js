import block from './blocks/BlockChain';

const bloco = new block();

bloco.addBlock(`Gosto do doce de número: 3`);
bloco.addBlock(`Gosto do doce de número: 4`);


//console.log(bloco.isvalid());

//bloco.blocks[1].data = 'asdf';

console.log(bloco);

console.log(bloco.isvalid());

// console.log({
//     bloco: bloco.blocks[2],
//     mine: bloco.blocks[2].mine()
// });