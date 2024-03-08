const getCategories = async() => {
//   let resp =  await fetch(`${API_URL}/categories`)
//   let data = await resp.json()
//   return data.categories

  const fake_response ={
    "status": "success",
    "categories": [
      {movie_id: -1, title: "Movies"},
      {movie_id: 0, title: "The Godfather"},
      {movie_id: 1, title: "A Few Good Men"},
      {movie_id: 2, title: "Iron Man"},
      {movie_id: 3, title: "The Last Castle"},
      {movie_id: 4, title: "Shrek"},
      {movie_id: 5, title: "The Lion King"}
     ]
  }
    return fake_response
}

export default getCategories

