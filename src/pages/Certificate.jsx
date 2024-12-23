import certificate1 from "../assets/certificate/MenitikarirSebagaiSFE(dicoding).pdf";
import certificate2 from "../assets/certificate/pengenalan_logic(dicoding).pdf";
import certificate3 from "../assets/certificate/pemrogramanWeb(dicoding).pdf";
import certificate4 from "../assets/certificate/DasarJS(dicoding).pdf";
import certificate5 from "../assets/certificate/reactjs(skilvul).pdf";
import certificate6 from "../assets/certificate/reactjs(edspert).pdf";
import certificate7 from "../assets/certificate/visualisasiData(dicoding).pdf";
import certificate8 from "../assets/certificate/FE(dibimbing).pdf";
import certificate9 from "../assets/certificate/python(codepolitan).pdf";

import poto1 from "../assets/certificate/img/1.jpg";
import poto2 from "../assets/certificate/img/2.jpg";
import poto3 from "../assets/certificate/img/3.jpg";
import poto4 from "../assets/certificate/img/4.jpg";
import poto5 from "../assets/certificate/img/5.jpg";
import poto6 from "../assets/certificate/img/6.jpg";
import poto7 from "../assets/certificate/img/7.jpg";
import poto8 from "../assets/certificate/img/8.jpg";
import poto9 from "../assets/certificate/img/9.jpg";

const Certificate = () => {
  // Data sertifikat
  const certificates = [
    {
      title: "Web Development Certificate",
      issuer: "Dicoding",
      image: poto1,
      file: certificate1, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Dicoding",
      image: poto2,
      file: certificate2, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Dicoding",
      image: poto3,
      file: certificate3, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Dicoding",
      image: poto4,
      file: certificate4, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Skilvul",
      image: poto5,
      file: certificate5, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Edspert",
      image: poto6,
      file: certificate6, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Dicoding",
      image: poto7,
      file: certificate7, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Dibimbing",
      image: poto8,
      file: certificate8, 
    },
    {
      title: "Web Development Certificate",
      issuer: "Codepolitan",
      image: poto9,
      file: certificate9, 
    },
    
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="certificate">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
        <p className="text-center mb-12">
          Below are some of the certifications Ive earned during my learning journey. Click to view the certificate.
        </p>
        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <img src={cert.image} alt="" />
                <p className="text-sm text-gray-600 mb-4">{cert.issuer}</p>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
