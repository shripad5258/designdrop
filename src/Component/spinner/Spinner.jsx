import PuffLoader from "react-spinners/PuffLoader";
import React from "react";
import { useState } from "react";
import "./spinner.css";
function Spinner() {
  let [color, setColor] = useState("#16a085");
  let [loading, setLoading] = useState(true);
  return (
    <div>
      <div className="spinner">
        <PuffLoader color={color} loading={loading} />
      </div>
    </div>
  );
}

export default Spinner;
