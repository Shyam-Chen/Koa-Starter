import passport from 'koa-passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import UserDocument from '~/authentication/document';

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async (jwtPayload, done) => {
      try {
        if (Date.now() > jwtPayload.expires) return done('Token expired');

        const user = await UserDocument.findOne({ username: jwtPayload.username }).exec();
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

export default passport;
