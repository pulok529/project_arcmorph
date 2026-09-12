import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useNotifications } from '../context/NotificationContext';
import Swal from 'sweetalert2';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  url?: string;
}

interface PublicationItem {
  title: string;
  publisher: string;
  authors: string;
}

interface UserProfileData {
  name: string;
  title: string;
  email: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  github: string;
  scholar: string;
  facebook: string;
  addressPresent: string;
  addressPermanent: string;
  passportNo: string;
  personalNo: string;
  dob: string;
  nationality: string;
  fatherName: string;
  motherName: string;
  emergencyContact: string;
  about: string;
  skills: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  publications: PublicationItem[];
}

const DEFAULT_PROFILE: UserProfileData = {
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
  skills: [
    'Python', 'C#', 'Java', 'ASP.NET Core', 'Docker', 'Kubernetes',
    'AWS (EC2, RDS, S3, VPC)', 'Terraform', 'NLP', 'Deep Learning',
    'MSSQL', 'PostgreSQL', 'Microservices Architecture'
  ],
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
};

export const ProfilePage: React.FC = () => {
  const { addNotification } = useNotifications();
  const [activeTab, setActiveTab] = useState<'overview' | 'cv' | 'security' | 'passport'>('overview');

  // Load profile from localStorage or fallback
  const [profile, setProfile] = useState<UserProfileData>(() => {
    try {
      const saved = localStorage.getItem('ARCMORPH_USER_PROFILE');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved profile:', e);
    }
    return DEFAULT_PROFILE;
  });

  // Edit Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTab, setEditTab] = useState<'personal' | 'kyc' | 'skills' | 'experiences' | 'education'>('personal');
  const [editForm, setEditForm] = useState<UserProfileData>(profile);
  const [skillsInput, setSkillsInput] = useState(profile.skills.join(', '));

  // Password reset state
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCvPreview, setShowCvPreview] = useState(false);

  // Sync edit form when opening modal
  const handleOpenEditModal = () => {
    setEditForm(JSON.parse(JSON.stringify(profile)));
    setSkillsInput(profile.skills.join(', '));
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSkills = skillsInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const updatedProfile: UserProfileData = {
      ...editForm,
      skills: updatedSkills
    };

    setProfile(updatedProfile);
    localStorage.setItem('ARCMORPH_USER_PROFILE', JSON.stringify(updatedProfile));
    setIsEditModalOpen(false);

    // Trigger audible notification
    addNotification({
      title: 'Profile Information Updated',
      category: 'System',
      message: `Profile credentials for ${updatedProfile.name} successfully updated and synced.`,
      dateStr: new Date().toISOString().split('T')[0],
      critiqueDetails: `Saved ${updatedProfile.skills.length} skills, ${updatedProfile.experiences.length} experience entries, and ${updatedProfile.education.length} academic degrees.`
    });

    Swal.fire({
      icon: 'success',
      title: 'Profile Updated',
      text: 'Your credentials, experience, and identity details were saved successfully.',
      background: '#0b0f19',
      color: '#f8fafc',
      confirmButtonColor: '#00f2fe'
    });
  };

  const handleResetDefaults = () => {
    Swal.fire({
      title: 'Reset to Factory Defaults?',
      text: 'This will reset all profile fields, experiences, and identity data to original template defaults.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Reset',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#ef4444',
      background: '#0b0f19',
      color: '#f8fafc'
    }).then(res => {
      if (res.isConfirmed) {
        setProfile(DEFAULT_PROFILE);
        setEditForm(DEFAULT_PROFILE);
        setSkillsInput(DEFAULT_PROFILE.skills.join(', '));
        localStorage.removeItem('ARCMORPH_USER_PROFILE');
        addNotification({
          title: 'Profile Reset to Defaults',
          category: 'System',
          message: 'User profile was restored to default initial credentials.',
          dateStr: new Date().toISOString().split('T')[0]
        });
        Swal.fire({
          icon: 'info',
          title: 'Reset Completed',
          text: 'Profile restored to defaults.',
          background: '#0b0f19',
          color: '#f8fafc'
        });
      }
    });
  };

  // Add new experience entry
  const handleAddExperience = () => {
    setEditForm(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { company: 'New Organization', role: 'Staff Engineer', period: '2025 - Present', location: 'Remote', highlights: 'Core architecture design and modern stack development.' }
      ]
    }));
  };

  const handleRemoveExperience = (idx: number) => {
    setEditForm(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== idx)
    }));
  };

  // Add new education entry
  const handleAddEducation = () => {
    setEditForm(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { institution: 'University / Institute', degree: 'Degree Name', period: '2024 - 2026' }
      ]
    }));
  };

  const handleRemoveEducation = (idx: number) => {
    setEditForm(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== idx)
    }));
  };

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
    addNotification({
      title: 'Security Password Updated',
      category: 'System',
      message: 'User account authentication key was changed successfully.',
      dateStr: new Date().toISOString().split('T')[0]
    });
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
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(59, 130, 246, 0.18) 100%)',
              borderBottom: '1px solid var(--am-border)'
            }}
          >
            <div className="position-relative">
              <img
                src="/assets/images/users/cyber_avatar.png"
                alt="Cyber Architect Avatar"
                className="rounded-circle border border-3 border-cyan shadow"
                style={{ width: 104, height: 104, objectFit: 'cover' }}
              />
              <span className="position-absolute bottom-0 end-0 p-2 bg-success border border-dark rounded-circle" title="Online Verified"></span>
            </div>

            <div className="flex-grow-1 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-1 flex-wrap">
                <h4 className="mb-0 fw-bold text-body">{profile.name}</h4>
                <span className="badge bg-cyan-subtle text-cyan border border-cyan-subtle font-monospace fs-11">
                  Verified Identity
                </span>
                <span className="badge bg-info-subtle text-info border border-info-subtle fs-11">
                  {profile.nationality || 'Bangladesh'}
                </span>
              </div>
              <p className="text-muted mb-2 fs-13">{profile.title}</p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 flex-wrap fs-12 text-muted">
                <span><i className="ti ti-mail me-1 text-cyan"></i>{profile.email}</span>
                <span><i className="ti ti-phone me-1 text-cyan"></i>{profile.phone1}</span>
                <span><i className="ti ti-brand-github me-1 text-cyan"></i>pulok529</span>
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-sm btn-outline-cyan d-flex align-items-center gap-1 shadow"
                onClick={handleOpenEditModal}
              >
                <i className="ti ti-edit"></i> Edit Profile Info
              </button>
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
          <div className="card-body p-0 border-top border-secondary-subtle">
            <ul className="nav nav-tabs nav-justified border-0" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'overview' ? 'active text-cyan border-cyan bg-body-tertiary' : 'text-muted'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <i className="ti ti-user me-1"></i> Career Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'cv' ? 'active text-cyan border-cyan bg-body-tertiary' : 'text-muted'}`}
                  onClick={() => setActiveTab('cv')}
                >
                  <i className="ti ti-briefcase me-1"></i> Experience & Research
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'passport' ? 'active text-cyan border-cyan bg-body-tertiary' : 'text-muted'}`}
                  onClick={() => setActiveTab('passport')}
                >
                  <i className="ti ti-id me-1"></i> Passport & KYC Details
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link py-3 fw-semibold fs-13 border-0 border-bottom border-2 rounded-0 ${activeTab === 'security' ? 'active text-cyan border-cyan bg-body-tertiary' : 'text-muted'}`}
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
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0 text-body">Executive Summary</h5>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleOpenEditModal}>
                    <i className="ti ti-pencil me-1"></i> Quick Edit
                  </button>
                </div>
                <div className="card-body">
                  <p className="fs-13 text-body lh-lg mb-4">{profile.about}</p>
                  <h6 className="fw-bold mb-3 fs-13 text-uppercase text-muted">Core Competencies & Stack ({profile.skills.length})</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {profile.skills.map((skill, idx) => (
                      <span key={idx} className="badge bg-body-secondary border border-secondary-subtle text-body p-2 fs-12">
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
                  <h5 className="card-title mb-0 text-body">Contact & Addresses</h5>
                </div>
                <div className="card-body fs-13 d-flex flex-column gap-3">
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Present Address</span>
                    <span className="text-body">{profile.addressPresent}</span>
                  </div>
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Permanent Address</span>
                    <span className="text-body">{profile.addressPermanent}</span>
                  </div>
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Emergency Phone</span>
                    <span className="text-warning fw-semibold">{profile.emergencyContact}</span>
                  </div>
                  <div>
                    <span className="text-muted fs-11 text-uppercase fw-bold d-block">Verified Profiles</span>
                    <div className="d-flex gap-2 mt-2 flex-wrap">
                      <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary text-body">
                        <i className="ti ti-brand-github"></i> GitHub
                      </a>
                      <a href={profile.scholar} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary text-body">
                        <i className="ti ti-school"></i> Scholar
                      </a>
                      <a href={profile.facebook} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary text-body">
                        <i className="ti ti-brand-facebook"></i> Social
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
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0 text-body">Work Experience</h5>
                  <button type="button" className="btn btn-sm btn-outline-cyan" onClick={handleOpenEditModal}>
                    <i className="ti ti-plus me-1"></i> Edit Jobs
                  </button>
                </div>
                <div className="card-body d-flex flex-column gap-3">
                  {profile.experiences.map((exp, idx) => (
                    <div key={idx} className="p-3 rounded border border-secondary-subtle bg-body-tertiary">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="fw-bold mb-0 text-cyan">{exp.role}</h6>
                        <span className="badge bg-body-secondary border border-secondary-subtle text-muted fs-11">{exp.period}</span>
                      </div>
                      <span className="fw-semibold fs-12 text-body d-block mb-2">{exp.company} • {exp.location}</span>
                      <p className="fs-12 text-muted mb-0">{exp.highlights}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0 text-body">Education & Academic Background</h5>
                </div>
                <div className="card-body">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded border border-secondary-subtle bg-body-tertiary">
                      <h6 className="fw-bold mb-1 text-body">{edu.degree}</h6>
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
                  <h5 className="card-title mb-0 text-body">Peer-Reviewed Research Publications</h5>
                </div>
                <div className="card-body d-flex flex-column gap-3">
                  {profile.publications.map((pub, idx) => (
                    <div key={idx} className="p-3 rounded border border-secondary-subtle bg-body-tertiary">
                      <h6 className="fw-bold mb-1 text-body fs-13">{pub.title}</h6>
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
              <h5 className="card-title mb-0 text-body">Passport & National Verification (KYC)</h5>
              <div className="d-flex gap-2">
                <span className="badge bg-success-subtle text-success border border-success">Valid & Active</span>
                <button type="button" className="btn btn-sm btn-outline-cyan" onClick={handleOpenEditModal}>
                  <i className="ti ti-edit me-1"></i> Edit KYC
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-3 fs-13">
                <div className="col-md-4">
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle">
                    <span className="text-muted fs-11 d-block text-uppercase">Passport Number</span>
                    <span className="fw-bold fs-15 text-cyan font-monospace">{profile.passportNo}</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle">
                    <span className="text-muted fs-11 d-block text-uppercase">Personal Number (NID)</span>
                    <span className="fw-bold fs-15 text-body font-monospace">{profile.personalNo}</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle">
                    <span className="text-muted fs-11 d-block text-uppercase">Date of Birth</span>
                    <span className="fw-bold fs-15 text-body">{profile.dob}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle">
                    <span className="text-muted fs-11 d-block text-uppercase">Father's Name</span>
                    <span className="fw-bold text-body">{profile.fatherName}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle">
                    <span className="text-muted fs-11 d-block text-uppercase">Mother's Name</span>
                    <span className="fw-bold text-body">{profile.motherName}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle">
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
              <h5 className="card-title mb-0 text-body">Frictionless Password Update</h5>
              <small className="text-muted fs-12">No previous password required — updates directly.</small>
            </div>
            <div className="card-body">
              <form onSubmit={handlePasswordChange}>
                <div className="mb-3">
                  <label className="form-label fs-12 text-body fw-medium">New Password</label>
                  <input
                    type="password"
                    className="form-control bg-body border-secondary-subtle text-body"
                    placeholder="Enter any new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fs-12 text-body fw-medium">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control bg-body border-secondary-subtle text-body"
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

      {/* COMPREHENSIVE PROFILE EDIT & ENTRY MODAL */}
      {isEditModalOpen && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(10px)', zIndex: 1055 }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border border-cyan bg-body text-body shadow-2xl">
              <div className="modal-header border-bottom border-secondary-subtle px-4 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-id-badge-2 fs-20 text-cyan"></i>
                  <h5 className="modal-title fw-bold text-body m-0">Edit Profile Information & Entry System</h5>
                </div>
                <button type="button" className="btn-close" onClick={() => setIsEditModalOpen(false)}></button>
              </div>

              {/* Subtabs within modal */}
              <div className="px-4 pt-3 border-bottom border-secondary-subtle bg-body-tertiary">
                <ul className="nav nav-pills gap-2 fs-12 fw-semibold">
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link py-1.5 px-3 rounded ${editTab === 'personal' ? 'active bg-cyan text-dark' : 'text-body'}`}
                      onClick={() => setEditTab('personal')}
                    >
                      Personal & Contact
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link py-1.5 px-3 rounded ${editTab === 'kyc' ? 'active bg-cyan text-dark' : 'text-body'}`}
                      onClick={() => setEditTab('kyc')}
                    >
                      Identity & KYC
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link py-1.5 px-3 rounded ${editTab === 'skills' ? 'active bg-cyan text-dark' : 'text-body'}`}
                      onClick={() => setEditTab('skills')}
                    >
                      Bio & Skills
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link py-1.5 px-3 rounded ${editTab === 'experiences' ? 'active bg-cyan text-dark' : 'text-body'}`}
                      onClick={() => setEditTab('experiences')}
                    >
                      Experiences ({editForm.experiences.length})
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link py-1.5 px-3 rounded ${editTab === 'education' ? 'active bg-cyan text-dark' : 'text-body'}`}
                      onClick={() => setEditTab('education')}
                    >
                      Education
                    </button>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSaveProfile}>
                <div className="modal-body p-4" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                  {/* TAB: Personal & Contact */}
                  {editTab === 'personal' && (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Full Name</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.name}
                          onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Professional Title</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.title}
                          onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Email Address</label>
                        <input
                          type="email"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.email}
                          onChange={e => setEditForm({ ...editForm, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Primary Phone</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.phone1}
                          onChange={e => setEditForm({ ...editForm, phone1: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Secondary Phone</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.phone2}
                          onChange={e => setEditForm({ ...editForm, phone2: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">WhatsApp Handle</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.whatsapp}
                          onChange={e => setEditForm({ ...editForm, whatsapp: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fs-12 fw-semibold text-body">GitHub URL</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.github}
                          onChange={e => setEditForm({ ...editForm, github: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fs-12 fw-semibold text-body">Google Scholar URL</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.scholar}
                          onChange={e => setEditForm({ ...editForm, scholar: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fs-12 fw-semibold text-body">Facebook / Social URL</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.facebook}
                          onChange={e => setEditForm({ ...editForm, facebook: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB: Identity & KYC */}
                  {editTab === 'kyc' && (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Passport Number</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13 font-monospace"
                          value={editForm.passportNo}
                          onChange={e => setEditForm({ ...editForm, passportNo: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Personal Identification No (NID)</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13 font-monospace"
                          value={editForm.personalNo}
                          onChange={e => setEditForm({ ...editForm, personalNo: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Date of Birth</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.dob}
                          onChange={e => setEditForm({ ...editForm, dob: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Nationality</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.nationality}
                          onChange={e => setEditForm({ ...editForm, nationality: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Father's Name</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.fatherName}
                          onChange={e => setEditForm({ ...editForm, fatherName: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-12 fw-semibold text-body">Mother's Name</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.motherName}
                          onChange={e => setEditForm({ ...editForm, motherName: e.target.value })}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fs-12 fw-semibold text-body">Emergency Contact Info</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.emergencyContact}
                          onChange={e => setEditForm({ ...editForm, emergencyContact: e.target.value })}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fs-12 fw-semibold text-body">Present Address</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.addressPresent}
                          onChange={e => setEditForm({ ...editForm, addressPresent: e.target.value })}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fs-12 fw-semibold text-body">Permanent Address</label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.addressPermanent}
                          onChange={e => setEditForm({ ...editForm, addressPermanent: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB: Bio & Skills */}
                  {editTab === 'skills' && (
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label fs-12 fw-semibold text-body">Executive Summary / Bio</label>
                        <textarea
                          rows={4}
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={editForm.about}
                          onChange={e => setEditForm({ ...editForm, about: e.target.value })}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <label className="form-label fs-12 fw-semibold text-body">
                          Skills & Tech Stack <small className="text-muted">(Comma-separated)</small>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-body border-secondary-subtle text-body fs-13"
                          value={skillsInput}
                          onChange={e => setSkillsInput(e.target.value)}
                          placeholder="e.g. Python, Docker, Kubernetes, AWS, C#"
                        />
                        <div className="mt-2 d-flex flex-wrap gap-1">
                          {skillsInput.split(',').filter(Boolean).map((s, idx) => (
                            <span key={idx} className="badge bg-secondary-subtle text-body fs-11">
                              {s.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB: Experiences */}
                  {editTab === 'experiences' && (
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fs-12 text-muted fw-semibold">Manage Professional Work History</span>
                        <button
                          type="button"
                          className="btn btn-xs btn-outline-cyan fs-12 d-flex align-items-center gap-1"
                          onClick={handleAddExperience}
                        >
                          <i className="ti ti-plus"></i> Add Experience
                        </button>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {editForm.experiences.map((exp, idx) => (
                          <div key={idx} className="p-3 border border-secondary-subtle rounded bg-body-tertiary position-relative">
                            <button
                              type="button"
                              className="btn btn-sm btn-icon text-danger position-absolute top-0 end-0 m-2"
                              onClick={() => handleRemoveExperience(idx)}
                              title="Delete Entry"
                            >
                              <i className="ti ti-trash"></i>
                            </button>
                            <div className="row g-2">
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Role / Position</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={exp.role}
                                  onChange={e => {
                                    const next = [...editForm.experiences];
                                    next[idx].role = e.target.value;
                                    setEditForm({ ...editForm, experiences: next });
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Company / Organization</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={exp.company}
                                  onChange={e => {
                                    const next = [...editForm.experiences];
                                    next[idx].company = e.target.value;
                                    setEditForm({ ...editForm, experiences: next });
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Period (Dates)</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={exp.period}
                                  onChange={e => {
                                    const next = [...editForm.experiences];
                                    next[idx].period = e.target.value;
                                    setEditForm({ ...editForm, experiences: next });
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Location</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={exp.location}
                                  onChange={e => {
                                    const next = [...editForm.experiences];
                                    next[idx].location = e.target.value;
                                    setEditForm({ ...editForm, experiences: next });
                                  }}
                                />
                              </div>
                              <div className="col-12">
                                <label className="form-label fs-11 text-muted m-0">Key Highlights / Responsibilities</label>
                                <textarea
                                  rows={2}
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={exp.highlights}
                                  onChange={e => {
                                    const next = [...editForm.experiences];
                                    next[idx].highlights = e.target.value;
                                    setEditForm({ ...editForm, experiences: next });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB: Education */}
                  {editTab === 'education' && (
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fs-12 text-muted fw-semibold">Academic Credentials</span>
                        <button
                          type="button"
                          className="btn btn-xs btn-outline-cyan fs-12 d-flex align-items-center gap-1"
                          onClick={handleAddEducation}
                        >
                          <i className="ti ti-plus"></i> Add Education
                        </button>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {editForm.education.map((edu, idx) => (
                          <div key={idx} className="p-3 border border-secondary-subtle rounded bg-body-tertiary position-relative">
                            <button
                              type="button"
                              className="btn btn-sm btn-icon text-danger position-absolute top-0 end-0 m-2"
                              onClick={() => handleRemoveEducation(idx)}
                              title="Delete Entry"
                            >
                              <i className="ti ti-trash"></i>
                            </button>
                            <div className="row g-2">
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Degree / Certification</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={edu.degree}
                                  onChange={e => {
                                    const next = [...editForm.education];
                                    next[idx].degree = e.target.value;
                                    setEditForm({ ...editForm, education: next });
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Institution</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={edu.institution}
                                  onChange={e => {
                                    const next = [...editForm.education];
                                    next[idx].institution = e.target.value;
                                    setEditForm({ ...editForm, education: next });
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label fs-11 text-muted m-0">Years Attended</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm bg-body border-secondary-subtle text-body fs-12"
                                  value={edu.period}
                                  onChange={e => {
                                    const next = [...editForm.education];
                                    next[idx].period = e.target.value;
                                    setEditForm({ ...editForm, education: next });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="modal-footer border-top border-secondary-subtle px-4 py-3 d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={handleResetDefaults}
                  >
                    <i className="ti ti-restore me-1"></i> Reset to Factory Defaults
                  </button>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={() => setIsEditModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-gradient-cyan fw-bold px-3"
                    >
                      <i className="ti ti-check me-1"></i> Save Profile Credentials
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
                    src="/assets/images/users/cyber_avatar.png"
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

export default ProfilePage;
