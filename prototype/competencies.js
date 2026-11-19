/*
 * CBME competency master — DEMO SUBSET.
 * Codes follow the NMC CBME UG curriculum numbering (subject code + topic.item).
 * Wording is abbreviated and MUST be verified by each department against the current
 * NMC competency document before go-live. MEU replaces this file with the full,
 * verified master (one row per competency) via the spreadsheet import.
 *
 * Row: [code, competency, domain (K/S/A/C), level (K/KH/SH/P), core (Y/N), certifiable count (0 = not certifiable)]
 */
window.DEPARTMENTS = [
  { id: "AN", name: "Anatomy", phase: "I", items: [
    ["AN1.1", "Demonstrate anatomical position, planes, relations, laterality and movements", "K/S", "SH", "Y", 0],
    ["AN2.1", "Describe parts, blood and nerve supply of a long bone", "K", "KH", "Y", 0],
    ["AN6.1", "List the lymph node groups of the axilla and their areas of drainage", "K", "KH", "Y", 0],
    ["AN10.1", "Identify and describe boundaries and contents of the axilla", "K/S", "SH", "Y", 0],
    ["AN13.4", "Surface marking of important upper-limb structures", "S", "SH", "Y", 1],
    ["AN17.1", "Describe and demonstrate the hip joint and its movements", "K/S", "SH", "Y", 0],
    ["AN43.1", "Describe and demonstrate movements of the temporomandibular joint", "K/S", "SH", "Y", 0],
    ["AN65.1", "Identify epithelium under the microscope and describe its types", "K/S", "SH", "Y", 0]
  ]},
  { id: "PY", name: "Physiology", phase: "I", items: [
    ["PY1.1", "Describe the structure and functions of a mammalian cell", "K", "KH", "Y", 0],
    ["PY1.2", "Describe and discuss homeostasis and control systems", "K", "KH", "Y", 0],
    ["PY2.11", "Estimate haemoglobin, blood indices and do a total RBC count", "S", "P", "Y", 2],
    ["PY2.12", "Perform WBC total and differential count", "S", "P", "Y", 2],
    ["PY2.13", "Determine blood group, bleeding time and clotting time", "S", "P", "Y", 2],
    ["PY3.18", "Observe and interpret ergography for muscle fatigue", "S", "SH", "Y", 0],
    ["PY5.12", "Record blood pressure and pulse at rest and after exercise", "S", "P", "Y", 2],
    ["PY10.20", "Demonstrate clinical examination of the nervous system", "S", "SH", "Y", 1]
  ]},
  { id: "BI", name: "Biochemistry", phase: "I", items: [
    ["BI1.1", "Describe the molecular and functional organisation of a cell", "K", "KH", "Y", 0],
    ["BI2.1", "Explain fundamental concepts of enzymes and isoenzymes", "K", "KH", "Y", 0],
    ["BI3.1", "Discuss and differentiate carbohydrates by structure and function", "K", "KH", "Y", 0],
    ["BI10.3", "Describe the role of tumour markers in cancer diagnosis", "K", "KH", "Y", 0],
    ["BI11.1", "Describe laboratory safety and biomedical waste disposal", "K/S", "SH", "Y", 0],
    ["BI11.3", "Estimate blood glucose and interpret the result", "S", "P", "Y", 2],
    ["BI11.17", "Explain the basis of urine analysis for normal and abnormal constituents", "S", "SH", "Y", 1]
  ]},
  { id: "PA", name: "Pathology", phase: "II", items: [
    ["PA1.1", "Describe the role of a pathologist in diagnosis and management", "K", "KH", "Y", 0],
    ["PA2.1", "Describe and discuss cell injury and its causes", "K", "KH", "Y", 0],
    ["PA4.1", "Define and describe acute inflammation", "K", "KH", "Y", 0],
    ["PA13.4", "Perform and interpret a peripheral blood smear", "S", "P", "Y", 2],
    ["PA22.1", "Classify blood groups and perform grouping and cross-matching", "S", "SH", "Y", 1],
    ["PA23.1", "Describe and interpret urine physical and chemical examination", "S", "SH", "Y", 1],
    ["PA36.1", "Describe retinoblastoma and its histological features", "K", "KH", "N", 0]
  ]},
  { id: "MI", name: "Microbiology", phase: "II", items: [
    ["MI1.1", "Describe common etiologic agents of infection and their transmission", "K", "KH", "Y", 0],
    ["MI1.2", "Perform and identify bacteria by Gram stain", "S", "P", "Y", 3],
    ["MI1.6", "Describe mechanisms of antimicrobial resistance", "K", "KH", "Y", 0],
    ["MI1.7", "Describe immunity and the immune response", "K", "KH", "Y", 0],
    ["MI8.7", "Demonstrate infection control practices and use of PPE", "S", "P", "Y", 2],
    ["MI8.9", "Demonstrate correct collection and transport of specimens", "S", "SH", "Y", 1],
    ["MI8.14", "Demonstrate confidentiality in disclosing infectious disease results", "A/C", "SH", "Y", 0]
  ]},
  { id: "PH", name: "Pharmacology", phase: "II", items: [
    ["PH1.1", "Define and describe the principles of pharmacology and pharmacotherapeutics", "K", "KH", "Y", 0],
    ["PH1.3", "Enumerate and identify drug formulations and drug delivery systems", "K/S", "SH", "Y", 0],
    ["PH1.6", "Describe principles of pharmacovigilance and ADR reporting", "K", "KH", "Y", 0],
    ["PH2.1", "Demonstrate understanding of oral and parenteral dosage forms", "S", "SH", "Y", 1],
    ["PH3.1", "Write a rational, correct and legible generic prescription", "S", "P", "Y", 3],
    ["PH3.2", "Perform a critical appraisal of a prescription", "S", "SH", "Y", 1],
    ["PH5.1", "Communicate with patients regarding optimal use of drugs", "C", "SH", "Y", 1]
  ]},
  { id: "FM", name: "Forensic Medicine & Toxicology", phase: "II", items: [
    ["FM1.1", "Demonstrate knowledge of basics of forensic medicine", "K", "KH", "Y", 0],
    ["FM1.2", "Describe the history of forensic medicine", "K", "K", "N", 0],
    ["FM2.1", "Define, describe and discuss death and its types", "K", "KH", "Y", 0],
    ["FM3.3", "Describe mechanical injuries and wounds", "K", "KH", "Y", 0],
    ["FM4.4", "Describe the Indian Medical Register and obligations of a doctor", "K", "KH", "Y", 0],
    ["FM14.1", "Examine and prepare a medico-legal report of an injured person", "S", "SH", "Y", 1],
    ["FM14.2", "Demonstrate correct preparation of a death certificate", "S", "SH", "Y", 1]
  ]},
  { id: "CM", name: "Community Medicine", phase: "III-1", items: [
    ["CM1.1", "Define and describe the concept of public health", "K", "KH", "Y", 0],
    ["CM1.9", "Demonstrate the role of effective communication in health", "C", "SH", "Y", 0],
    ["CM2.1", "Describe steps and perform a clinico-socio-cultural and demographic assessment of a family", "S", "SH", "Y", 1],
    ["CM5.2", "Describe and demonstrate the correct method of nutritional assessment", "S", "SH", "Y", 1],
    ["CM7.4", "Define, calculate and interpret morbidity and mortality indicators", "K/S", "SH", "Y", 0],
    ["CM10.5", "Describe the Universal Immunization Programme and cold chain", "K", "KH", "Y", 0],
    ["CM17.5", "Describe health care delivery in India", "K", "KH", "Y", 0]
  ]},
  { id: "OP", name: "Ophthalmology", phase: "III-1", items: [
    ["OP1.1", "Describe the physiology of vision", "K", "KH", "Y", 0],
    ["OP1.3", "Demonstrate steps in visual acuity assessment for distance and near", "S", "P", "Y", 3],
    ["OP2.1", "Enumerate causes of lid and adnexal disorders", "K", "KH", "Y", 0],
    ["OP3.1", "Elicit and document history in a patient with red eye", "S", "SH", "Y", 1],
    ["OP4.10", "Counsel patients and family about eye donation", "C", "SH", "Y", 1],
    ["OP8.3", "Demonstrate correct technique of fundus examination", "S", "SH", "Y", 1]
  ]},
  { id: "EN", name: "Otorhinolaryngology (ENT)", phase: "III-1", items: [
    ["EN1.1", "Describe anatomy and physiology of ear, nose, throat, head and neck", "K", "KH", "Y", 0],
    ["EN2.1", "Elicit, document and present an ENT history", "S", "SH", "Y", 1],
    ["EN2.3", "Demonstrate correct use of a headlamp in ENT examination", "S", "SH", "Y", 1],
    ["EN2.8", "Demonstrate and interpret tuning fork tests", "S", "P", "Y", 2],
    ["EN4.1", "Elicit history and examine a case of otalgia", "S", "SH", "Y", 0],
    ["EN4.49", "Describe foreign body removal in the air and food passages", "K", "KH", "Y", 0]
  ]},
  { id: "IM", name: "General Medicine", phase: "III-2", items: [
    ["IM1.10", "Elicit history in heart failure covering presentation, causes and risk factors", "S", "SH", "Y", 1],
    ["IM1.11", "Perform and demonstrate a cardiovascular examination", "S", "SH", "Y", 1],
    ["IM2.6", "Elicit history in suspected acute coronary syndrome", "S", "SH", "Y", 0],
    ["IM3.4", "Elicit history and perform respiratory examination in pneumonia", "S", "SH", "Y", 1],
    ["IM8.9", "Elicit history and measure blood pressure correctly in hypertension", "S", "P", "Y", 2],
    ["IM11.7", "Elicit history in diabetes; perform glucometer testing", "S", "P", "Y", 2],
    ["IM24.3", "Perform venepuncture and collect blood samples", "S", "P", "Y", 3],
    ["IM26.1", "Enumerate and describe professional qualities of a physician", "A", "KH", "Y", 0]
  ]},
  { id: "SU", name: "General Surgery", phase: "III-2", items: [
    ["SU1.1", "Describe basic concepts of homeostasis and response to injury", "K", "KH", "Y", 0],
    ["SU5.1", "Describe normal wound healing and factors affecting it", "K", "KH", "Y", 0],
    ["SU5.3", "Differentiate types of wounds; plan and observe management", "K/S", "SH", "Y", 0],
    ["SU10.2", "Describe steps and obtain informed consent in a simulated setting", "S/C", "SH", "Y", 1],
    ["SU14.3", "Describe and demonstrate basic surgical skills: suturing and knotting", "S", "P", "Y", 3],
    ["SU17.1", "Describe principles of first aid", "K/S", "SH", "Y", 0],
    ["SU28.18", "Demonstrate clinical examination of the abdomen", "S", "SH", "Y", 1]
  ]},
  { id: "OG", name: "Obstetrics & Gynaecology", phase: "III-2", items: [
    ["OG1.1", "Define and discuss birth rate, maternal and perinatal mortality", "K", "KH", "Y", 0],
    ["OG8.1", "Enumerate and describe objectives of antenatal care", "K", "KH", "Y", 0],
    ["OG8.3", "Perform obstetric examination including fundal height and Leopold's", "S", "P", "Y", 3],
    ["OG13.1", "Enumerate and discuss the physiology of normal labour", "K", "KH", "Y", 0],
    ["OG14.1", "Observe and assist conduct of a normal vaginal delivery", "S", "SH", "Y", 5],
    ["OG19.1", "Describe and discuss contraception methods", "K", "KH", "Y", 0],
    ["OG35.17", "Demonstrate correct use of PAP smear collection", "S", "SH", "Y", 1]
  ]},
  { id: "PE", name: "Paediatrics", phase: "III-2", items: [
    ["PE1.1", "Define terminologies of growth and development", "K", "KH", "Y", 0],
    ["PE1.4", "Perform anthropometry and plot on growth charts", "S", "P", "Y", 3],
    ["PE1.7", "Perform developmental assessment and interpret", "S", "SH", "Y", 2],
    ["PE7.5", "Observe correct technique of breastfeeding and counsel the mother", "S/C", "SH", "Y", 1],
    ["PE19.6", "Assess immunisation status and plan catch-up", "S", "P", "Y", 2],
    ["PE20.3", "Perform neonatal resuscitation in a manikin", "S", "P", "Y", 2],
    ["PE24.15", "Perform IV cannulation in a manikin", "S", "SH", "Y", 1]
  ]},
  { id: "OR", name: "Orthopaedics", phase: "III-2", items: [
    ["OR1.1", "Describe principles of pre-hospital care and casualty management of trauma", "K", "KH", "Y", 0],
    ["OR1.5", "Describe and discuss joint dislocations", "K", "KH", "Y", 0],
    ["OR2.1", "Describe and discuss mechanism of injury in clavicle fracture", "K", "KH", "Y", 0],
    ["OR13.1", "Participate in a team for application of splints and casts", "S", "SH", "Y", 2],
    ["OR13.2", "Participate as a team member in resuscitation of a polytrauma victim", "S", "SH", "Y", 1],
    ["OR14.1", "Demonstrate the ability to counsel patients on treatment options", "C", "SH", "Y", 0]
  ]},
  { id: "DR", name: "Dermatology, Venereology & Leprosy", phase: "III-1", items: [
    ["DR1.1", "Enumerate causative and risk factors of acne", "K", "KH", "Y", 0],
    ["DR5.2", "Identify and differentiate scabies from other lesions", "S", "SH", "Y", 1],
    ["DR8.6", "Enumerate indications for and perform a Tzanck smear", "S", "SH", "Y", 1],
    ["DR9.2", "Demonstrate clinical features of leprosy including nerve examination", "S", "SH", "Y", 1],
    ["DR10.2", "Identify Treponema on dark-ground microscopy", "S", "SH", "N", 0],
    ["DR18.1", "Enumerate cutaneous findings in diabetes", "K", "KH", "Y", 0]
  ]},
  { id: "PS", name: "Psychiatry", phase: "III-1", items: [
    ["PS1.1", "Establish rapport and empathy with patients", "A/C", "SH", "Y", 1],
    ["PS1.2", "Describe components of communication", "K", "KH", "Y", 0],
    ["PS3.5", "Perform, demonstrate and document a minimental examination", "S", "SH", "Y", 1],
    ["PS4.2", "Elicit and record history and mental status in alcohol and substance use", "S", "SH", "Y", 0],
    ["PS6.2", "Elicit, describe and document clinical features of depression", "S", "SH", "Y", 1],
    ["PS19.4", "Describe the salient features of mental health laws in India", "K", "KH", "Y", 0]
  ]},
  { id: "CT", name: "Respiratory Medicine", phase: "III-1", items: [
    ["CT1.1", "Describe epidemiology of tuberculosis and its impact", "K", "KH", "Y", 0],
    ["CT1.5", "Elicit, document and present history in suspected tuberculosis", "S", "SH", "Y", 1],
    ["CT1.12", "Enumerate indications for and interpret sputum AFB", "K/S", "SH", "Y", 0],
    ["CT2.10", "Generate a differential diagnosis in obstructive airway disease", "K", "KH", "Y", 0],
    ["CT2.11", "Describe, perform and interpret peak expiratory flow and spirometry", "S", "SH", "Y", 1],
    ["CT2.18", "Demonstrate correct use of inhalers and counsel the patient", "S/C", "P", "Y", 2]
  ]},
  { id: "AS", name: "Anaesthesiology", phase: "III-2", items: [
    ["AS1.1", "Describe the evolution of anaesthesiology as a speciality", "K", "KH", "N", 0],
    ["AS2.1", "Enumerate indications and describe basic life support", "K/S", "SH", "Y", 0],
    ["AS2.2", "Demonstrate BLS on a manikin", "S", "P", "Y", 2],
    ["AS3.2", "Elicit, present and document a pre-operative history", "S", "SH", "Y", 1],
    ["AS4.1", "Describe and discuss general anaesthesia", "K", "KH", "Y", 0],
    ["AS9.1", "Establish peripheral IV access in a simulated environment", "S", "SH", "Y", 1]
  ]}
];

/* Cross-department modules kept in the same logbook */
window.MODULES = [
  { id: "AETCOM", name: "AETCOM", phase: "All", items: [
    ["1.1", "What does it mean to be a doctor?", "A/C", "KH", "Y", 0],
    ["1.2", "What does it mean to be a patient?", "A/C", "KH", "Y", 0],
    ["1.3", "The doctor-patient relationship", "A/C", "SH", "Y", 0],
    ["1.4", "The foundations of communication - 1", "C", "SH", "Y", 0],
    ["1.5", "The cadaver as our first teacher", "A", "KH", "Y", 0]
  ]},
  { id: "FC", name: "Foundation Course", phase: "I", items: [
    ["FC1", "Orientation to the MBBS programme and institution", "K", "K", "Y", 0],
    ["FC2", "Basic life support (first aid)", "S", "SH", "Y", 1],
    ["FC3", "Biomedical waste management and universal precautions", "S", "SH", "Y", 1],
    ["FC4", "Language and computer skills", "S", "SH", "Y", 0],
    ["FC5", "Professional development including ethics", "A", "KH", "Y", 0]
  ]}
];
