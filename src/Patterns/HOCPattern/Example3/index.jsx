/*
 * We can also compose multiple Higher Order Components. Let's say that we
 * also want to add functionality that shows a Hovering! text box when the
 * user hovers over the DogImages list.
 *
 * We need to create a HOC that provides a hovering prop to the element that
 * we pass. Based on that prop, we can conditionally render the text box
 * based on whether the user is hovering over the DogImages list.
 *  */

const stk = "example 3"

import DogImages from "./DogImage.jsx"

export default function Example3() {
  return <DogImages stk={stk} />
}
