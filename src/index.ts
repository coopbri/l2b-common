/**
 * Extend user metadata.
 * @see {@link https://github.com/clerkinc/javascript/blob/86f68940054ae1add2f73b365c47472ce3f5fd1a/packages/types/src/user.ts}
 */
declare global {
  interface UserPublicMetadata {
    role: string;
    [k: string]: unknown;
  }
}

export * from "./lib/data";
export * from "./lib/types";
