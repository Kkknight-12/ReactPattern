const AddName = (props) => {
  const name = "Knight";

  console.log("props from practice HOC component", props);
  return (
    <div>
      <h1>{name}</h1>
      <p>{props.game}</p>
    </div>
  );
};

// calling the higher order function
export default PracticeHOCComponent(AddName);

// creating a HOC
function PracticeHOCComponent(Element) {
  const game = "skyrim";
  return (props) => {
    return <Element {...props} game={game} />;
  };
}