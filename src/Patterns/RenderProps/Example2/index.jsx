/*
 *  render prop pattern makes components reusable, by using the render
 *  prop pattern. A render prop is a prop on a component, which value is a
 *  function that returns a JSX element. The component itself does not render
 *  anything besides the render prop. Instead, the component simply calls the
 *  render prop, instead of implementing its own rendering logic.
 *
 * Imagine that we have a Title component. In this case, the Title component
 * shouldn't do anything besides rendering the value that we pass. We can use
 * a render prop for this! Let's pass the value that we want the Title
 * component to render to the render prop.
 *
 * <Title render={() => <h1>I am a render prop!</h1>} />
 *
 * Within the Title component, we can render this data by returning the invoked render prop!
 *
 * const Title = (props) => props.render();
 *
 * To the Component element, we have to pass a prop called render, which is
 * a function that returns a React element.
 */

const Title = (props) => props.render();

export default function Example2() {
  return (
    <div className="">
      <Title render={() => <h1>✨ First render prop! ✨</h1>} />
      <Title render={() => <h2>🔥 Second render prop! 🔥</h2>} />
      <Title render={() => <h3>🚀 Third render prop! 🚀</h3>} />
    </div>
  );
}

/*
 * The cool thing about render props, is that the component that receives the
 * prop is very reusable. We can use it multiple times, passing different
 * values to the render prop each time.
 *  */