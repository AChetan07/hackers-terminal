const addItem = async (item) => {
    await randomdelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);

}


const randomdelay = () =>{
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

async function main() {




    let t = setInterval(() => {
    let end = document.body.getElementsByTagName("div")
        end=end[end.length - 1];
        if (end.innerHTML.endsWith("...")) {
            end.innerHTML = end.innerHTML.slice(0, end.innerHTML.length - 3)
        }
        else {
            end.innerHTML = end.innerHTML + "."
        }
    }, 100)


elements = ["Initialized Hacking", "now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"];

for (const item of elements) {
    await addItem(item);

}
await randomdelay()
clearInterval(t)
}
main()
