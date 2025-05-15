import { useState } from 'react';
import styles from './upload.module.css';

export const Upload = ({ ...props }) => {
    const [imageUrl, setImageUrl] = useState(props.defaultImage);
    const [isEdited, setIsEdited] = useState(false);
    return (
        <>

            <div className={styles.control__btns}>
                <label htmlFor='upload-image' className={styles.input__wrapper}>
                    <span className={styles.label}>Загрузить фото:</span>
                    <input
                        type="file"
                        name="upload-image"
                        onChange={(event) => {
                            console.log(event.target.files[0]); // Log the selected file
                            setImageUrl(event.target.files[0]); // Update the state with the selected file
                            setIsEdited(true);
                        }}
                    />
                </label>
                <button type="button" className='main-btn white-btn' onClick={() => setImageUrl(null)}>Удалить</button>
            </div>
            {imageUrl &&
                <div className={styles.uploaded__image}>
                    {isEdited ?
                        <img src={URL.createObjectURL(imageUrl)} alt="" /> :
                        <img src={imageUrl} alt="" />
                    }
                </div>}
        </>
    )
}

