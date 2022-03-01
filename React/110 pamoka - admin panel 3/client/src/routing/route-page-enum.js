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
import CollectionsPage from '../pages/logged-in-pages/admin-pages/collections-page';
import CollectionPanelPage from '../pages/logged-in-pages/admin-pages/collection-panel-page';
import CategoryPanelPage from '../pages/logged-in-pages/admin-pages/category-panel-page';

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
  CollectionsPage,
  CollectionPanelPage,
  CategoryPanelPage,
};
