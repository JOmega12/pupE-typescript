import { DogCard } from "../Shared/DogCard";
import { Dog } from "../types";


type DogCardProps
 = {
  deleteDog: (dogId: Dog) => void,
  favoriteDog: (dogId: Dog) => void,
  unfavoriteDog: (dogId: Dog) => void,
  filteredDogs: Dog[],
 }

export const FunctionalDogs = (props: DogCardProps) => {

  const { filteredDogs, deleteDog, favoriteDog, unfavoriteDog } = props

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
    {filteredDogs.map((dog) => {
      return(

      <DogCard 
      key={dog.id}
      dog={dog}
      onTrashIconClick={() => {
        deleteDog(dog)
      }}
      onHeartClick={() => {
        unfavoriteDog(dog);
      }}
      onEmptyHeartClick={() => {
        favoriteDog(dog);
      }}
      isLoading={false}
      />
    )}
    )}
    </>
)};
