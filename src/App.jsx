
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { ContainerWithSidebar } from './components/ContainerWithSidebar/ContainerWithSidebar';
import { Authorization, Profile, Users, EditUser, UserCourses, AllCourses, Course, Module } from './pages';
import { MainPage } from './pages/MainPage/MainPage';
import { Registartion } from './pages/Registration/Registration';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';


function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData');
    if (!currentUserDataJSON) return;
    const currentUserData = JSON.parse(currentUserDataJSON);
    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId)
    }));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Container><MainPage /></Container>} />
        <Route path="/login" element={<Container><Authorization /></Container>} />
        <Route path="/register" element={<Container><Registartion /></Container>} />
        <Route path="/forgot-password" element={<Container>Забыли пароль</Container>} />
        <Route path="/users" element={<ContainerWithSidebar><Users /></ContainerWithSidebar>} />
        <Route path="/edit-profile/:userId" element={<ContainerWithSidebar><EditUser /></ContainerWithSidebar>} />

        <Route path="/courses" element={<ContainerWithSidebar><UserCourses /></ContainerWithSidebar>} />
        <Route path="/courses/:courseId" element={<ContainerWithSidebar><Course /></ContainerWithSidebar>} />
        <Route path="/courses/:courseId/:moduleId" element={<ContainerWithSidebar><Module /></ContainerWithSidebar>} />
        <Route path="/courses/:courseId/:moduleId/:lessonId" element={<ContainerWithSidebar>Страница урока</ContainerWithSidebar>} />

        <Route path="/support" element={<ContainerWithSidebar>Поддержка</ContainerWithSidebar>} />
        <Route path="/catalog" element={<ContainerWithSidebar><AllCourses /></ContainerWithSidebar>} />
        <Route path="/profile" element={<ContainerWithSidebar><Profile /></ContainerWithSidebar>} />

        <Route path="*" element={<ContainerWithSidebar>Ошибка</ContainerWithSidebar>} />
      </Routes >
    </>
  )
}

export default App