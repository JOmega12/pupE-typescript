import { Dog } from "./types";

export const baseUrl = "http://localhost:3000/dogs";

export const Requests = {
  // should return a promise with all dogs in the database
  getAllDogs: async () => {
    return fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => data);
  },
  // should create a dog in the database from a partial dog object
  // and return a promise with the result
  postDog: (props: Dog) => {
    const { name, description, isFavorite, image } = props;
    const body = JSON.stringify({ name, description, isFavorite, image });

    return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body,
    });
  },

  // should delete a dog from the database
  deleteDog: (dog: Dog) => {
    return fetch(`${baseUrl}/${dog.id}`, {
      method: "delete",
    });
  },

  updateDog: (dog: Dog) => {
    const { isFavorite } = dog;
    return fetch(`${baseUrl}/${dog.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        isFavorite: !isFavorite,
      }),
    });
  },

  // Just a dummy function for use in the playground
  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
