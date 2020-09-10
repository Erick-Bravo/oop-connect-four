export class Column {
    constructor () {
        this.tokens = [null, null, null, null, null, null];

    }

    add(playerNumber) {
        for(let i = 5; i >= 0; i--){
        if(this.tokens[i] === null){
            this.tokens[i] = playerNumber;
            break;
        }
    }
}
    getTokenAt(rowIndex){
        for(let i = 5; i >=0; i--){
            if(this.tokens[i] === null){
                return null;
            }else if (this.token[i] === 1){
                return  1;
            }else if (this.token[i] === 1){
                return 2;
            }

        }

    }
}
