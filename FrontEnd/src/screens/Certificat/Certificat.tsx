import { CertificatProps, useCertificat } from "./useCertificat";
import React from "react";
import "./Certificat.css";
import CertificatEnCarton from "../../components/CertificatEnCarton/CertificatEnCarton";

const Certificat: React.FC<CertificatProps> = (props) => {
  const { user } = useCertificat(props);

  return (
    <>
      <div className="Titlecerti">
        Your certificate is accessible through the link provided in your email.
        We have sent you an email containing the necessary details. Please check
        your inbox and follow the instructions to access your certificate{" "}
      </div>
      <CertificatEnCarton certificatInfo={user} />
    </>
  );
};

export default Certificat;
