// Helper used to create subtypes for each redux dispatch action
// eslint-disable-next-line import/no-anonymous-default-export
export default action => ({
  REQUEST: `${action}_ACTION`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
});
