import {
  Body,
  Html,
  Preview,
  Text,
  Container,
  Tailwind,
} from "@react-email/components";
import React from "react";
const WelcomeEmail = ({ name }: { name: string }) => {
  return (
    <Tailwind>
      <Html>
        <Preview>Welocme to our site </Preview>
        <Body>
          <Container>
            <Text className="bg-slate-600">Hello {name}</Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default WelcomeEmail;
