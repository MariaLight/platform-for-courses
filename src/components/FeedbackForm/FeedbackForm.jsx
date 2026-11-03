import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { sendFeedback } from '../../bff/api';
import styles from './feedback-form.module.css';

export const FeedbackForm = ({ courseTitle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);
    const [busy, setBusy] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError('Заполните все поля');
            return;
        }

        setBusy(true);
        sendFeedback(name.trim(), email.trim(), message.trim(), courseTitle)
            .then(() => {
                setDone(true);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.log('feedback fail', err);
                setError('Не получилось отправить, попробуйте ещё раз');
            })
            .finally(() => setBusy(false));
    };

    if (done) {
        return <p className={styles.ok}>Заявка отправлена, мы свяжемся с вами</p>;
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            {courseTitle && <p className={styles.course}>Курс: {courseTitle}</p>}
            <Input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className={styles.textarea}
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type="submit" disabled={busy}>{busy ? 'Отправка...' : 'Отправить'}</Button>
        </form>
    );
};
