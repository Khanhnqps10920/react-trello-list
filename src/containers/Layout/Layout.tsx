import React, { ReactNode } from 'react';

import Header from './Header';

interface ILayoutProps {
    children: ReactNode
}

function LayoutMain({ children }: ILayoutProps) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default LayoutMain;
