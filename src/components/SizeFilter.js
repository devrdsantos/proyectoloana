import React from "react";
import "../styles/sizefilter.css";

function SizeFilter() {
  return (
    <div className="size-filter-container">
      <p className="filter-for">FILTRAR POR</p>
      <p className="size-p">TALLE</p>
      <div className="checkbox-size-div">
        <div>
          <input type="checkbox" className="size-checkbox" name="size-34" />
          34
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-36" />
          36
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-38" />
          38
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-40" />
          40
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-42" />
          42
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-44" />
          44
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-46" />
          46
        </div>
        <div>
          <input type="checkbox" className="size-checkbox" name="size-48" />
          48
        </div>
      </div>
    </div>
  );
}

export default SizeFilter;
