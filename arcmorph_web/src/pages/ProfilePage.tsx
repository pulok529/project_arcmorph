import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import Swal from 'sweetalert2';

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'cv' | 'security' | 'passport'>('overview');

  // Pre-hydrated verified credentials for Naimul Islam
  const [profile, setProfile] = useState({
    name: 'Naimul Islam',
    title: 'Senior Software Engineer & AI/ML Researcher',
    email: 'naimul.islam.pulak@gmail.com',
    phone1: '(+880) 1521430995',
    phone2: '(+880) 1317494440',
    whatsapp: '+8801521430995',
    github: 'https://github.com/pulok529',
    scholar: 'https://scholar.google.com/citations?hl=en&user=Z5wu9jsAAAAJ',
    facebook: 'https://www.facebook.com/naimul.islam.pulak',
    addressPresent: '1597/4, Bank coloni, Dania, 1236, Dhaka, Bangladesh',
    addressPermanent: 'Uttar Jirtali, Begumganj, Bangla Bazar - 3822, Noakhali',
    passportNo: 'A02828950',
    personalNo: '1511446872',
    dob: '29/05/1998',
    nationality: 'Bangladeshi',
    fatherName: 'MD NAZRUL ISLAM',
    motherName: 'NASIMA BEGUM',
    emergencyContact: 'MD NAZRUL ISLAM (FATHER) • +8801760150555',
    about: 'Software Engineer with over 5+ years of professional experience in designing and developing scalable enterprise systems, combined with strong academic research in Artificial Intelligence, Machine Learning, and Natural Language Processing. Authored multiple research publications in NLP and deep learning.',
    skills: ['Python', 'C#', 'Java', 'ASP.NET Core', 'Docker', 'Kubernetes', 'AWS (EC2, RDS, S3, VPC)', 'Terraform', 'NLP', 'Deep Learning', 'MSSQL', 'PostgreSQL', 'Microservices Architecture'],
    experiences: [
      {
        company: 'Proshika',
        role: 'IT Consultant',
        period: '01/05/2025 - 31/10/2025',
        location: 'Dhaka, Bangladesh',
        highlights: 'Leading architecture design of large-scale software systems with focus on scalability, cloud infrastructure with AWS & Terraform, and microservices orchestration with Docker & Kubernetes.'
      },
      {
        company: 'LEADS Corporation Ltd',
        role: 'Senior Software Engineer',
        period: '16/08/2022 - 31/01/2025',
        location: 'Dhaka, Bangladesh',
        highlights: 'Developed core banking software systems (loans, KYC, treasury), high-volume Oracle PL/SQL optimization, ASP.NET Core microservices, and served as Scrum Master.'
      },
      {
        company: 'Creatrix Soft Tech Ltd',
        role: 'Senior Software Developer',
        period: '01/01/2019 - 31/07/2022',
        location: 'Dhaka, Bangladesh',
        highlights: 'Full software lifecycle engineering for ERP, HRM, and academic platforms using ASP.NET MVC/Core, C#, and SQL Server.'
      }
    ],
    education: [
      {
        institution: 'East West University',
        degree: 'Bachelors in Computer Science and Engineering',
        period: '2017 - 2022',
        url: 'https://www.ewubd.edu/'
      }
    ],
    publications: [
      {
        title: 'Multi-class sentiment classification on Bengali social media comments using machinelearning',
        publisher: 'Elsevier • International Journal of Cognitive Computing in Engineering (2023)',
        authors: 'R Haque, N Islam, M Tasneem, A K Das'
      },
      {
        title: 'A Comparative Analysis on Suicidal Ideation Detection Using NLP, Machine, and DeepLearning',
        publisher: 'MDPI • Technologies (2022)',
        authors: 'R Haque, N Islam, M Islam, M M Ahsan'
      },
      {
        title: 'Deep Learning for Multi-Labeled Cyberbully Detection: Enhancing Online Safety',
        publisher: 'ICDSNS (2023)',
        authors: 'N Islam, R Haque, P K Pareek, M B Islam, I H Sajeeb, M H Ratul'
      }
    ]
  });

  // Password reset state (no current password needed)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCvPreview, setShowCvPreview] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'New password and confirmation do not match.',
        background: '#0b0f19',
        color: '#f8fafc'
      });
      return;
    }
    localStorage.setItem('ARCHMORPH_USER_PASSWORD', newPassword);
    Swal.fire({
      icon: 'success',
      title: 'Password Updated',
      text: 'Your password has been changed successfully without restriction.',
      background: '#0b0f19',
      color: '#f8fafc',
      confirmButtonColor: '#00f2fe'
    });
    setNewPassword('');
    setConfirmPassword('');
  };

  const handlePrintCv = () => {
    window.print();
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Developer Profile & CV Hub" category="User Management" />

      <div className="module-content-body">
        {/* Profile Banner Card */}
        <div className="card mb-4 border-0 overflow-hidden shadow-sm">
          <div
            className="p-4 d-flex flex-column flex-md-row align-items-center gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)',
              borderBottom: '1px solid var(--am-border)'
            }}
          >
            <div className="position-relative">
              <img
                src="/assets/images/users/naimul_islam.jpg"
                alt="Naimul Islam"
                className="rounded-circle border border-3 border-cyan shadow"
                style={{ width: 100, height: 100, objectFit: 'cover' }}
              />
              <span className="position-absolute bottom-0 end-0 p-2 bg-success border border-dark rounded-circle" title="Online Verified"></span>
            </div>

            <div className="flex-grow-1 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-1 flex-wrap">
                <h4 className="mb-0 fw-bold">{profile.name}</h4>
                <span className="badge bg-cyan-subtle text-cyan border border-cyan-subtle font-monospace fs-11">
                  Verified Identity
                </span>
                <span className="badge bg-info-subtle text-info border border-info-subtle fs-11">
                  Bangladesh
                </span>
              </div>
              <p className="text-muted mb-2 fs-13">{profile.title}</p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 flex-wrap fs-12 text-muted">
                <span><i className="ti ti-mail me-1 text-cyan"></i>{profile.email}</span>
                <span><i className="ti ti-phone me-1 text-cyan"></i>{profile.phone1}</span>
                <span><i className="ti ti-brand-github me-1 text-cyan"></i>pulok529</span>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-sm btn-gradient-cyan d-flex align-items-center gap-1 shadow"
                onClick={() => setShowCvPreview(true)}
              >
                <i className="ti ti-file-text"></i> Generate & Print CV
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="card-body p-0 border-top border-dark">
            <ul className="nav nav-tabs nav-justified border-0" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'overview' ? 'active text-cyan border-cyan bg-black-subtle' : 'text-muted'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <i className="ti ti-user me-1"></i> Career Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'cv' ? 'active text-cyan border-cyan bg-black-subtle' : 'text-muted'}`}
                  onClick={() => setActiveTab('cv')}
                >
                  <i className="ti ti-briefcase me-1"></i> Experience & Research
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'passport' ? 'active text-cyan border-cyan bg-black-subtle' : 'text-muted'}`}
                  onClick={() => setActiveTab('passport')}
                >
                  <i className="ti ti-id me-1"></i> Passport & KYC Details
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'security' ? 'active text-cyan border-cyan bg-black-subtle' : 'text-muted'}`}
                  onClick={() => setActiveTab('security')}
                >
                  <i className="ti ti-shield-lock me-1"></i> Security & Password
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Executive Summary</h5>
                </div>
                <div className="card-body">
                  <p className="fs-13 text-light lh-lg mb-4">{profile.about}</p>
                  <h6 className="fw-bold mb-3 fs-13 text-uppercase text-muted">Core Competencies & Stack</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {profile.skills.map((skill, idx) => (
                      <span key={idx} className="badge bg-dark border border-secondary text-light p-2 fs-12">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Contact & Addresses</h5>
                </div>
                <div className="card-body fs-13 d-flex flex-column gap-3">
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Present Address</span>
                    <span className="text-light">{profile.addressPresent}</span>
                  </div>
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Permanent Address</span>
                    <span className="text-light">{profile.addressPermanent}</span>
                  </div>
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Verified Social Profiles</span>
                    <div className="d-flex gap-2 mt-2">
                      <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark border-secondary text-light">
                        <i className="ti ti-brand-github"></i> GitHub
                      </a>
                      <a href={profile.scholar} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark border-secondary text-light">
                        <i className="ti ti-school"></i> Scholar
                      </a>
                      <a href={profile.facebook} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark border-secondary text-light">
                        <i className="ti ti-brand-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CV & RESEARCH */}
        {activeTab === 'cv' && (
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Work Experience</h5>
                </div>
                <div className="card-body d-flex flex-column gap-3">
                  {profile.experiences.map((exp, idx) => (
                    <div key={idx} className="p-3 rounded border border-dark bg-black-subtle">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="fw-bold mb-0 text-cyan">{exp.role}</h6>
                        <span className="badge bg-dark border border-secondary text-muted fs-11">{exp.period}</span>
                      </div>
                      <span className="fw-semibold fs-12 text-light d-block mb-2">{exp.company} • {exp.location}</span>
                      <p className="fs-12 text-muted mb-0">{exp.highlights}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Education & Academic Background</h5>
                </div>
                <div className="card-body">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded border border-dark bg-black-subtle">
                      <h6 className="fw-bold mb-1 text-white">{edu.degree}</h6>
                      <span className="text-cyan fs-13 d-block">{edu.institution}</span>
                      <span className="text-muted fs-12">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Peer-Reviewed Research Publications</h5>
                </div>
                <div className="card-body d-flex flex-column gap-3">
                  {profile.publications.map((pub, idx) => (
                    <div key={idx} className="p-3 rounded border border-dark bg-black-subtle">
                      <h6 className="fw-bold mb-1 text-light fs-13">{pub.title}</h6>
                      <small className="text-info d-block mb-1">{pub.publisher}</small>
                      <small className="text-muted fs-11">Authors: {pub.authors}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PASSPORT & KYC */}
        {activeTab === 'passport' && (
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Passport & National Verification (Bangladesh)</h5>
              <span className="badge bg-success-subtle text-success border border-success">Valid & Active</span>
            </div>
            <div className="card-body">
              <div className="row g-3 fs-13">
                <div className="col-md-4">
                  <div className="p-3 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-11 d-block text-uppercase">Passport Number</span>
                    <span className="fw-bold fs-15 text-cyan font-monospace">{profile.passportNo}</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-11 d-block text-uppercase">Personal Number</span>
                    <span className="fw-bold fs-15 text-light font-monospace">{profile.personalNo}</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-11 d-block text-uppercase">Date of Birth</span>
                    <span className="fw-bold fs-15 text-light">{profile.dob}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-11 d-block text-uppercase">Father's Name</span>
                    <span className="fw-bold text-light">{profile.fatherName}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-11 d-block text-uppercase">Mother's Name</span>
                    <span className="fw-bold text-light">{profile.motherName}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-11 d-block text-uppercase">Emergency Contact</span>
                    <span className="fw-bold text-warning">{profile.emergencyContact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SECURITY & DIRECT PASSWORD RESET */}
        {activeTab === 'security' && (
          <div className="card" style={{ maxWidth: '600px' }}>
            <div className="card-header">
              <h5 className="card-title mb-0">Frictionless Password Update</h5>
              <small className="text-muted fs-12">No previous password required — updates directly.</small>
            </div>
            <div className="card-body">
              <form onSubmit={handlePasswordChange}>
                <div className="mb-3">
                  <label className="form-label fs-12 text-light fw-medium">New Password</label>
                  <input
                    type="password"
                    className="form-control bg-dark border-secondary text-light"
                    placeholder="Enter any new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fs-12 text-light fw-medium">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control bg-dark border-secondary text-light"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-gradient-cyan px-4 py-2 fw-bold">
                  Save Password Directly
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Printable Executive CV Modal Preview */}
      {showCvPreview && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(10px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border border-cyan bg-white text-dark shadow-2xl">
              <div className="modal-header border-bottom px-4 py-3 d-flex justify-content-between">
                <h5 className="modal-title fw-bold text-dark">Executive Curriculum Vitae (CV Preview)</h5>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-primary btn-sm fw-bold" onClick={handlePrintCv}>
                    <i className="ti ti-printer me-1"></i> Print to PDF
                  </button>
                  <button type="button" className="btn-close" onClick={() => setShowCvPreview(false)}></button>
                </div>
              </div>
              <div className="modal-body p-5 print-area" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <div className="d-flex justify-content-between align-items-center pb-4 border-bottom border-2 border-dark mb-4">
                  <div>
                    <h2 className="fw-bolder mb-1 text-dark">{profile.name}</h2>
                    <h5 className="text-primary mb-2">{profile.title}</h5>
                    <p className="text-secondary mb-0 fs-13">{profile.addressPresent}</p>
                    <p className="text-secondary mb-0 fs-13">{profile.email} • {profile.phone1} • {profile.github}</p>
                  </div>
                  <img
                    src="/assets/images/users/naimul_islam.jpg"
                    alt={profile.name}
                    className="rounded border border-secondary"
                    style={{ width: 110, height: 110, objectFit: 'cover' }}
                  />
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold border-bottom pb-1 text-dark text-uppercase">Professional Summary</h5>
                  <p className="fs-14 text-secondary lh-base">{profile.about}</p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold border-bottom pb-1 text-dark text-uppercase">Professional Experience</h5>
                  {profile.experiences.map((exp, idx) => (
                    <div key={idx} className="mb-3">
                      <div className="d-flex justify-content-between">
                        <strong className="fs-14 text-dark">{exp.role} — {exp.company}</strong>
                        <span className="text-muted fs-13">{exp.period}</span>
                      </div>
                      <p className="fs-13 text-secondary mb-0">{exp.highlights}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold border-bottom pb-1 text-dark text-uppercase">Education</h5>
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="d-flex justify-content-between">
                      <div>
                        <strong className="fs-14 text-dark">{edu.degree}</strong>
                        <span className="d-block text-secondary fs-13">{edu.institution}</span>
                      </div>
                      <span className="text-muted fs-13">{edu.period}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="fw-bold border-bottom pb-1 text-dark text-uppercase">Selected Research Publications</h5>
                  {profile.publications.map((pub, idx) => (
                    <div key={idx} className="mb-2">
                      <strong className="fs-13 text-dark">• {pub.title}</strong>
                      <small className="text-muted d-block">{pub.publisher} — {pub.authors}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
