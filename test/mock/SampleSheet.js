const range = {
  getValues: () => ([[1], [2], [3]]),
  setValue: () => (true),
};

const SampleSheet = {
  copyTo: () => (SampleSheet),
  setName: name => (name),
  getRange: () => (range),
  getSheetId: () => ('sheetId'),
};

export default SampleSheet;
