import withHover from "./withHover";
import withLoader from "../withLoader.jsx";

function DogImages(props = {}) {
  console.log("Example 3 DogImages props ", props);
  /**
   * {
   *   {
   *     "stk": "example 3",
   *     "hovering": false,
   *     "data": {
   *         "message": [ ],
   *     "status": "success",
   *     onMouseEnter :  () => setHover(true),
   *     onMouseLeave :  () => setHover(false),
   *     }
   * }
   */
  return (
    <div>
      <h1>Example 3</h1>
      {props.hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data?.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);