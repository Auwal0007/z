import serverless from 'serverless-http';
import { createApp } from '../../server/app.js';

let app: any;

const getApp = async () => {
  if (!app) {
    app = await createApp();
  }
  return app;
};

const appPromise = getApp();

export const handler = async (event: any, context: any) => {
  const app = await appPromise;
  const serverlessHandler = serverless(app, {
    binary: false,
    request: (request: any) => {
      // Strip /api from the path since our routes expect it
      if (request.path.startsWith('/api')) {
        request.path = request.path.replace('/api', '');
      }
      if (request.path === '') {
        request.path = '/';
      }
    }
  });
  
  return serverlessHandler(event, context);
};
