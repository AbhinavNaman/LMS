import { useAuth, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div>
        <UserButton />
    </div>
  );
}
