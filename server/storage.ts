import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import pg from "pg";
import { type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, users, contactInquiries } from "@shared/schema";

const { Pool } = pg;

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    this.db = drizzle(pool);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const result = await this.db.insert(contactInquiries).values(inquiry).returning();
    return result[0];
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return await this.db.select().from(contactInquiries);
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private inquiries: Map<number, ContactInquiry>;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.currentInquiryId = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = (this.users.size + 1).toString();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const newInquiry: ContactInquiry = { 
      ...inquiry, 
      id, 
      createdAt: new Date(),
      phone: inquiry.phone ?? null  // Handle optional phone field
    };
    this.inquiries.set(id, newInquiry);
    return newInquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.inquiries.values());
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
