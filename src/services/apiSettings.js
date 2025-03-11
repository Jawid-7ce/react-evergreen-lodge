import supabase from "./supabase";

export async function getSettings() {
  console.log("📡 Fetching settings from Supabase...");

  try {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .single();

    if (error) {
      console.error("❌ Supabase getSettings error:", error);
      throw new Error("Settings could not be loaded");
    }

    console.log("✅ Supabase getSettings data:", data);
    return data;
  } catch (err) {
    console.error("🔥 Unexpected error in getSettings:", err);
    throw err;
  }
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}
