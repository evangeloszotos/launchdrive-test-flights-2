import { NextRouter } from 'next/router';

interface SagaRouterReference {
  router: NextRouter | null;
}

export const routerRef: SagaRouterReference = { router: null };
export default routerRef;
