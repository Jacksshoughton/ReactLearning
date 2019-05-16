function choice(items){
    let length = items.length;
    let random = Math.floor(Math.random() * length);
    return items[random];
}

function remove(items, item){
    for(var i = 0; i < items.length; i++){
        if(items[i] === item){
            return [ ...items.slice(0, i), ...items.slice(i + 1) ];
        }
    }
}

export {choice, remove};