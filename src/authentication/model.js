import mongoose from 'mongoose';

/**
 * @example
 * {
 *   username: 'shyam-chen',
 *   password: '3345678',
 *   email: 'shyam.chen@gmail.com',
 *   role: 'user',
 *   permissions: [
 *     {
 *       route: '/foo',
 *       operations: ['create', 'read', 'update', 'delete'],
 *     },
 *     {
 *       route: '/bar',
 *       operations: ['read'],
 *     },
 *   ],
 * }
 */

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator(value) {
        return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
          value,
        );
      },
      message: ({ value }) => `${value} is not a valid email format`,
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  countryOrRegion: {
    type: String,
  },
});

const refreshTokenSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  token: String,
  expires: Date,
  revoked: Date,
  ipAddress: String,
});

refreshTokenSchema.virtual('isExpired').get(() => {
  return Date.now() >= this.expires;
});

refreshTokenSchema.virtual('isActive').get(() => {
  return !this.revoked && !this.isExpired;
});

export default {
  User: mongoose.model('User', userSchema),
  RefreshToken: mongoose.model('RefreshToken', refreshTokenSchema),
};
