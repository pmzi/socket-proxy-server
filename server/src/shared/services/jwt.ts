import { JWT_EXPIRE } from '@shared/config';
import jwt from 'jsonwebtoken';

export default {
  sign(data: Record<string, unknown>): string {
    return jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
  },
};
