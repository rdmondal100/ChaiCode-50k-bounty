import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <motion.h2
      className="text-2xl font-semibold text-foreground mb-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="text-muted-foreground space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen xl:container xl:mx-auto 
     py-5">
      <div className=" mt-16 px-4 w-full justify-center items-center">
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        <Section title="Introduction">
          <p>
            These Privacy Policy govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. Most importantly, we do not sell your data to any third party. And our platform does not allow users to share accounts or resell courses.
          </p>
        </Section>

        <Section title="SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?">
          <p>
            When you purchase something from our store, we collect personal information like your name, address, and email. We also receive your computer's IP address to learn about your browser and OS. With your permission, we may send you emails about our store and updates.
          </p>
        </Section>

        <Section title="SECTION 2 - CONSENT">
          <p>
            When you provide personal information for a transaction, we imply your consent to use it for that purpose. If we request it for marketing, we will ask explicitly.
          </p>
          <p>
            You can withdraw consent at any time by contacting{" "}
            <a
              href="mailto:team@chaicode.com"
              className="text-primary underline hover:opacity-80 transition-opacity"
            >
              team@chaicode.com
            </a>{" "}
            or writing to: 507, AB Nirman Nagar, Ajmer Road, Jaipur, Rajasthan 302019, India.
          </p>
        </Section>

        <Section title="SECTION 3 - DISCLOSURE">
          <p>
            We may disclose your personal information if required by law or if you violate our Terms of Service.
          </p>
        </Section>

        <Section title="SECTION 4 - PAYMENT">
          <p>
            We use Razorpay for payments. Card data is encrypted through PCI-DSS and is not stored. Razorpay adheres to strict data security standards. For details, read Razorpay's terms at{" "}
            <a
              href="https://razorpay.com"
              className="text-primary underline hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              razorpay.com
            </a>.
          </p>
        </Section>

        <Section title="SECTION 5 - THIRD-PARTY SERVICES">
          <p>
            Third-party services only access your data as needed. Please read their policies for more info. If redirected to third-party sites, you’re no longer governed by this Privacy Policy.
          </p>
        </Section>

        <Section title="SECTION 6 - SECURITY">
          <p>
            We take reasonable precautions and follow best practices to prevent loss, misuse, or destruction of your personal data.
          </p>
        </Section>

        <Section title="SECTION 7 - COOKIES">
          <p>
            We use cookies to maintain your session. They do not personally identify you on other websites.
          </p>
        </Section>

        <Section title="SECTION 8 - AGE OF CONSENT">
          <p>
            By using our site, you confirm that you are of legal age or have given us consent for your minor dependents to use the site.
          </p>
        </Section>

        <Section title="SECTION 9 - CHANGES TO THIS PRIVACY POLICY">
          <p>
            We may update this policy anytime. Changes take effect immediately. If our store is acquired, your data may be transferred to new owners.
          </p>
        </Section>

        <Section title="QUESTIONS AND CONTACT INFORMATION">
          <p>
            To access, correct, or delete your information, or for any concerns, email us at{" "}
            <a
              href="mailto:team@chaicode.com"
              className="text-primary underline hover:opacity-80 transition-opacity"
            >
              team@chaicode.com
            </a>{" "}
            or write to: 507, AB Nirman Nagar, Ajmer Road, Jaipur, Rajasthan 302019, India.
          </p>
        </Section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
