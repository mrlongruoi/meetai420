import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; 
import * as schema from "@/db/schema"; // Adjust the import path as necessary
export const auth = betterAuth({

    emailAndPassword:{
        enabled:true,
    },

    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema,
        } 
    })
});