
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';

const Content = ({children}) => <div>{children}</div>;

function App() {

  return (
    <>
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<div>Авторизация</div>} />
          <Route path="/register" element={<div>Регистрация</div>} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/courses" element={<div>Мои курсы</div>} />
          <Route path="/courses/:courseSlug" element={<div>Страница курса</div>} />
          <Route path="/courses/:courseSlug/:moduleSlug" element={<div>Страница модуля</div>} />
          <Route path="/courses/:courseSlug/:moduleSlug/:lessonId" element={<div>Страница урока</div>} />

          <Route path="/support" element={<div>Поддержка</div>} />
          <Route path="/catalog" element={<div>Каталог</div>} />
          <Route path="/profile" element={<div>Профиль</div>} />

          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
    </>
  )
}

export default App