// 어디선가 읽힌 REST API 데이터
const movies = [
  { title: "이상해씨", rating: 8.6 },
  { title: "파이리", rating: 8.4 },
  { title: "꼬부기", rating: 8.1 },
  { title: "또가스", rating: 7.6 },
  { title: "피존투", rating: 7.8 },
  { title: "누리공", rating: 8.1 },
  { title: "쥬레곤", rating: 8.1 },
  { title: "망나뇽", rating: 7.2 },
  { title: "데구리", rating: 7.1 },
  { title: "파르셀", rating: 7.0 },
  { title: "잉어킹", rating: 7.8 },
  { title: "두두", rating: 7.8 },
  { title: "레트라", rating: 8.6 },
];

function exampleOne(movies, minRating) {
  function compareRatings(a, b) {
    return b.rating - a.rating; //rating은 위에 있는 movies-rating을 의미| 그렇다면 여기서 말하는 a,b는 뭘까?
  }

  function init() {
    return {
      filteredMovies: [],
      sortedMovies: [],
      topMovies: [],
    };
  }
  function getTopMovies(movies, minRating) {
    const variables = init();
    const filteredMovies = variables.filteredMovies;
    const sortedMovies = variables.sortedMovies;
    const topMovies = variables.topMovies;

    for (let movie of movies) {
      if (movie.rating >= minRating) {
        filteredMovies.push(movie);
      }
    }
    for (let i = 0; i < filteredMovies.length; i++) {
      sortedMovies.push(filteredMovies.sort(compareRatings)[i]);
    }

    for (let i = 0; i < sortedMovies.length; i++) {
      if (i < 3) {
        topMovies.push(sortedMovies[i]);
      }
    }
    return topMovies;
  }
  let result = getTopMovies(movies, minRating);
  return result;
}
console.log(exampleOne(movies, 8));
