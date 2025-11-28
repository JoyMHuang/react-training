import React from 'react';

function PageLayout({ children }) {
  return (
    <div className='page-layout'>
      <header className='page-header'>
        <h1>React Training</h1>
      </header>
      <main className='page-content'>
        {children}
      </main>
    </div>
  );
}

export default PageLayout;