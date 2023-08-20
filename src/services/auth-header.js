export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGRmYWViMjAzODIxMGE3OWZlYTA3ODhhNDVlYjViZiIsInN1YiI6IjY0ZGE3MDlmMzcxMDk3MDExYzUxMGI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oi7DOuUXD8qdCJzYvGfbGvXk_muHJEDaO-e0e4kBToA",
    accept: "application/json",
  };
}
