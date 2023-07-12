import { useState, useRef, useEffect } from "react"

/*
 * The useEffect hook adds an event listener to the component, and sets the
 * value hovering to true or false, depending on whether the user is
 * currently hovering over the element. Both the ref and hovering values need
 * to be returned from the hook: ref to add a ref to the component that
 * should receive the mouseOver and mouseLeave events, and hovering in order
 * to be able to conditionally render the Hovering! text box.
 *
 * Instead of wrapping the DogImages component with the withHover HOC, we can
 * use the useHover hook right inside the DogImages component.
 * */

export default function useHover() {
  const [hovering, setHover] = useState(false)
  const ref = useRef(null)

  const handleMouseOver = () => setHover(true)

  const handleMouseOut = () => setHover(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener("mouseover", handleMouseOver)
      node.addEventListener("mouseout", handleMouseOut)

      return () => {
        node.removeEventListener("mouseover", handleMouseOver)
        node.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [ref.current])

  return [ref, hovering]
}
