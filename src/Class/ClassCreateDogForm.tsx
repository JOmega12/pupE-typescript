import { Component } from "react";
import { dogPictures } from "../dog-pictures";
import { CreateDogProps } from "../types";

const defaultSelectedImage = dogPictures.BlueHeeler;
export class ClassCreateDogForm extends Component<CreateDogProps> {
  state = {
    nameInput: "",
    descriptionInput: "",
    selectImage: defaultSelectedImage,
  };

  render() {
    const { nameInput, descriptionInput, selectImage } = this.state;

    const { addDog, isLoading } = this.props;
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
          });
          this.setState({
            nameInput: "",
            descriptionInput: "",
            selectImage: defaultSelectedImage,
          });
        }}
      >
        <h4>Create a New Dog</h4>
        <label htmlFor="name">Dog Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => this.setState({ nameInput: e.target.value })}
          disabled={isLoading}
        />
        <label htmlFor="description">Dog Description</label>
        <textarea
          name=""
          id=""
          cols={80}
          rows={10}
          value={descriptionInput}
          onChange={(e) => this.setState({ descriptionInput: e.target.value })}
          disabled={isLoading}
        />
        <label htmlFor="picture">Select an Image</label>
        <select
          value={selectImage}
          onChange={(e) => this.setState({ selectImage: e.target.value })}
          disabled={isLoading}
        >
          {Object.entries(dogPictures).map(([label, pictureValue]) => {
            return (
              <option value={pictureValue} key={pictureValue}>
                {label}
              </option>
            );
          })}
        </select>
        <input type="submit" value="submit" disabled={isLoading} />
      </form>
    );
  }
}
