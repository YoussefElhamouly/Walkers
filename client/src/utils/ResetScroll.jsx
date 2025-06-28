// app/components/ResetScroll.tsx
'use client';

import { useEffect } from 'react';

export default function ResetScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
