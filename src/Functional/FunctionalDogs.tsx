import { DogCard } from "../Shared/DogCard";
import { Requests } from "../api";
import { dogPictures } from "../dog-pictures";
// import { Dog } from "./FunctionalApp";
import { Dog } from "../types";


type DogCardProps
 = {
  deleteDog: (dogId: Dog) => void,
  favoriteDog: (dogId: Dog) => void,
  unfavoriteDog: (dogId: Dog) => void,
  filteredDogs: Dog[],
 }

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = (props: DogCardProps) => {

  const { filteredDogs } = props
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>

    {filteredDogs.map((dog) => (
      <DogCard 
      key={dog.dogId}
      dog={dog}
      onTrashIconClick={() => {
        Requests.deleteDog(dog)
        // alert("clicked trash");
      }}
      onHeartClick={() => {
        Requests.updateDog(dog);
        // alert("clicked heart");
      }}
      onEmptyHeartClick={() => {
        Requests.updateDog(dog);
        // alert("clicked empty heart");
      }}
      isLoading={false}
      />
    ))}
    </>
  );
};
