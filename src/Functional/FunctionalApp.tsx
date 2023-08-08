import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Requests } from "../api";

export type Dog = {
  name: string;
  description: string;
  image: HTMLImageElement;
  isFavorite: boolean;
  dogId: number;
};

export function FunctionalApp() {
  const [mode, setMode] = useState("all");
  const [dogs, setDogs] = useState<Dog[] | []>([]);

  const refetchDogs = () => {
    Requests.getAllDogs().then(setDogs);
  };

  const addDog = (dog: Dog) => {
    Requests.postDog({
      name: dog.name,
      description: dog.description,
      image: dog.image,
      isFavorite: dog.isFavorite,
      dogId: dog.dogId,
    }).then(() => refetchDogs());
  };

  const deleteDog = (dogId: Dog) => {
    Requests.deleteDog(dogId).then(() => {
      return refetchDogs();
    });
  };

  const favoriteDog = (dogId: Dog) => {
    Requests.updateDog(dogId).then(() => refetchDogs());
  };

  const unfavoriteDog = (dogId: Dog) => {
    Requests.deleteDog(dogId).then(() => refetchDogs());
  };

  const favorited = dogs.filter((dog) => dog.isFavorite === true);
  const unfavorited = dogs.filter((dog) => dog.isFavorite === false);

  const favoriteDogCount = favorited.length;
  const unfavoriteDogCount = unfavorited.length;

  //this takes care of the favorited or unfavorited section
  const handleOnClick = (dogMode: string) => {
    if (mode === dogMode) {
      setMode("all");
      return;
    }
    setMode(dogMode);
  };

  useEffect(() => {
    refetchDogs();
  }, []);


  const dogsData = {
    all: dogs,
    favorite: favorited,
    unfavorite: unfavorited,
  }
  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection
        favoriteDogCount={favoriteDogCount}
        unfavoriteDogCount={unfavoriteDogCount}
        mode={mode}
        handleOnClick={handleOnClick}
      >
        {mode !== "create" && (
          <FunctionalDogs
            dogsList= {dogsData[mode]}
            deleteDog={deleteDog}
            favoriteDog={favoriteDog}
            unfavoriteDog={unfavoriteDog}
          />
        )}
        {mode === "create" && <FunctionalCreateDogForm addDog={addDog} />}
      </FunctionalSection>
    </div>
  );
}
