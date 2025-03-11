import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  console.log("📡 useSettings hook is called...");

  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      console.log("🔍 Fetching settings inside React Query...");
      const result = await getSettings();
      console.log("✅ Data received in React Query:", result);
      return result;
    },
  });

  if (isLoading) console.log("⏳ useSettings is loading...");
  if (error) console.error("❌ useSettings encountered an error:", error);
  if (settings) console.log("🎯 Final settings data:", settings);

  return { isLoading, error, settings };
}
