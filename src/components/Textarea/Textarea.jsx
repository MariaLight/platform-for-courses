import { Editor } from '@tinymce/tinymce-react';
import styles from './textarea.module.css';
import { useRef } from 'react';

export const Textarea = ({ label, editorRef, setLessonContent, ...props }) => {
    return (
        <div className={`${styles.input__wrapper} ${styles.textarea__wrapper}`}>
            <label className={styles.label}>{label}:</label>
            <Editor
                className={styles.textarea}
                apiKey='m0vkffnhbc03ptg4vrm6gdtkhff5pl92ewyo3kurm713lwrg'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={props.content}
                onChange={({ target }) => setLessonContent(target.getContent())}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount'
                    ]
                }}
            />
        </div>
    )
}