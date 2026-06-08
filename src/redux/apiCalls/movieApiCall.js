import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "5cb3971f2ed6c001df1ae772ee291eb2";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getTrendingMovies = () =>
  api.get(`/trending/movie/day?api_key=5cb3971f2ed6c001df1ae772ee291eb2`);

export const getPopularMovies = () =>
  api.get(`/movie/popular?api_key=5cb3971f2ed6c001df1ae772ee291eb2`);

export const getTopRatedMovies = () =>
  api.get(`/movie/top_rated?api_key=5cb3971f2ed6c001df1ae772ee291eb2`);

export const getUpcomingMovies = () =>
  api.get(`/movie/upcoming?api_key=5cb3971f2ed6c001df1ae772ee291eb2`);

export const getTodayMovies = () => {
  const today = new Date().toISOString().split("T")[0];
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=5cb3971f2ed6c001df1ae772ee291eb2&primary_release_date.gte=${today}&primary_release_date.lte=${today}`
  );
};
export const getLatestMovies = () =>
  api.get(
    `/discover/movie?api_key=5cb3971f2ed6c001df1ae772ee291eb2&sort_by=release_date.desc`
  );

export const getLatestTvShows = () =>
  api.get(
    `/discover/tv?api_key=5cb3971f2ed6c001df1ae772ee291eb2&sort_by=first_air_date.desc`
  );
export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5cb3971f2ed6c001df1ae772ee291eb2`
    );

    return response.data;
  }
);
//import.meta.env.VITE_TMDB_API_KEY

//
//http://localhost:8000/api/movies
