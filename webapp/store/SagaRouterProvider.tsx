import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import routerRef from './sagaRouterReference';

interface EmptyProps {
  children: ReactElement<any, any> | null;
}

export const SagaRouterProvider: React.FC<EmptyProps> = (props) => {
  const router = useRouter();
  routerRef.router = router;

  return props.children;
};

export default SagaRouterProvider;
