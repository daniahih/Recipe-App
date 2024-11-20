export const fetchRecipes = async () => {
  try {
    const reposnse = await fetch(
      "https://673add62339a4ce4451970c9.mockapi.io/recipe"
    );
    const data = await reposnse.json();
    console.log("data comes from api ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postRecipe = async (newRecipe) => {
  try {
    const reposnse = await fetch(
      "https://673add62339a4ce4451970c9.mockapi.io/recipe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      }
    );
    const data = await reposnse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
