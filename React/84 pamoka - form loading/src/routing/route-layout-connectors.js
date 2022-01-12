import PageLayout from '../components/layouts/page-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';

export const PageLayoutConnector = {
  route: '/',
  Layout: PageLayout,
};
export const DashboardLayoutConnector = {
  route: '/dashboard',
  Layout: DashboardLayout,
};
