import React from "react";
import styles from './StickyNotes.module.css';
function StickyNotes(){
    return(
        <React.Fragment>
<div className={`${styles.stickyContainer} ${styles.stickyRoot}`}>I am Sticky Notes Component</div>
        </React.Fragment>
    )
}

export default StickyNotes