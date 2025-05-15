
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { ContainerWithSidebar } from './components/ContainerWithSidebar/ContainerWithSidebar';
import {
  Authorization,
  Profile,
  Users,
  EditUser,
  UserCourses,
  AllCourses,
  Course,
  CourseIndex,
  Module,
  Lesson,
  ModuleIndex,
  AddCourse,
  AddModule,
  EditCourse,
  EditModule,
  LessonIndex,
  LessonEdit,
  AddLesson
} from './pages';
import { MainPage } from './pages/MainPage/MainPage';
import { Registartion } from './pages/Registration/Registration';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { sessions } from './bff/session';


function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData');
    if (!currentUserDataJSON) return;
    const currentUserData = JSON.parse(currentUserDataJSON);
    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId),
      session: sessions.add(currentUserData, currentUserData.session)
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

        <Route path="/courses" element={<ContainerWithSidebar />}>
          <Route index element={<UserCourses />} />
          <Route path="add-new" element={<AddCourse />} />
          <Route path=":courseId" element={<Course />}>
            <Route index element={<CourseIndex />} />
            <Route path="edit" element={<EditCourse />} />
            <Route path="modules/add-new" element={<AddModule />} />
            <Route path="modules/:moduleId" element={<Module />}>
              <Route index element={<ModuleIndex />} />
              <Route path="edit" element={<EditModule />} />

              <Route path="lessons/add-new" element={<AddLesson />} />
              <Route path="lessons/:lessonId" element={<Lesson />}>
                <Route index element={<LessonIndex />} />

                <Route path="edit" element={<LessonEdit />} />
              </Route>

            </Route>
          </Route>
        </Route>




        <Route path="/support" element={<ContainerWithSidebar>Поддержка</ContainerWithSidebar>} />
        <Route path="/catalog" element={<ContainerWithSidebar><AllCourses /></ContainerWithSidebar>} />
        <Route path="/profile" element={<ContainerWithSidebar><Profile /></ContainerWithSidebar>} />

        <Route path="*" element={<ContainerWithSidebar>Ошибка</ContainerWithSidebar>} />
      </Routes >
    </>
  )
}

export default App