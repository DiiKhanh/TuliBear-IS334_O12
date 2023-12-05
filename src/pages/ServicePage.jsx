import { Helmet } from "react-helmet-async";
import ServiceView from "~/sections/service/ServiceView";

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title> Service | TuliBear </title>
      </Helmet>
      <ServiceView />
    </>
  );
};

export default ServicePage;