import { Helmet } from "react-helmet-async";
import ContactView from "~/sections/contact/ContactView";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title> Contact | TuliBear </title>
      </Helmet>
      <ContactView />
    </>
  );
};

export default ContactPage;