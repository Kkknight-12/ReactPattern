import useHover from "./useHover"
import withLoader from "../withLoader.jsx"

function DogImages(props) {
  const [hoverRef, hovering] = useHover()

  console.log("example 4 props ", props)
  console.log("hovering example 4 ", hovering)

  return (
    <div ref={hoverRef} {...props} style={{ position: "relative" }}>
      {hovering && (
        <div id="hover" style={{ position: "absolute" }}>
          Hovering!
        </div>
      )}

      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  )
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
)


