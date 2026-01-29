const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
  ];
  
  // 1. filter() Sci-Fi movies
  const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");
  
  // 2. map() title with rating
  const mappedMovies = movies.map(m => `${m.title} (${m.rating})`);
  
  // 3. reduce() average rating
  const avgRating =
    movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
  
  // 4. find() Joker
  const jokerMovie = movies.find(m => m.title === "Joker");
  
  // 5. findIndex() Avengers
  const avengersIndex = movies.findIndex(m => m.title === "Avengers");
  
  console.log(sciFiMovies);
  console.log(mappedMovies);
  console.log(avgRating);
  console.log(jokerMovie);
  console.log(avengersIndex);
  