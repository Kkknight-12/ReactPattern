/* eslint-disable react/display-name */
import { useState } from "react";

export default function withHover(Element) {
  return (props) => {
    const [hovering, setHover] = useState(false);
    console.log("props ===> ", props);
    // { stk : "example 3" }

    return (
      <Element
        {...props}
        hovering={hovering}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  };
}

/*
 * We can also compose multiple Higher Order Components. We created a
 * HOC that provides a hovering prop to the element passed.
 * Based on that prop, we can conditionally render the text box based on
 *  whether the user is hovering over the DogImages list.
 *  */