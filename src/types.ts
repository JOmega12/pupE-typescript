// Add your own custom types in here
export type Dog = {
   name: string;
   description: string;
   image: string;
   isFavorite: boolean;
   id?: number;
 };

export type DogCardProps
 = {
  deleteDog: (dogId: Dog) => void,
  favoriteTypeDog: (dogId: Dog) => void,
  filteredDogs: Dog[],
  isLoading: boolean,
 }

 export type ChildrenProps = {
  children: React.ReactNode,
  favoriteDogCount: number,
  unfavoriteDogCount: number,
  mode: string,
  handleOnClick: (mode: string) => void,
}


export type CreateDogProps = {
  addDog: (dog: Dog) => void,
  isLoading: boolean,
}

export type ClassAppTypes = {
  mode: string, 
  dogs: Dog[],
  isLoading: boolean,
}