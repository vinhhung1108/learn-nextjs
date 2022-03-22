import { LayoutProps } from 'models';
import Link from 'next/link';
import React from 'react';

export function AdminLayout ({children}: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <div>
          {children}
      </div>
    </div>
  );
}
