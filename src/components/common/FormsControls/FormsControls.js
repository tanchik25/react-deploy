import React, {Fragment} from 'react';
import styles from './FormsControls.module.css';

export const DialogTextarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <Fragment>
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <textarea {...input} {...props}/>
            </div>
            {hasError &&
            <span className={styles.field__error}>
                {meta.error}
            </span>}
        </Fragment>
    );
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <Fragment>
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <input {...input} {...props}/>
            </div>
            {hasError &&
            <div className={styles.field__error}>
                {meta.error}
            </div>}
        </Fragment>
    );
}




