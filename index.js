function writeCards(arrayOfNames, eventName){
    const messages =[]
    for(let i =0; i < arrayOfNames.length; i++){
        console.log(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
        messages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number){

    while(number >= 0){
        console.log(number--)
    }
    
}
