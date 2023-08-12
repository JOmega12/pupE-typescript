import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { dogPictures } from "../dog-pictures";
import { DogCardProps } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export class ClassDogs extends Component <DogCardProps> {
  render() {
    const {filteredDogs, deleteDog, favoriteTypeDog, isLoading}= this.props;
    return (
      <>

        {filteredDogs.map((dog) => (
          <DogCard
          key={dog.id}
          dog={dog}
          onTrashIconClick={() => {
            // alert("clicked trash");
            deleteDog(dog);
          }}
          onHeartClick={() => {
            // alert("clicked heart");
            favoriteTypeDog(dog)
          }}
          onEmptyHeartClick={() => {
            // alert("clicked empty heart");
            favoriteTypeDog(dog)
          }}
          isLoading={isLoading}
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
            alert("clicked trash");
          }}
          onHeartClick={() => {
            alert("clicked heart");
          }}
          onEmptyHeartClick={() => {
            alert("clicked empty heart");
          }}
          isLoading={false}
        />
         */}
      </>
    );
  }
}
