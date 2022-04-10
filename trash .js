// async function fetchGenre() {
//     const genrePrelim = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7a92417a5af1e8667d171d8c5ef3af4e&language=en-US");
//     const final = await (genrePrelim.json());
//     const genreArry = final.genres;
//     const obj = {};

//     genreArry.map(el => {
//         let k = Object.values(el)[0];
//         let v = Object.values(el)[1];
//         obj[k] = v;
//     })
//  console.log(obj)
//     return obj;
// }
// fetchGenre().then(data=>console.log(data["12"]))


const {genres} = JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');
const genrePairs = {};
genres.map(el=>{

    genrePairs[el.id]=el.name;
})
