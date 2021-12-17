module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc8677fba07cd582f02f9cffb54fc33a'),
  },
});
