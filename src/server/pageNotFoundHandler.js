export default (req, res, next) => {
  res.json({'message': 'page not found'});
  res.statusCode = 404;
  next();
};
