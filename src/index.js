import App from './App';

global.test = () => {
  const params = { user_name: 'app2641', message: '# beginning of message is #' };
  const App = new App(params);
  App.run();
};

global.doPost = (e) => {
  const App = new App(e.parameters);
  App.run();
};
