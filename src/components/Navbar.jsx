import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaGraduationCap className="text-2xl" />
              <span className="font-bold text-xl">LearnEase</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-indigo-200">Home</Link>
            <Link to="/courses" className="hover:text-indigo-200">Courses</Link>
            <Link to="/categories" className="hover:text-indigo-200">Categories</Link>
            {isAuthenticated && (
              <Link to="/my-learning" className="hover:text-indigo-200">My Learning</Link>
            )}
            <Link to="/about" className="hover:text-indigo-200">About</Link>
            <Link to="/contact" className="hover:text-indigo-200">Contact</Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-indigo-200">
                  <FaUserCircle className="text-2xl" />
                </Link>
                <Link to="/logout" className="hover:text-indigo-200">Logout</Link>
              </div>
            ) : (
              <Link to="/login" className="hover:text-indigo-200">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;