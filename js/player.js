class Player{
    constructor(){

    }

    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(name1){
        database.ref("player"+playerCount).set({
            name:name1
        })
    }
}