import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Requests } from "../api";
import { Dog } from "../types";
import { toast } from "react-hot-toast";

export function FunctionalApp() {
  const [mode, setMode] = useState("all");
  const [dogs, setDogs] = useState<Dog[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const refetchDogs = () => {
    setIsLoading(true);
    Requests.getAllDogs()
      .then((res) => {
        setDogs(res);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    refetchDogs();
  }, []);

  const addDog = (dog: Dog) => {
    setIsLoading(true);
    Requests.postDog({
      name: dog.name,
      description: dog.description,
      image: dog.image,
      isFavorite: false,
    })
      .then(() => refetchDogs())
      .then(() => {
        toast.success(`You've created a dog!`);
      })
      .finally(() => setIsLoading(false));
  };

  const deleteDog = (dog: Dog) => {
    setIsLoading(true);
    Requests.deleteDog(dog)
      .then(() => {
        return refetchDogs();
      })
      .then(() => {
        toast.success(`You've deleted a good boi :(`);
      })
      .finally(() => setIsLoading(false));
  };

  const favoriteTypeDog = (dog: Dog) => {
    setIsLoading(true);
    Requests.updateDog(dog)
      .then(() => refetchDogs())
      .then(() => {
        if (dog.isFavorite === false) {
          toast.success(`You've favorited a good boi`);
        } else {
          toast.success(`You've unfavorited a good boi`);
        }
      })
      .finally(() => setIsLoading(false));
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

  let filteredDogs = (() => {
    if (mode === "favorited") {
      return favorited;
    }

    if (mode === "unfavorited") {
      return unfavorited;
    }
    return dogs;
  })();

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
            filteredDogs={filteredDogs}
            deleteDog={deleteDog}
            favoriteTypeDog={favoriteTypeDog}
            isLoading={isLoading}
          />
        )}
        {mode === "create" && (
          <FunctionalCreateDogForm addDog={addDog} isLoading={isLoading} />
        )}
      </FunctionalSection>
    </div>
  );
}
