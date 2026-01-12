import prisma from '../../config/database.js';
import { comparePassword } from '../../utils/password.utils.js';
import { signToken } from '../../utils/jwt.utils.js';
import { Admin } from '../../types/admin.types.js';

export class AuthService {
  async signin(email: string, password: string): Promise<Admin> {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin || !admin.password) throw new Error('Invalid Credentials');
    const match = await comparePassword(password, admin.password);
    if (!match) throw new Error('Invalid Credentials.');

    const token = signToken({ userId: admin.id });

    return {
      id: admin.id,
      email: admin.email,
      role: admin.role,
      token,
    };
  }
}
