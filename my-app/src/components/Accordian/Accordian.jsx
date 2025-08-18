import { useState } from "react";
import data from "./data";
import styles from "./Accordian.module.css";


function Accordian() {
  const [selected, setSelected] = useState(null);

function handleSingleSelection(getCurrentId){
  setSelected(getCurrentId===selected? null:getCurrentId);
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div onClick={()=>handleSingleSelection(dataItem.id)} className={styles.item} key={dataItem.id}>
                <div className={styles.title}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
              </div>
              {
                selected === dataItem.id ?
                <div className={styles.content}>{dataItem.answer}</div>:null
              }
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
