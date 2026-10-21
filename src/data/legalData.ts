export interface LegalDocument {
  title: string;
  slug: string;
  lastUpdated: string;
  disclaimer: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const privacyPolicyContent: LegalDocument = {
  title: "Privacy Policy",
  slug: "privacy-policy",
  lastUpdated: "October 20, 2026",
  disclaimer:
    "NOTICE: This document is an operational draft prepared for Elvtera Business Solutions and is subject to formal legal review in your operating jurisdiction.",
  sections: [
    {
      heading: "1. Information We Collect",
      content: [
        "Elvtera Business Solutions ('Elvtera', 'we', 'our') collects business information necessary to evaluate outbound fit and provide commercial acquisition services.",
        "We collect contact information you submit directly via forms or scheduler bookings, including full name, business email address, company website, phone number, and self-reported deal size parameters.",
        "When you visit our website, we collect anonymous standard analytics data such as browser type, referring URL, and pages viewed to optimize system responsiveness.",
      ],
    },
    {
      heading: "2. How We Use Collected Data",
      content: [
        "To review pilot and client partnership qualification criteria.",
        "To schedule, confirm, and prepare discovery and strategy conversations.",
        "To configure secondary outbound communication domains and client sales pipeline workflows.",
        "To transmit occasional operational briefings on outbound acquisition tactics, with unambiguous opt-out mechanisms provided in every email.",
      ],
    },
    {
      heading: "3. Data Sharing & Third Parties",
      content: [
        "We do not sell, rent, or trade your personal or business data to third parties.",
        "Data is shared strictly with secure technical infrastructure providers necessary to operate our services, including cloud hosting providers, appointment scheduling systems, and verified sales pipeline platforms.",
        "We may disclose information if required by applicable law, regulation, or legal proceedings.",
      ],
    },
    {
      heading: "4. Data Security & Retention",
      content: [
        "We enforce industry-standard administrative, technical, and physical safeguards to protect information against unauthorized access, loss, or alteration.",
        "We retain business records only as long as necessary to fulfill contractual agreements, resolve disputes, and comply with legal requirements.",
      ],
    },
    {
      heading: "5. Contact & Inquiries",
      content: [
        "For any privacy inquiries or to request deletion of your information, write to hello@elvtera.com.",
      ],
    },
  ],
};

export const termsOfServiceContent: LegalDocument = {
  title: "Terms of Service",
  slug: "terms",
  lastUpdated: "October 20, 2026",
  disclaimer:
    "NOTICE: This document is an operational draft prepared for Elvtera Business Solutions and is subject to formal legal review in your operating jurisdiction.",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      content: [
        "By accessing this website or engaging Elvtera Business Solutions for advisory, pilot, or acquisition services, you agree to comply with and be bound by these Terms of Service.",
        "If you do not agree to these terms, you must not access this website or submit confidential business information.",
      ],
    },
    {
      heading: "2. Scope of Services",
      content: [
        "Elvtera Business Solutions provides done-for-you client acquisition, business systems implementation, and launch services for B2B enterprises.",
        "All targets, including our target of 20+ qualified calls a month within 90 days, represent operational objectives based on past execution and depend on client offer validation, pricing, and addressable market size. Targets do not constitute a legal or commercial guarantee of revenue.",
      ],
    },
    {
      heading: "3. Client Responsibilities",
      content: [
        "Clients agree to provide accurate business information, prompt review of messaging sequences, and timely attendance on booked discovery calls.",
        "Clients retain complete responsibility for closing sales conversations, delivering contracted services, and billing their end customers.",
      ],
    },
    {
      heading: "4. Intellectual Property",
      content: [
        "All website content, visual design elements, trademarks, and logos are the property of Elvtera Business Solutions.",
        "Client materials, customer lists, and proprietary offerings remain the exclusive intellectual property of the respective client.",
      ],
    },
    {
      heading: "5. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, Elvtera Business Solutions shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.",
      ],
    },
    {
      heading: "6. Governing Law & Contact",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Elvtera Business Solutions is registered.",
        "Questions regarding these terms may be directed to hello@elvtera.com.",
      ],
    },
  ],
};

export const cookiePolicyContent: LegalDocument = {
  title: "Cookie Policy",
  slug: "cookie-policy",
  lastUpdated: "October 20, 2026",
  disclaimer:
    "NOTICE: This document is an operational draft prepared for Elvtera Business Solutions and is subject to formal legal review in your operating jurisdiction.",
  sections: [
    {
      heading: "1. What Are Cookies",
      content: [
        "Cookies are small text files placed on your device to remember user preferences, facilitate navigation, and improve browsing performance.",
      ],
    },
    {
      heading: "2. How We Use Cookies",
      content: [
        "Essential Cookies: Required for core site security, form submission handling, and cookie consent preference storage.",
        "Analytics Cookies: Used to analyze anonymous user interaction and page load performance. We do not use third-party behavioral advertising cookies.",
      ],
    },
    {
      heading: "3. Managing Cookie Preferences",
      content: [
        "You can accept or decline optional cookies using our cookie banner.",
        "You can also configure your web browser to block or alert you about cookies. If you disable cookies, certain interactive components may operate with reduced functionality.",
      ],
    },
    {
      heading: "4. Contact Us",
      content: [
        "For questions regarding our use of cookies, contact hello@elvtera.com.",
      ],
    },
  ],
};
