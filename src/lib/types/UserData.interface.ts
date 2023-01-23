import { User } from "@clerk/clerk-sdk-node";

/**
 * User data.
 */
interface UserData extends Omit<User, "publicMetadata"> {
  publicMetadata: { role: string };
}

export default UserData;
