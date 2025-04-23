import { supabase } from "../supabase";
import type { User } from "../types";

export const upsertUser = async (userData: {
  id: string;
  email: string;
  name: string;
  image?: string;
}): Promise<User | null> => {
  const now = new Date().toISOString();
  console.log("Starting upsertUser operation with data:", userData);

  try {
    // First check if user exists
    const { data: existingUser, error: selectError } = await supabase
      .from("users")
      .select()
      .eq("id", userData.id)
      .maybeSingle();

    if (selectError) {
      console.error("Error checking for existing user:", selectError);
      throw selectError;
    }

    console.log("Existing user check result:", existingUser);

    if (existingUser) {
      console.log("Updating existing user");
      const { data: updatedUser, error: updateError } = await supabase
        .from("users")
        .update({ last_login: now })
        .eq("id", userData.id)
        .select()
        .maybeSingle();

      if (updateError) {
        console.error("Error updating user:", updateError);
        throw updateError;
      }

      return updatedUser;
    }

    console.log("Creating new user");
    // For new user, first insert
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        image: userData.image,
        created_at: now,
        last_login: now,
      },
    ]);

    if (insertError) {
      console.error("Error inserting new user:", insertError);
      throw insertError;
    }

    // Then fetch the inserted user
    const { data: newUser, error: fetchError } = await supabase
      .from("users")
      .select()
      .eq("id", userData.id)
      .maybeSingle();

    if (fetchError) {
      console.error("Error fetching new user:", fetchError);
      throw fetchError;
    }

    return newUser;
  } catch (error) {
    console.error("Unexpected error in upsertUser:", error);
    throw error;
  }
};
