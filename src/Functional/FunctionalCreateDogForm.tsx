import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { Dog } from "../types";

type DogProps = {
  addDog: (dog: Dog) => void,
}


// use this as your default selected image
const defaultSelectedImage = dogPictures.BlueHeeler;

export const FunctionalCreateDogForm = (props: DogProps) => {

  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [selectImage, setSelectImage] = useState<string>(defaultSelectedImage);


  const { addDog } = props;
  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        addDog({
          name: nameInput,
          description: descriptionInput,
          image: selectImage,
          isFavorite: false,
        })

        setNameInput('');
        setDescriptionInput('');
        setSelectImage(defaultSelectedImage);
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input type="text" disabled={false} 
        value ={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea name="" id="" cols={80} rows={10} disabled={false}
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select id=""
        onChange={(e) => setSelectImage(e.target.value)}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" />
    </form>
  );
};
