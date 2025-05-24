import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface SignupNotificationEmailProps {
  firstName: string;
  lastName: string;
  businessName: string;
  serviceType: string;
  paymentType: string;
}

export const SignupNotificationEmail = ({
  firstName,
  lastName,
  businessName,
  serviceType,
  paymentType,
}: SignupNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Dealer Signup: {businessName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Dealer Signup</Heading>
          
          <Section style={section}>
            <Text style={text}>
              A new dealer has signed up for our services:
            </Text>
            
            <Text style={text}>
              <strong>Business Name:</strong> {businessName}
            </Text>
            
            <Text style={text}>
              <strong>Contact Person:</strong> {firstName} {lastName}
            </Text>
            
            <Text style={text}>
              <strong>Service Type:</strong> {serviceType}
            </Text>
            
            <Text style={text}>
              <strong>Payment Type:</strong> {paymentType}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              Please review this signup and take appropriate action.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const section = {
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '4px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '16px 0',
};

const text = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '16px 0',
};

export default SignupNotificationEmail; 