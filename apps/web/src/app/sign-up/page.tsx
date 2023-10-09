import { SignUp } from "@protoxyz/components";

import { Container } from "@/components/container";

export default function SignUpPage() {
  return (
    <Container>
      <SignUp afterSignUpRedirectUri="/" />
    </Container>
  );
}
