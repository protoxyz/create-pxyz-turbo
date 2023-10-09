import { SignIn } from "@protoxyz/components";

import { Container } from "@/components/container";

export default function SignInPage() {
  return (
    <Container>
      <SignIn afterSignInRedirectUri="/" />
    </Container>
  );
}
