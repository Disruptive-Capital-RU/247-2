import { clerkClient } from "@clerk/nextjs";

export async function updateUserMetadata(
  userId: string,
  metadata: {
    preferredContact?: string;
    tags?: string[];
  }
) {
  return await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: metadata,
  });
}

export async function getUserMetadata(userId: string) {
  const user = await clerkClient.users.getUser(userId);
  return user.publicMetadata;
}
