import UsersSheet from './UsersSheet';
import TimeSheetsSheet from './TimeSheetsSheet';
import SlackUrlSheet from './SlackUrlSheet';
import SampleSheet from './SampleSheet';

export default {
  getSheetByName: (name) => {
    switch (name) {
      case 'Users':
        return UsersSheet;
      case 'TimeSheets':
        return TimeSheetsSheet;
      case 'Settings':
        return SlackUrlSheet;
      case '見本':
        return SampleSheet;
      default:
        return null;
    }
  },
};
