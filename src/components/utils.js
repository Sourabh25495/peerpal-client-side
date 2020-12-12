export const processInputFieldParams = (
  fieldLabels,
  fieldNames,
  staticStatement
) => {
  return fieldLabels.map((e, i) => ({
    label: e,
    fieldType: fieldNames[i],
    staticStatement: staticStatement[i],
  }));
};

export const processObjectToPopulateText = ({ populateText }) => {
  const userEnteredText = Object.entries(populateText)
  
  return userEnteredText.flat().join("")


};
