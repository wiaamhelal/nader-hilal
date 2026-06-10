import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getTodayMovies,
  getLatestMovies,
  getLatestTvShows,
  fetchMovieDetails,
  getTopRatedTvShows,
} from "../apiCalls/movieApiCall";

export const fetchHomeData = createAsyncThunk(
  "movies/fetchHomeData",
  async () => {
    const [
      trending,
      popular,
      topRated,
      upcoming,
      latestMovies,
      latestTvShows,
      today,
      TopRatedTvShows,
    ] = await Promise.all([
      getTrendingMovies(),
      getPopularMovies(),
      getTopRatedMovies(),
      getUpcomingMovies(),
      getTodayMovies(),
      getLatestMovies(),
      getLatestTvShows(),
      getTopRatedTvShows(),
    ]);

    return {
      trending: trending.data.results,
      popular: popular.data.results,
      topRated: topRated.data.results,
      upcoming: upcoming.data.results,
      today: today.data.results,
      latestMovies: latestMovies.data.results,
      latestTvShows: latestTvShows.data.results,
      TopRatedTvShows: TopRatedTvShows.data.results,
    };
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trending: [],
    popular: [],
    topRated: [],
    upcoming: [],
    today: [],
    loading: false,
    error: null,
    latestMovies: [],
    latestTvShows: [],
    movieDetails: null,
    TopRatedTvShows: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;

        state.trending = action.payload.trending;
        state.popular = action.payload.popular;
        state.topRated = action.payload.topRated;
        state.upcoming = action.payload.upcoming;
        state.today = action.payload.today;
        state.latestMovies = action.payload.latestMovies;
        state.latestTvShows = action.payload.latestTvShows;
        state.TopRatedTvShows = action.payload.TopRatedTvShows;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      });
  },
});

export default moviesSlice.reducer;
