const film = {
   Title: 'Terminator 2: Judgment Day',
   Year: '1991',
   Rated: 'R',
   Released: '03 Jul 1991',
   Runtime: '137 min',
   Genre: 'Action, Sci-Fi',
   Director: 'James Cameron',
   Writer: 'James Cameron, William Wisher',
   Actors: 'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong',
   Plot: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.',
   Language: 'English, Spanish',
   Country: 'United States',
   Awards: 'Won 4 Oscars. 37 wins & 33 nominations total',
   Poster:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
   Ratings: [
      {
         Source: 'Internet Movie Database',
         Value: '8.6/10',
      },
      {
         Source: 'Rotten Tomatoes',
         Value: '92%',
      },
      {
         Source: 'Metacritic',
         Value: '75/100',
      },
   ],
   Metascore: '75',
   imdbRating: '8.6',
   imdbVotes: '1,114,693',
   imdbID: 'tt0103064',
   Type: 'movie',
   DVD: '13 Feb 2007',
   BoxOffice: '$205,881,154',
   Production: 'N/A',
   Website: 'N/A',
   Response: 'True',
};

export type TypeFilm = Partial<typeof film>;
