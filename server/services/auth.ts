import bcrypt from 'bcryptjs';
import { db } from '../db';
import { users, speakerProfiles, corporateProfiles } from '../schema';
import { eq } from 'drizzle-orm';

export class AuthService {
  static async register(data: {
    email: string;
    password: string;
    fullName: string;
    accountType: 'individual' | 'speaker' | 'corporate';
    speakerProfile?: {
      specialization: string;
      experience: string;
      portfolio?: string;
    };
    corporateProfile?: {
      companyName: string;
      position: string;
      companySize: string;
      industry: string;
    };
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Start a transaction
    return await db.transaction(async (tx) => {
      // Create user
      const [user] = await tx
        .insert(users)
        .values({
          email: data.email,
          password: hashedPassword,
          fullName: data.fullName,
          accountType: data.accountType,
        })
        .returning();

      // Create profile based on account type
      if (data.accountType === 'speaker' && data.speakerProfile) {
        await tx.insert(speakerProfiles).values({
          userId: user.id,
          ...data.speakerProfile,
        });
      }

      if (data.accountType === 'corporate' && data.corporateProfile) {
        await tx.insert(corporateProfiles).values({
          userId: user.id,
          ...data.corporateProfile,
        });
      }

      return user;
    });
  }

  static async login(email: string, password: string) {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    return user;
  }

  static async getUserProfile(userId: string) {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, userId));

    if (!user) {
      throw new Error('User not found');
    }

    let profile = null;
    if (user.accountType === 'speaker') {
      const [speakerProfile] = await db
        .select()
        .from(speakerProfiles)
        .where(eq(speakerProfiles.userId, userId));
      profile = speakerProfile;
    } else if (user.accountType === 'corporate') {
      const [corporateProfile] = await db
        .select()
        .from(corporateProfiles)
        .where(eq(corporateProfiles.userId, userId));
      profile = corporateProfile;
    }

    return {
      ...user,
      profile,
    };
  }
} 