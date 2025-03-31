import { auth, clerkClient } from "@clerk/nextjs";
import AssistantDashboard from "@/components/dashboard/AssistantDashboard";
import ClientDashboard from "@/components/dashboard/ClientDashboard"; // You’ll build this later

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId);
  const role = user.publicMetadata.role || "client";

  return role === "assistant" ? <AssistantDashboard /> : <ClientDashboard />;
}
