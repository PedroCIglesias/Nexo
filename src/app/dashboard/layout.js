import Header from '@/components/Header';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header userName="Pedro Carlo" />
      <main>{children}</main>
    </>
  );
}
