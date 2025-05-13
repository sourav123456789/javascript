observe()

async function observe() {
    let data = {};
    setInterval(async () => {
        const responsePromise = await fetch("https://674acfc671933a4e8853829e.mockapi.io/api/exchange");
        data = await responsePromise.json();
        console.log(JSON.stringify(data, null, 2));
        const inStock = [24, 20, 45, 100, 120];

        inStock.forEach(id => {
            dfs(data[0], id);
        });
        console.log("after updating data");
        console.log(JSON.stringify(data, null, 2));
        console.log("completed =========================");
    } , 3000)



}


function dfs(menu, id) {

    if (!menu) {
        return;
    }
    const entries = menu.entries;
    entries.map((entry) => {
        if (entry.id === id) {
            entry.inStock = false;
        }
    });

    dfs(menu.subMenu, id);

}