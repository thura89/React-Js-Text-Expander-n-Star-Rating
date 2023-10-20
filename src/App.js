import React from "react";
import StarRating from "./StarRating";
import { TextXpander } from "./TextXpander";

const App = () => {
  return (
    <>
      <div>
        <StarRating></StarRating>
        <StarRating color="red"></StarRating>
        <StarRating
          color="Blue"
          messages={["Bad", "Not Good", "Good", "Nice", "Amazing"]}
        ></StarRating>
      </div>
      <div>
        <TextXpander></TextXpander>
      </div>
    </>
  );
};

export default App;
