
import styles from './app.module.css';
import {Routes, Route} from 'react-router-dom';

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;

function App() {

  return (
    <>
      {/* <Header />
      <div >
      <i className="fa fa-user-o" aria-hidden="true"></i>
    
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<div>Авторизация</div>} />
          <Route path="/register" element={<div>Регистрация</div>} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </div>
      <Footer /> */}

    </>
  )
}

export default App