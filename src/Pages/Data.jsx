// import React, { useState } from "react";
// import Review from "./Review";
// import Download from "./Download";
// import FillForm from "./FillForm";


// function Data() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Bio: "",
//     About: "",
//     education: {
//       secondarySchool: {
//         schoolName: "",
//         passingYear: "",
//         board: "",
//         percentage: "",
//       },
//       highschool: {
//         collegeName: "",
//         passingYear: "",
//         board: "",
//         percentage: "",
//       },
//       graduation: {
//         collegeName: "",
//         passingYear: "",
//         universityName: "",
//         percentage: "",
//       },
//       postGraduation: {
//         collegeName: "",
//         passingYear: "",
//         universityName: "",
//         percentage: "",
//       },
//     },
//     skill: {
//       techSkill: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React",
//         "NextJs",
//         "NodeJs",
//         "ExpressJs",
//         "MongoDb",
//         "MySQL",
//         "C",
//         "C++",
//         "Java",
//         "Python",
//         "DSA",
//         "SpringBoot",
//         "Flutter",
//         "FireBase",
//         "Kotlin",
//         "git",
//         "github",
//         "Docker",
//         "Kubernetes",
//       ],
//       selectedTechSkills: [],
//       softSkills: [
//         "Good Communication",
//         "Team Management",
//         "Time Management",
//         "Fast Learner",
//         "Adaptability",
//       ],
//       selectedSoftSkills: [],
//     },
//     projects: [
//       {
//         title: "",
//         description: "",
//         language: "",
//         links: "",
//         image: "",
//       },
//     ],
//     contact: {
//       name: "",
//       email: "",
//       phone: "",
//       location: "",
//       message: "",
//     },
//   });

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);
//   const reset = () => {
//     // Reset all data
//     setStep(1);
//     setFormData({
//       Name: "",
//       Bio: "",
//       About: "",
//       education: {
//         secondarySchool: {
//           schoolName: "",
//           passingYear: "",
//           board: "",
//           percentage: "",
//         },
//         highschool: {
//           collegeName: "",
//           passingYear: "",
//           board: "",
//           percentage: "",
//         },
//         graduation: {
//           collegeName: "",
//           passingYear: "",
//           universityName: "",
//           percentage: "",
//         },
//         postGraduation: {
//           collegeName: "",
//           passingYear: "",
//           universityName: "",
//           percentage: "",
//         },
//       },
//       skill: {
//         techSkill: [...formData.skill.techSkill],
//         selectedTechSkills: [],
//         softSkills: [...formData.skill.softSkills],
//         selectedSoftSkills: [],
//       },
//       projects: [
//         { title: "", description: "", language: "", links: "", image: "" },
//       ],
//       contact: {
//         name: "",
//         email: "",
//         phone: "",
//         location: "",
//         message: "",
//       },
//     });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       {step === 1 && (
//         <FillForm
//           formData={formData}
//           setFormData={setFormData}
//           nextStep={nextStep}
//         />
//       )}
//       {step === 2 && (
//         <Review formData={formData} prevStep={prevStep} nextStep={nextStep} />
//       )}
//       {step === 3 && <Download formData={formData} reset={reset} />}
//     </div>
//   );
// }

// export default Data;

import React, { useState } from "react";
import Review from "./Review";
import Download from "./Download";
import FillForm from "./FillForm";

function Data() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Bio: "",
    About: "",
    education: {
      secondarySchool: {
        schoolName: "",
        passingYear: "",
        board: "",
        percentage: "",
      },
      highschool: {
        collegeName: "",
        passingYear: "",
        board: "",
        percentage: "",
      },
      graduation: {
        collegeName: "",
        passingYear: "",
        universityName: "",
        percentage: "",
      },
      postGraduation: {
        collegeName: "",
        passingYear: "",
        universityName: "",
        percentage: "",
      },
    },
    skill: {
      techSkill: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NextJs",
        "NodeJs",
        "ExpressJs",
        "MongoDb",
        "MySQL",
        "C",
        "C++",
        "Java",
        "Python",
        "DSA",
        "SpringBoot",
        "Flutter",
        "FireBase",
        "Kotlin",
        "git",
        "github",
        "Docker",
        "Kubernetes",
      ],
      selectedTechSkills: [],
      softSkills: [
        "Good Communication",
        "Team Management",
        "Time Management",
        "Fast Learner",
        "Adaptability",
      ],
      selectedSoftSkills: [],
    },
    projects: [
      {
        title: "",
        description: "",
        language: "",
        links: "",
        image: "",
      },
    ],
    contact: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const reset = () => {
    setStep(1);
    setSelectedTemplate(null);
    setFormData({
      Name: "",
      Bio: "",
      About: "",
      education: {
        secondarySchool: {
          schoolName: "",
          passingYear: "",
          board: "",
          percentage: "",
        },
        highschool: {
          collegeName: "",
          passingYear: "",
          board: "",
          percentage: "",
        },
        graduation: {
          collegeName: "",
          passingYear: "",
          universityName: "",
          percentage: "",
        },
        postGraduation: {
          collegeName: "",
          passingYear: "",
          universityName: "",
          percentage: "",
        },
      },
      skill: {
        techSkill: [...formData.skill.techSkill],
        selectedTechSkills: [],
        softSkills: [...formData.skill.softSkills],
        selectedSoftSkills: [],
      },
      projects: [
        { title: "", description: "", language: "", links: "", image: "" },
      ],
      contact: {
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      {step === 1 && (
        <FillForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Review
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}
      {step === 3 && (
        <Download
          formData={formData}
          reset={reset}
          selectedTemplate={selectedTemplate}
        />
      )}
    </div>
  );
}

export default Data;