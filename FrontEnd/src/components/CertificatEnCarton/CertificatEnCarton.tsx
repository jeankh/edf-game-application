import {
  CertificatEnCartonProps,
  useCertificatEnCarton,
} from "./useCertificatEnCarton";
import React from "react";
import "./CertificatEnCarton.css";

import { FaCertificate } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";

const CertificatEnCarton: React.FC<CertificatEnCartonProps> = (props) => {
  const { certificatInfo, downloadCertificatePdf, downloadCertificateImage } =
    useCertificatEnCarton(props);

  if (certificatInfo) {
    console.log(certificatInfo);
  }
  return (
    <>
      <div>
        <div
          className="PrinsipalcontainerCertificationSection"
          id="certificateSection"
        >
          <div className="containerCertificationSection">
            <div className="ContinueCertificate">
              <div className="logoCertificationSection">
                <span className="Myspanlogologl"></span>
                EDF Electricite De France
              </div>
              <br />

              <div className="marqueeCertificationSection">
                Total Electric Charge Score
              </div>

              <div className="personCertificationSection">
                {certificatInfo.name} {certificatInfo.nickname}
              </div>

              <div className="reasonCertificationSection">
                <div className="reasonCertificationSection">
                  <span> {certificatInfo.nickname} </span> has a Total Electric
                  Charge Score <br />
                  of <span className="RedPlease">
                    {" "}
                    {certificatInfo.score}{" "}
                  </span>{" "}
                  after the test of of TECH. <br /> by EDF Electricite De France
                </div>
              </div>

              <div className="FelxCertificationSectionButtom">
                <div className="IdtextFaCertificate">CA : 127132ns73423</div>
                <div className="FaCertificate">
                  <FaCertificate />
                </div>
                <div className="FaSignaturecerti">
                  EDF -director <br /> <br />
                  <span className="FaSignaturecertiIcon">
                    <FaSignature />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="MybtnCertifictedounlowad">
          <button
            className="MybtnSectionMyCertificate"
            onClick={downloadCertificatePdf}
          >
            Download As PDF
          </button>
          <button
            className="MybtnSectionMyCertificate"
            onClick={downloadCertificateImage}
          >
            Download As image
          </button>
        </div>
      </div>
    </>
  );
};

export default CertificatEnCarton;
