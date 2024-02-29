import { z } from "zod";

export const User = z.object({
  email: z.string().email(),
});

export interface Subcription {
  setSubscription: React.Dispatch<React.SetStateAction<boolean>>;
}
