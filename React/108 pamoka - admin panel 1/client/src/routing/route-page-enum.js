// Layouts
import PageLayout from '../components/layouts/page-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';
// Public pages
import HomePage from '../pages/public-pages/home-page';
import ErrorPage from '../pages/public-pages/error-page';
// Visitor pages
import LoginPage from '../pages/visitor-pages/login-page';
import RegisterPage from '../pages/visitor-pages/register-page';
// Logged in pages
import ProfilePage from '../pages/logged-in-pages/profile-page';
// Admin pages
import UsersPanelPage from '../pages/logged-in-pages/admin-pages/user-panel-page';
import CollectionsPage from '../pages/logged-in-pages/admin-pages/collections-page';
import CollectionPanelPage from '../pages/logged-in-pages/admin-pages/collection-panel-page';

export default {
  // Layouts
  PageLayout,
  DashboardLayout,
  // Public pages
  HomePage,
  ErrorPage,
  // Visitor pages
  LoginPage,
  RegisterPage,
  // Logged in pages
  ProfilePage,
  // Admin pages
  UsersPanelPage,
  CollectionsPage,
  CollectionPanelPage,
};
