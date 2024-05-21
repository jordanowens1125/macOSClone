import DivideSvgComponent from "../icons/divide";
import MultiplySvgComponent from "../icons/multiply";
import PlusMinusSvgComponent from "../icons/plusminus";
import "./calculator.scss";
import Windowcomponent from "./window";

export default function Calculator() {
  return (
    <Windowcomponent
      header={""}
      classname={"calculator"}
      Component={
        <div className="app">
          <p className="number">0</p>
          <button className="top-row">AC</button>
          <button className="plus-minus top-row">
            <PlusMinusSvgComponent />
          </button>
          <button className="top-row">
            <DivideSvgComponent />
          </button>
          <button className="right-col">
            <MultiplySvgComponent />
          </button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="right-col">&times;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="right-col">-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="right-col">+</button>
          <button className="zero">0</button>
          <button>.</button>
          <button className="right-col">=</button>
        </div>
      }
    />
  );
}
