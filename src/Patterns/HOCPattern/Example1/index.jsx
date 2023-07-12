// https://www.patterns.dev/posts/hoc-pattern
// https://javascriptpatterns.vercel.app/patterns/react-patterns/higher-order-component

/*
 * A Higher Order Component (HOC) is a component that receives another
 * component. The HOC contains certain logic that we want to apply to the
 * component that we pass as a parameter. After applying that logic, the HOC
 * returns the element with the additional logic.
 *
 * Say that we always wanted to add a certain styling to multiple components
 * in our application. Instead of creating a style object locally each time,
 * we can simply create a HOC that adds the style objects to the component
 * that we pass to it
 * */

export function withStyles(Component) {
  return (props) => {
    console.log({ props });
    const style = {
      color: "red",
      fontSize: "1em",
      // Merge props
      ...props.style,
    };

    return <Component {...props} style={style} />;
  };
}

const Text = () => <p style={{ fontFamily: "Inter" }}>Hello world... !</p>;

export const StyledText = withStyles(Text);