import App from './App';

global.test = () => {
  const params = { user_name: 'app2641', text: 'おは' };
  const app = new App(params);
  app.run();
};

global.doPost = (e) => {
  const app = new App(e.parameters);
  app.run();
};
