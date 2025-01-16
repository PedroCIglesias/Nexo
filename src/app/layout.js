// app/layout.js
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'Micro-SaaS - Gráfico de Gantt',
  description: 'Gerencie projetos com gráficos de Gantt intuitivos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
