const movies = [
  { title: "이상해씨", rating: 9.2 },
  { title: "피존투", rating: 9.5 },
  { title: "버터플", rating: 8.7 },
  { title: "루주라", rating: 7.8 },
  { title: "냐옹", rating: 8.3 },
];

function exampleOne(minRating) {
  /* 최소 평점 기준으로 참인 영화(포켓몬)데이터만 필터링하는 filter함수는 조건식을 만족하는 요소만을 모아 새로운 배열을 반환하는 성질을 가지고 있어 매우 유용하다.
   */
  /* 필터링하는 과정에서 원본 배열을 손상시키면 곤란하기 때문에 깊은 복사(deep copy)를 해야한다. 
  깊은 복사와 얕은 복사에 대해 지식 탐색이 필요하다. */
  const filteredMovies = movies.filter((movie) => movie.rating >= minRating);
  /* ES6+ 버전에서는 정렬된 영화를 평점 내림차순으로 정렬 */
  /* ES5 버전은 아래와 같이 메서드 체인 대신 변수 할당을 사용하고 화살표 함수 대신 일반 익명 함수를 사용한다 */

  // var filteredMoviesCopy=filteredMovies.slice();
  // var sortedMovies=filteredMoviesCopy.sort(function(a,b){
  //   return b.rating-a.rating;
  // });
  /* 위의 예전 방식을 확인하면, 변수가 낭비되는 것을 확인 할 수 잇다.
  메서드체인 테크닉으로 하나는 줄일 수 있지만, 배열을 깊은 복사 하는 것 때문에 아래와 같이 전개연산자를 사용하여 한 줄로 줄일 수 있다.
  다른 언어에서는 있을 수 없는 황당한 코드로 자바스크립트의 큰 장점이다.  */
  const sortedMovies = [...filteredMovies].sort((a, b) => b.rating - a.rating);

  // 상위 3개의 영화 선택
  const topMovies = sortedMovies.slice(0, 3); //0번째인자는 이상, 1번째인자는 미만

  /* 영화 객체를 영화 제목으로 매핑(mapping)
  기존의 객체를 모두 순회하며 약간씩 변형시킬 때 '매핑'하는 .map()메서드는 상당히 유용하다. */
  const topMovieTitles = topMovies.map((movie) => movie.title);
  return topMovieTitles;
}

console.log(exampleOne(8));
