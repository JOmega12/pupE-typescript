// you can use this type for react children if you so choose
// import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChildrenProps } from "../types";

export const FunctionalSection = (props: ChildrenProps) => {

  const { favoriteDogCount, unfavoriteDogCount, mode, handleOnClick} = props;

  return (
      <section id="main-section">
        <div className="container-header">
          <div className="container-label">Dogs: </div>
          <Link to={"/class"} className="btn">
            Change to Class
          </Link>
          <div className="selectors">
            {/* This should display the favorited count */}
              <div className={`selector ${mode === 'favorited' ? 'active' : ''} `} onClick={() => handleOnClick('favorited')}>
              favorited ( {favoriteDogCount})
              </div>

            {/* This should display the unfavorited count */}
              <div className={`selector ${mode === 'unfavorited' ? 'active' : ''} `} onClick={() => handleOnClick('unfavorited')}>
                unfavorited ( {unfavoriteDogCount} )
              </div>

              <div className={`selector ${mode === 'create' ? 'active' : ''} `} onClick={() => handleOnClick('create')}>
                create dog
              </div>
          </div>
        </div>
        <div className="content-container">
          {props.children}
        </div>
      </section>
      
  );
};
