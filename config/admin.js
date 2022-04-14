module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '31bd02f0504ea37a69cd8fa3995ea076'),
  },
});
