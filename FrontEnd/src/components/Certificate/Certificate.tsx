import { CertificateProps, useCertificate } from "./useCertificate";
import React from "react";
import "./Certificate.css";
import CertificateForm from "../CertificateForm/CertificateForm";

const Certificate: React.FC<CertificateProps> = (props) => {
  const { totalElectricCharge } = useCertificate(props);

  return (
    <>
      <div className="totalElectricCharge">
        <center>
          <div className="firstText">
            <h1>
              <div className="question-div">
                votre total Electric Charge est :{" "}
                <span className="redSpan">{totalElectricCharge}</span>
              </div>
            </h1>
          </div>
        </center>

        <div className="Form">
          <div className="FormLabel">
            <p>
              If you wish to download your score as a certificate, please
              proceed by submitting the following form. Fill in the required
              information in the form to generate and <b>download </b> your
              certificate !
            </p>
          </div>

          <div className="CertificateFormDiv">
            <CertificateForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
