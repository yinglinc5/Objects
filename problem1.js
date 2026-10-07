const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
  watched: true
};

function overview(mov){
    console.log(`Title:`, movie.title);
    console.log(`Year:`, movie.year);
    console.log(`Director:`, movie.director);
    if(movie.runtime > 120){
        console.log(`Rating: true`)
    }
    else if( movie.runtime < 120){
        console.log(`Rating: false`);
    }
    console.log(`Watched:`, movie.watched)
}

console.log(overview(movie));