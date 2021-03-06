import Logger from './mock/Logger';
import SpreadsheetApp from './mock/SpreadsheetApp';
import UrlFetchApp from './mock/UrlFetchApp';
import GmailApp from './mock/GmailApp';
import Utilities from './mock/Utilities';

global.Logger = Logger;
global.SpreadsheetApp = SpreadsheetApp;
global.UrlFetchApp = UrlFetchApp;
global.GmailApp = GmailApp;
global.Utilities = Utilities;
