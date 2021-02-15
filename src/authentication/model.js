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

export default {
  User: mongoose.model(
    'User',
    new mongoose.Schema({
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
    }),
  ),
};
