import { SHA256 as cript } from 'crypto-js';

class Block{
    constructor(index = 0, phash = null, data = 'Genesis Block', diff = 0){
        this.index = index;
        this.diff = diff;
        this.nounce = 0;
        this.timestamp = new Date();
        this.phash = phash;
        this.data = data;
        this.mine();
    }

    genereteHash(){
        return cript(this.index+this.phash+JSON.stringify(this.data)+this.diff+this.timestamp+this.nounce).toString();
    }

    mine(){
        let middle = false;
        this.hash = '';

        let qtd = '';
        for(let i = 0; i < this.diff; i++){
            qtd += '0';
        }

        do{

            let cripto = this.genereteHash();
            if(cripto.startsWith(qtd)){
                middle = true;
                this.hash = cripto;
            }else{
                middle = false;
            }

            ++this.nounce;

        }while(middle == false)

        return this.hash;
    }

}

export default Block;