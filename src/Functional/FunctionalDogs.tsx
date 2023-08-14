import { DogCard } from "../Shared/DogCard";
import { DogCardProps } from "../types";

export const FunctionalDogs = (props: DogCardProps) => {
  const { filteredDogs, deleteDog, favoriteTypeDog, isLoading } = props;

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {filteredDogs.map((dog) => {
        return (
          <DogCard
            key={dog.id}
            dog={dog}
            onTrashIconClick={() => {
              deleteDog(dog);
            }}
            onHeartClick={() => {
              favoriteTypeDog(dog);
            }}
            onEmptyHeartClick={() => {
              favoriteTypeDog(dog);
            }}
            isLoading={isLoading}
          />
        );
      })}
    </>
  );
};
