observe()

async function observe(): Promise<void> {

    const responsePromise = await fetch("https://674acfc671933a4e8853829e.mockapi.io/api/exchange")
    const data = await responsePromise.json();

    console.log(JSON.stringify(data , null , 2));

    const outOfStock = [100];
    outOfStock.forEach(id => {
        dfs(data[0] , id);
    })
    console.log("After changing data");
    console.log(JSON.stringify(data , null , 2));
}

function dfs(menu : any , id) {

    if(!menu) {
        return;
    }

    const entries = menu.entries;
    entries.map(entry => {
        if(entry.id === id) {
            entry.inStock = false;
        }
    })
    dfs(menu.subMenu , id);


}