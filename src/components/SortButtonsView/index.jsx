import React from "react";
import style from "./SortButtonsView.module.scss";
import listIcon from "../../images/list.png";
import gridIcon from "../../images/grid.png";

const SortButtonsView = ({ setActiveButton }) => {
  return (
    <div className={style.containerButton}>
      <div className={style.containerIcons}>
        <img
          src={listIcon}
          className={style.icon}
          value="list"
          onClick={() => setActiveButton("list")}
        />
        <img
          src={gridIcon}
          className={style.icon}
          value="grid"
          onClick={() => setActiveButton("grid")}
        />
      </div>
    </div>
  );
};

export default SortButtonsView;
