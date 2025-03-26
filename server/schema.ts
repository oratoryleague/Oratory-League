import { pgTable, text, timestamp, boolean, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  fullName: text('full_name').notNull(),
  accountType: text('account_type', { enum: ['individual', 'speaker', 'corporate'] }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const speakerProfiles = pgTable('speaker_profiles', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  specialization: text('specialization').notNull(),
  experience: text('experience').notNull(),
  portfolio: text('portfolio'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const corporateProfiles = pgTable('corporate_profiles', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  companyName: text('company_name').notNull(),
  position: text('position').notNull(),
  companySize: text('company_size').notNull(),
  industry: text('industry').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const insertSpeakerProfileSchema = createInsertSchema(speakerProfiles);
export const selectSpeakerProfileSchema = createSelectSchema(speakerProfiles);

export const insertCorporateProfileSchema = createInsertSchema(corporateProfiles);
export const selectCorporateProfileSchema = createSelectSchema(corporateProfiles);

// Combined schemas for registration
export const registerSchema = z.object({
  ...insertUserSchema.shape,
  speakerProfile: insertSpeakerProfileSchema.optional(),
  corporateProfile: insertCorporateProfileSchema.optional(),
}); 