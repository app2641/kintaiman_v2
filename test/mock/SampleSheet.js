const range = {
  getValues: () => ([[1], [new Date('2018-05-02T00:00:00+0900')], [3]]),
  setValue: () => (true),
};

const SampleSheet = {
  copyTo: () => (SampleSheet),
  setName: name => (name),
  getRange: () => (range),
  getSheetId: () => ('sheetId'),
};

export default SampleSheet;
