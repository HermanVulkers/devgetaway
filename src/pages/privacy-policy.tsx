import React from 'react';
import * as Styled from './terms-and-conditions.style';
import { Header } from '@/components/common/header/header';
import { Footer } from '@/components/common/footer/footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Styled.Container>
        <h2>Privacy Policy</h2>

        <p>
          This Privacy Policy describes how we collect, use, and share your
          personal information when you use our platform (hereinafter referred
          to as "the platform"). By using the platform, you agree to the
          collection and use of your information in accordance with this policy.
        </p>

        <Styled.StyledH3>Information We Collect</Styled.StyledH3>

        <p>
          <strong>Personal Information:</strong> When you register and create an
          account on the platform, we may collect certain personal information
          such as your name, email address, and any other information you
          provide during the registration process.
        </p>
        <p>
          <strong>Usage Information:</strong> We may collect information about
          your use of the platform, including your interactions, preferences,
          and browsing behavior. This may include information such as your IP
          address, device information, browser type, and operating system.
        </p>

        <Styled.StyledH3>How We Use Your Information</Styled.StyledH3>
        <p>
          We use the personal information you provide to create and maintain
          your account, communicate with you, and provide the services offered
          by the platform. We may use the usage information to analyze trends,
          improve the platform's functionality and user experience, and
          personalize your interactions with the platform.
        </p>

        <Styled.StyledH3>Information Sharing</Styled.StyledH3>
        <p>
          <strong>Service Providers:</strong> We may engage third-party service
          providers to perform certain functions on our behalf, such as hosting
          the platform, processing payments, and analyzing user data. These
          service providers will have access to your personal information only
          to the extent necessary to perform their functions and are obligated
          to maintain the confidentiality and security of your information.
        </p>
        <p>
          <strong>Legal Compliance:</strong> We may disclose your personal
          information if required to do so by law or in response to valid legal
          requests, such as subpoenas, court orders, or government regulations.
        </p>

        <Styled.StyledH3>Data Security</Styled.StyledH3>
        <p>
          We take reasonable measures to protect the security of your personal
          information and implement appropriate safeguards to prevent
          unauthorized access, disclosure, alteration, or destruction of your
          information. However, please note that no method of transmission over
          the internet or electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>

        <Styled.StyledH3>Your Rights</Styled.StyledH3>
        <p>
          You have certain rights regarding your personal information, including
          the right to access, update, or delete your information. If you would
          like to exercise any of these rights, please contact us using the
          information provided below.
        </p>

        <Styled.StyledH3>Changes to this Privacy Policy</Styled.StyledH3>
        <p>
          We reserve the right to update or change this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          revised Privacy Policy on the platform. Your continued use of the
          platform after the changes constitutes your acceptance of the revised
          Privacy Policy.
        </p>

        <Styled.StyledH3>Contact Us</Styled.StyledH3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at [contact email address].
        </p>
      </Styled.Container>
      <Footer />
    </>
  );
}
