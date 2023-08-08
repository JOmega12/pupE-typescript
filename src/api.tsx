export const baseUrl = "http://localhost:3000";

type DogProps = {
  name: string,
  description: string,
  image: HTMLImageElement,
  isFavorite: boolean, 
  dogId: number,
}


export const Requests = {
  // should return a promise with all dogs in the database
  getAllDogs: async () => {
    return fetch(baseUrl)
    .then((response) => response.json())
    .then(data => data)
 },
  // should create a dog in the database from a partial dog object
  // and return a promise with the result
  postDog: (props: DogProps) => {
    const { name, description, isFavorite, image  } = props
    const body = JSON.stringify({ name, description, isFavorite, image });
  
    return fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body,
    });
  },

  // should delete a dog from the database
  deleteDog: (props: DogProps) => {
    return fetch(`http://localhost:3000/dogs/${props.dogId}`, {
      method: "delete",
    });
  },

  updateDog: (props: DogProps) => {

    const { dogId, isFavorite } = props;
    return fetch(`http://localhost:3000/dogs/${dogId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        isFavorite,
      }),
    });
  },

  // Just a dummy function for use in the playground
  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
