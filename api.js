const Url = 'https://rickandmortyapi.com/api/character'
const Main = document.getElementById('root')
const root = document.documentElement;
const btn = document.getElementById('btn')
let estado = false


btn.addEventListener('click', () =>{
    if (estado) {
        console.log('white')
    root.style.setProperty('--bg-body', '#fff');
    root.style.setProperty('--color-text', '#000');
    estado = false;
    }else{
        console.log('black')
    root.style.setProperty('--bg-body', '#000');
    root.style.setProperty('--color-text', '#fff');
    estado = true;
    }
})

fetch(Url).then(response => {
    return response.json()
})
.then(data => {
    console.log(data);
    const Info = data.results
    console.log(Info);
    Info.map(element => {
        Main.innerHTML += `
        <div class="Car">
        <h1>${element.name}</h1> <br> 
        <img class="img" src="${element.image}"
        />
        </div>
        `
    }); 
})
.catch(err => {
    console.log(err)

});
