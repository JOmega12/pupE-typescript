import { DogCard } from "../Shared/DogCard";
import { dogPictures } from "../dog-pictures";
import { Dog } from "./FunctionalApp";

type DogCardProps
 = {
  deleteDog: (dogId: Dog) => void,
  favoriteDog: (dogId: Dog) => void,
  unfavoriteDog: (dogId: Dog) => void,
  dogsList: Dog[]
 }

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = (props: DogCardProps) => {

  const { deleteDog, favoriteDog, unfavoriteDog, dogsList } = props
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>

    {dogsList.map((dog) => (
      <DogCard 
      dog={dog}
      onTrashIconClick={() => {
        deleteDog(dog)
        // alert("clicked trash");
      }}
      onHeartClick={() => {
        unfavoriteDog(dog);
        // alert("clicked heart");
      }}
      onEmptyHeartClick={() => {
        favoriteDog(dog);
        // alert("clicked empty heart");
      }}
      isLoading={false}
      />
    ))}
  

      {/* <DogCard
        dog={{
          id: 1,
          image: dogPictures.BlueHeeler,
          description: "Example Description",
          isFavorite: false,
          name: "Cute Blue Heeler",
        }}
        key={1}
        onTrashIconClick={() => {
          props.deleteDog(1)
          alert("clicked trash");
        }}
        onHeartClick={() => {
          props.favoriteDog(1)
          alert("clicked heart");
        }}
        onEmptyHeartClick={() => {
          alert("clicked empty heart");
        }}
        isLoading={false}
      /> */}
    </>
  );
};
