// import TemperatureConverter from "./Example1/index";

import { StyledText } from "./Example1/index.jsx";
import Example3 from "./Example3/index.jsx";
import Example2 from "./Example2/index.jsx";
import "./styles.css";
import Example4 from "./Example4/index.jsx";
import PracticeHOCComponent from "./practiceHOCComponent/index.jsx";

const stk = "ss";

export default function HocPattern() {
  return (
    <>
      {/* Example 1 */}
      <StyledText stk={stk} />

      {/* Example 2 */}
      <div className="dog">
        <h1>
          Browse Dog Images{" "}
          <span role="img" aria-label="emoji">
            🐕
          </span>
        </h1>
        {/* <Example2 /> */}
        {/* <Example3 /> */}
        {/* <Example4 /> */}
        <PracticeHOCComponent stk={stk} />
      </div>
    </>
  );
}