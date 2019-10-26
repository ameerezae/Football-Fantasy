export function calculateMoney(defenders, middles, forwards, benches, goalkeeper){
    let money = 100;
    const positions = [defenders, middles, forwards , benches, goalkeeper];
    positions.forEach((element)=>{
        element.forEach((item)=>{
            if(item){
                money -= Number(item.price);
            }
        })
    });
    return money;
}