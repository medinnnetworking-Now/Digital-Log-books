# Digital Log Books — CBME e-Logbook (MBBS)

A digital replacement for the paper NMC CBME logbooks of all 19 departments: students sign in with institutional email, log competencies, and faculty certify with an OTP-confirmed e-signature. HOD term sign-off and Principal eligibility use Aadhaar eSign / DSC.

## Prototype

Open `prototype/index.html` in any browser (no server or install needed).

**Demo logins** — password `demo123` for all; signature one-time code `246810`.

| Role | Email |
| --- | --- |
| Student, Phase I | ananya.r@college.edu.in |
| Student, Phase III Part 2 | rahul.v@college.edu.in |
| Faculty, Anatomy | s.menon@college.edu.in |
| Faculty, General Medicine | j.varghese@college.edu.in |
| HOD, Anatomy | hod.anatomy@college.edu.in |
| MEU coordinator | meu@college.edu.in |
| Principal | principal@college.edu.in |
| IT admin | it.admin@college.edu.in |

**Demo flow**

1. Sign in as **Ananya** → My logbooks → Anatomy → *Log* a competency → send to Dr. S. Menon.
2. Sign out, sign in as **Dr. S. Menon** → Certification queue → select → Completed → Sign → code `246810`.
3. Sign in as **HOD Anatomy** → Term sign-off → eSign.
4. Sign in as **Principal** → Term eligibility → Approve.
5. Sign in as **Ananya** → Signed logbook: every row shows signer, time and fingerprint, plus HOD and Principal sign-off.

Data is kept in the browser (localStorage) so the flow survives sign-out; *Reset demo data* on the sign-in page starts over.

## Competency list

`prototype/competencies.js` holds the competency master: 19 departments plus AETCOM and Foundation Course, with code, competency, domain (K/S/A/C), level (K/KH/SH/P), core flag and certifiable count. **This is a demo subset with abbreviated wording** — each department must verify its list against the current NMC competency document before go-live, and MEU imports the full verified master.

## Screens

`docs/screens/` — screenshots of each role's screens, used in the proposal document.
