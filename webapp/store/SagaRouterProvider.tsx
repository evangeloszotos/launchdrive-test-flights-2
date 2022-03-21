import React from 'react';
import { useRouter } from 'next/router';
import routerRef from './sagaRouterReference';

export const SagaRouterProvider: React.FC = (props) => {
  const router = useRouter();
  routerRef.router = router;

  return <>{props.children}</>;
};

export default SagaRouterProvider;
