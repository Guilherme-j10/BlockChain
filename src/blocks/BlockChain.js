import Block from './Block';

class BlockChain{

    constructor(diff=4){
        this.blocks = [new Block()];
        this.diff = diff;
        this.index = 1;
    }

    getLastBlock(){
        return this.blocks[this.blocks.length - 1];
    }

    addBlock(data){
        const index = this.index;
        const diff = this.diff;
        const phash = this.getLastBlock().hash;
        const block = new Block(index, phash,data, diff);

        ++this.index;
        this.blocks.push(block);
    }

    isvalid(){
        for(let i = 1; i < this.blocks.length; ++i){
            const currentBlock = this.blocks[i];
            const pblock = this.blocks[i - 1];

            pblock.nounce = pblock.nounce - 1;
            if(currentBlock.phash !== pblock.mine()){
                return {BlockChain: 'invalid', StartingBlock: currentBlock};
            }

            if(currentBlock.phash !== pblock.hash){
                return {BlockChain: 'invalid', StartingBlock: currentBlock.index};
            }
        }
        
        return true;
    }

}

export default BlockChain;