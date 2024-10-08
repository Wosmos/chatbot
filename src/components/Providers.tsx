// 'use client';
// import { ThemeProvider } from 'next-themes';
// import { PropsWithChildren } from 'react';
// import { NextUIProvider } from '@nextui-org/react';

// export const Providers = ({ children }: PropsWithChildren) => {
//   return (
//     <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
//       <NextUIProvider>{children}</NextUIProvider>
//     </ThemeProvider>
//   );
// };



'use client';

import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}