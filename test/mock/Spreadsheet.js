import UsersSheet from './UsersSheet';

export default {
  getSheetByName: (name) => {
    switch (name) {
      case 'Users':
        return UsersSheet;
      default:
        return null;
    }
  },
};
