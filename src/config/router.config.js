const routePaths = ['dashboard']
  .map(path => require(`pages/${path}/router.js`).default);

export default routePaths;
