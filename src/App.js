import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminAddCourse from './Pages/Admin/AdminAddCourse';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';
import AddCourse from './Pages/Enseignant/AddCourse';
import EnseignantCourse from './Pages/Enseignant/EnseignantCourse';
import EnseignantGrid from './Pages/Enseignant/EnseignantGrid';
import EnseignantLinkedAccount from './Pages/Enseignant/EnseignantLinkedAccount';
import EnseignantModifyProfile from './Pages/Enseignant/EnseignantModifyProfile';
import EnseignantProfile from './Pages/Enseignant/EnseignantProfile';
import EnseignantReviews from './Pages/Enseignant/EnseignantReviews';
import EnseignantSecurity from './Pages/Enseignant/EnseignantSecurity';
import EnseignantSocialProfile from './Pages/Enseignant/EnseignantSocialProfile';
import PayedCourse from './Pages/Admin/PayedCourse';
import CourseLesson from './Pages/Etudiant/CourseLesson';
import Paiment from './Pages/Etudiant/Paiment';
import Panier from './Pages/Etudiant/Panier';
import StudentCourse from './Pages/Etudiant/StudentCourse';
import StudentDashboard from './Pages/Etudiant/StudentDashboard';
import StudentMessage from './Pages/Etudiant/StudentMessage';
import StudentProfile from './Pages/Etudiant/StudentProfile';
import StudentSecurity from './Pages/Etudiant/StudentSecurity';
import ForgetPassword from './Pages/ForgetPassword';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import StudentCv from './Pages/Etudiant/StudentCv';
import TeacherCv from './Pages/Enseignant/TeacherCv';
import AddAdmin from './Pages/Admin/AddAdmin';
import AdminProfile from './Pages/Admin/AdminProfile';
import AdminList from './Pages/Admin/AdminList';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contactus" element={<ContactUs />} />
          {/* Enseignant */}
          <Route path="EnseignantProfile" element={<EnseignantProfile />} />
          <Route path="EnseignantGrid" element={<EnseignantGrid/>} />
          <Route path="EnseignantCourse" element={<EnseignantCourse/>} />
          <Route path="EnseignantReviews" element={<EnseignantReviews/>} />
          <Route path="EnseignantModifyProfile" element={<EnseignantModifyProfile/>} />
          <Route path="Enseignantsecurity" element={<EnseignantSecurity/>} />
          <Route path="EnseignantSocialProfile" element={<EnseignantSocialProfile/>} />
          <Route path="EnseignantLinkedAccount" element={<EnseignantLinkedAccount/>} />
          <Route path="addcourse" element={<AddCourse/>}/>
          <Route path="TeacherCv" element={<TeacherCv/>} />

          {/* Student */}
          <Route path="StudentProfile" element={<StudentProfile/>} />
          <Route path="StudentSecurity" element={<StudentSecurity/>} />
          <Route path="paiment" element={<Paiment/>} />
          <Route path="Courselesson" element={<CourseLesson/>} />
          <Route path="StudentCourse" element={<StudentCourse/>} />
          <Route path="panier" element={<Panier/>} />
          <Route path="StudentDashboard" element={<StudentDashboard/>} />
          <Route path="StudentMessage" element={<StudentMessage/>} />
          <Route path="StudentCv" element={<StudentCv/>} />
          {/* <Route path="courseDetails" element={<courseDetails/>} /> */}

          {/* Admin */}
          <Route path="adminaddcourse" element={<AdminAddCourse/>}/>
          <Route path="payedcourse" element={<PayedCourse/>} />
          <Route path="addadmin" element={<AddAdmin/>}/>
          <Route path="adminprofile" element={<AdminProfile/>}/>
          <Route path="adminlist" element={<AdminList />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
