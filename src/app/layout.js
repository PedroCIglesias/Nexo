import './globals.css';
import { Provider } from '@/components/ui/provider';

export const metadata = {
  title: 'Micro-SaaS - Gráfico de Gantt',
  description: 'Gestão de projetos simplificada com gráficos de Gantt.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
