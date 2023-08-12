import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { Requests } from "../api";
import { Dog } from "../types";


export class ClassApp extends Component<Dog> {
  state = {
    mode: 'all',
    dogs: [] as Dog[],
    isLoading: false,
  }

  refetchDogs = () => {
    Requests.getAllDogs()
      .then((res) => {
        this.setState({dogs: res})
      })
  }

  componentDidMount(): void {
    this.refetchDogs();
  }

  addDog = (dog: Dog) => {
    Requests.postDog({
      name: dog.name,
      description: dog.description,
      image: dog.image,
      isFavorite: false,
    }).then(()=> this.refetchDogs())
  }

  deleteDog = (dog: Dog) => {
    Requests.deleteDog(dog).then(() => {
      return this.refetchDogs();
    })
  }

  favoriteTypeDog =(dog: Dog) => {
    Requests.updateDog(dog).then(()=> {
      return this.refetchDogs();
    })
  }

  handleOnClick= (dogMode: string) => {
    if(this.state.mode === dogMode) {
      this.setState('all')
    }
    this.setState({mode: dogMode});
  }


  render() {
    const {mode, dogs, isLoading} = this.state;
    const favorited = dogs.filter((dog) => dog.isFavorite === true);
    const unfavorited = dogs.filter((dog) => dog.isFavorite === false);

    const favoriteDogCount = favorited.length;
    const unfavoriteDogCount = unfavorited.length;

    let filteredDogs = (() => {
      if(mode === 'favorited') {
        return favorited;
      }
      if(mode === 'unfavorited') {
        return unfavorited;
      }
      return dogs
    })();

    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection 
          mode = {mode}
          favoriteDogCount={favoriteDogCount}
          unfavoriteDogCount = {unfavoriteDogCount}
          handleOnClick={this.handleOnClick}
        >
          {mode !== 'create' && (
            <ClassDogs 
              filteredDogs = {filteredDogs}
              deleteDog={this.deleteDog}
              favoriteTypeDog={this.favoriteTypeDog}
              isLoading={isLoading}
            />
          )}
          {mode === 'create' && (
            <ClassCreateDogForm />
          )} 
        </ClassSection>
      </div>
    );
  }
}
