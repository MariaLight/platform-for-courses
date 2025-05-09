
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { ContainerWithSidebar } from './components/ContainerWithSidebar/ContainerWithSidebar';
import { Authorization, Profile, Users, EditUser } from './pages';
import { MainPage } from './pages/MainPage/MainPage';
import { Registartion } from './pages/Registration/Registration';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Container><MainPage /></Container>} />
        <Route path="/login" element={<Container><Authorization /></Container>} />
        <Route path="/register" element={<Container><Registartion /></Container>} />
        <Route path="/forgot-password" element={<Container>Забыли пароль</Container>} />
        <Route path="/users" element={<ContainerWithSidebar><Users /></ContainerWithSidebar>} />
        {/* <Route path="/edit-profile" element={<ContainerWithSidebar><Users /></ContainerWithSidebar>} /> */}
        <Route path="/edit-profile/:userId" element={<ContainerWithSidebar><EditUser /></ContainerWithSidebar>} />
        
        <Route path="/courses" element={<ContainerWithSidebar>Мои курсы</ContainerWithSidebar>} />
        <Route path="/courses/:courseSlug" element={<ContainerWithSidebar>Страница курса</ContainerWithSidebar>} />
        <Route path="/courses/:courseSlug/:moduleSlug" element={<ContainerWithSidebar>Страница модуля</ContainerWithSidebar>} />
        <Route path="/courses/:courseSlug/:moduleSlug/:lessonId" element={<ContainerWithSidebar>Страница урока</ContainerWithSidebar>} />

        <Route path="/support" element={<ContainerWithSidebar>Поддержка</ContainerWithSidebar>} />
        <Route path="/catalog" element={<ContainerWithSidebar>Каталог</ContainerWithSidebar>} />
        <Route path="/profile" element={<ContainerWithSidebar><Profile /></ContainerWithSidebar>} />

        <Route path="*" element={<ContainerWithSidebar>Ошибка</ContainerWithSidebar>} />
      </Routes >
    </>
  )
}

export default App