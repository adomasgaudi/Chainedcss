'use client';
/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { _ } from 'chainedcss';

const TestComp = () => (
  <div>
    <Link href="/about">helo link</Link>
    <h1 {..._.bgRed500``.border``}>CHAINS</h1>
  </div>
);

export default TestComp;
