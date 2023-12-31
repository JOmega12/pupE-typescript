// you can use `ReactNode` to add a type to the children prop
import { Component } from "react";
import { Link } from "react-router-dom";
import { ChildrenProps } from "../types";

export class ClassSection extends Component<ChildrenProps> {
  render() {
    const {
      favoriteDogCount,
      unfavoriteDogCount,
      children,
      mode,
      handleOnClick,
    } = this.props;
    return (
      <section id="main-section">
        <div className="container-header">
          <div className="container-label">Dogs: </div>

          <Link to={"/functional"} className="btn">
            Change to Functional
          </Link>

          <div className="selectors">
            {/* This should display the favorited count */}
            <div
              className={`selector ${mode === "favorited" ? "active" : ""}`}
              onClick={() => {
                handleOnClick("favorited");
              }}
            >
              favorited ( {favoriteDogCount} )
            </div>

            {/* This should display the unfavorited count */}
            <div
              className={`selector ${mode === "unfavorited" ? "active" : ""}`}
              onClick={() => {
                handleOnClick("unfavorited");
              }}
            >
              unfavorited ( {unfavoriteDogCount} )
            </div>
            <div
              className={`selector ${mode === "create" ? "active" : ""}`}
              onClick={() => {
                handleOnClick("create");
              }}
            >
              create dog
            </div>
          </div>
        </div>
        <div className="content-container">{children}</div>
      </section>
    );
  }
}
