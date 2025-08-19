import { useState } from "react";
import data from "./data";
import styles from "./Accordian.module.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelction, setEnableMultiSelction] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];

    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => {
          setEnableMultiSelction(!enableMultiSelction);
          setSelected(null);
          setMultiple([]);
        }}
      >
        Enable Multiselection
      </button>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelction
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className={styles.item}
              key={dataItem.id}
            >
              <div className={styles.title}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                <div className={styles.content}>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
