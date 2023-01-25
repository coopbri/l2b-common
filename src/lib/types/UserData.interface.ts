import { User } from "@clerk/clerk-sdk-node";

/**
 * User data.
 */
interface UserData extends Omit<User, "publicMetadata"> {
  publicMetadata: UserPublicMetadata & { role: string };
}

export default UserData;
