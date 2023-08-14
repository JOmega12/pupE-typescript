import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { DogCardProps } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export class ClassDogs extends Component<DogCardProps> {
  render() {
    const { filteredDogs, deleteDog, favoriteTypeDog, isLoading } = this.props;
    return (
      <>
        {filteredDogs.map((dog) => (
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
        ))}
      </>
    );
  }
}
