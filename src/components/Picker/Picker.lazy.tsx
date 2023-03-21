import React, { lazy, Suspense } from 'react';

const LazyPicker = lazy(() => import('./Picker'));

const Picker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPicker {...props} />
  </Suspense>
);

export default Picker;
