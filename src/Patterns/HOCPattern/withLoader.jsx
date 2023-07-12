/* eslint-disable react/display-name */
import { useEffect, useState } from "react";

export default function withLoader(Element, url) {
  return (props) => {
    console.log("Example 3 withLoader props ", props);
    /*
     * {
     *   "stk": "example 3",
     *   "hovering": false,
     *   onMouseEnter :  () => setHover(true),
     *   onMouseLeave :  () => setHover(false),
     *   stk : "example 3"
     * }
     *  */
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}

/**
 * A Higher Order Component (HOC) is a component that receives
 * another component. The HOC contains certain logic that we
 * want to apply to the component that we pass as a parameter.
 * After applying that logic, the HOC returns the element with
 * the additional logic.
 *
 * here the HOC is withLoader that is taking in DogsImages
 * component and return it with some fetched data.
 */