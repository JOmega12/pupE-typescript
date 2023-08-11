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