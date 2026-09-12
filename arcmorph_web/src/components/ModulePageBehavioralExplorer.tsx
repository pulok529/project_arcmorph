import React, { useState } from 'react';
import { Layers, FileCode, Database, ArrowRight, CheckCircle2, AlertTriangle, Search, Sparkles, BookOpen, DollarSign, Users, Shield, Cpu, RefreshCw, Key, CornerDownRight, Tag, ChevronRight } from 'lucide-react';

interface DataInflowItem {
  field: string;
  type: string;
  sourceTable: string;
  originUI: string;
  isIndependent?: boolean;
  dependsOn?: string;
}

interface DownstreamPageItem {
  page: string;
  usage: string;
}

interface PageControlItem {
  id: string;
  category: string;
  label?: string;
  type?: string;
  isDynamic?: boolean;
  handler?: string;
  columns?: string[];
}

interface PageBehavioralSpec {
  fileName: string;
  title: string;
  subsystem: string;
  category: 'academic' | 'accounts' | 'hrm' | 'panel';
  purpose: string;
  idGeneration: string;
  controlsSummary?: {
    totalTextBoxes: number;
    totalDropdowns: number;
    totalGrids: number;
    totalButtons: number;
    totalHiddenFields: number;
  };
  controls: PageControlItem[];
  dataInflow: DataInflowItem[];
  cascadingRules: string[];
  dataOutflow: {
    targetTables: string[];
    downstreamPages: DownstreamPageItem[];
  };
}

interface ModulePageBehavioralExplorerProps {
  pageCatalog?: {
    academic?: PageBehavioralSpec[];
    accounts?: PageBehavioralSpec[];
    hrm?: PageBehavioralSpec[];
    panel?: PageBehavioralSpec[];
  };
  projectName: string;
}

export const ModulePageBehavioralExplorer: React.FC<ModulePageBehavioralExplorerProps> = ({ pageCatalog, projectName }) => {
  const [activeModule, setActiveModule] = useState<'academic' | 'accounts' | 'hrm' | 'panel'>('academic');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);

  // Fallback defaults if catalog is still indexing
  const defaultAcademicPages: PageBehavioralSpec[] = [
    {
      fileName: 'StudentInfo.aspx',
      title: 'Student Profile Registration',
      subsystem: 'Academic Subsystem',
      category: 'academic',
      purpose: 'User first comes here to register primary student biographical profile (Name, Father, Mother, Blood Group, Date of Birth, National ID, Address). Upon submission, the system generates and assigns a unique StudentId and creates a master student profile in the database.',
      idGeneration: 'Generates unique StudentId via Database IDENTITY / UUID sequence, linking future admissions, grades, and fees.',
      controlsSummary: { totalTextBoxes: 8, totalDropdowns: 3, totalGrids: 1, totalButtons: 2, totalHiddenFields: 1 },
      controls: [
        { id: 'studentIdHiddenField', category: 'HiddenField', label: 'Primary Student Identity Key' },
        { id: 'studentNameTextBox', category: 'TextBox', label: 'Student Full Name' },
        { id: 'fatherNameTextBox', category: 'TextBox', label: "Father's Name" },
        { id: 'motherNameTextBox', category: 'TextBox', label: "Mother's Name" },
        { id: 'dobTextBox', category: 'TextBox', label: 'Date of Birth (with CalendarExtender)' },
        { id: 'bloodGroupDropDownList', category: 'DropDownList', label: 'Blood Group' },
        { id: 'genderDropDownList', category: 'DropDownList', label: 'Gender' },
        { id: 'religionDropDownList', category: 'DropDownList', label: 'Religion' },
        { id: 'contactNoTextBox', category: 'TextBox', label: 'Guardian Mobile Number' },
        { id: 'presentAddressTextBox', category: 'TextBox', label: 'Present Residential Address' },
        { id: 'btnSave', category: 'Button', label: 'Save Student Profile' },
        { id: 'studentListGridView', category: 'GridView', label: 'Searchable Student Records Grid' }
      ],
      dataInflow: [
        { field: 'bloodGroupDropDownList', type: 'DropDownList', sourceTable: 'Static Enum', originUI: 'Built-in Form Options (A+, A-, B+, B-, O+, O-, AB+, AB-)', isIndependent: true },
        { field: 'genderDropDownList', type: 'DropDownList', sourceTable: 'Static Enum', originUI: 'Built-in Form Options (Male, Female)', isIndependent: true },
        { field: 'religionDropDownList', type: 'DropDownList', sourceTable: 'Static Enum', originUI: 'Built-in Form Options (Islam, Hinduism, Christianity, Buddhism)', isIndependent: true },
        { field: 'studentListGridView', type: 'GridView', sourceTable: 'tbl_StudentInfo', originUI: 'StudentInfo.aspx (Self-managed roster via StudentInfoDAL.GetStudentList())', isIndependent: true }
      ],
      cascadingRules: [
        'All biographical fields are independent. No cascading parent dropdowns are required.',
        'Primary entry point: No prerequisite setup UI is required; biographical records are entered directly.'
      ],
      dataOutflow: {
        targetTables: ['tbl_StudentInfo', 'tblStudentInfo'],
        downstreamPages: [
          { page: 'AdmissionInfo.aspx', usage: 'Selects registered student to allocate Class, Section, Subjects, and Fee Schedule.' },
          { page: 'FeesCollection.aspx', usage: 'Reads student bio profile to display photo, name, and guardian info during cashiering.' },
          { page: 'ExamMarksEntry.aspx', usage: 'Reads student name and roll to populate exam grading rows.' },
          { page: 'StudentProfileReport.aspx / QuestPDF', usage: 'Generates official student ID cards and bio transcripts.' }
        ]
      }
    },
    {
      fileName: 'AdmissionInfo.aspx',
      title: 'Student Admission & Academic Enrollment',
      subsystem: 'Academic Subsystem',
      category: 'academic',
      purpose: 'This page admits an already-registered or new student into an academic session, class, shift, and section, mapping their curriculum subjects and fee payment rules. Upon submitting data, an active enrollment record with unique AdmissionId and RollNo is committed.',
      idGeneration: 'Generates unique AdmissionId and assigns Class RollNo within the selected Session, Class, and Section.',
      controlsSummary: { totalTextBoxes: 6, totalDropdowns: 6, totalGrids: 2, totalButtons: 3, totalHiddenFields: 1 },
      controls: [
        { id: 'studentIdHiddenField', category: 'HiddenField', label: 'Selected Student Identity Key' },
        { id: 'admissionDtTextBox', category: 'TextBox', label: 'Admission Date' },
        { id: 'studentCodeTextBox', category: 'TextBox', label: 'Student Identification Code' },
        { id: 'studentNameTextBox', category: 'TextBox', label: 'Student Full Name' },
        { id: 'sessionDropDownList', category: 'DropDownList', label: 'Academic Session / Year' },
        { id: 'shiftDropDownList', category: 'DropDownList', label: 'Morning / Day Shift' },
        { id: 'schoolClassDropDownList', category: 'DropDownList', label: 'Target Academic Class' },
        { id: 'departmentDropDownList', category: 'DropDownList', label: 'Department / Group (Science, Arts, Commerce)' },
        { id: 'classSectionDropDownList', category: 'DropDownList', label: 'Section (A, B, Rose, Tulip)' },
        { id: 'admissionDropDownList', category: 'DropDownList', label: 'Admission Type (New, Re-Admission, Transfer)' },
        { id: 'rollNoTextBox', category: 'TextBox', label: 'Class Roll Number' },
        { id: 'SubjectAssignGridView', category: 'GridView', label: 'Curriculum Subjects Matrix (Compulsory / Elective / 4th)' },
        { id: 'FeeMapGridView', category: 'GridView', label: 'Fee Mapping Table with Custom Rate TextBoxes' },
        { id: 'btnSave', category: 'Button', label: 'Confirm & Admit Student' }
      ],
      dataInflow: [
        { field: 'sessionDropDownList', type: 'DropDownList', sourceTable: 'tbl_Session', originUI: 'SessionSetup.aspx', isIndependent: true },
        { field: 'shiftDropDownList', type: 'DropDownList', sourceTable: 'tbl_Shift', originUI: 'ShiftSetup.aspx', isIndependent: true },
        { field: 'schoolClassDropDownList', type: 'DropDownList', sourceTable: 'tbl_SchoolClass', originUI: 'ClassSetup.aspx', isIndependent: true },
        { field: 'departmentDropDownList', type: 'DropDownList', sourceTable: 'tbl_Department', originUI: 'DepartmentSetup.aspx', isIndependent: false, dependsOn: 'schoolClassDropDownList (Only visible for High School / College classes)' },
        { field: 'classSectionDropDownList', type: 'DropDownList', sourceTable: 'tbl_ClassSection', originUI: 'SectionSetup.aspx', isIndependent: false, dependsOn: 'schoolClassDropDownList (Loads sections belonging specifically to the selected class)' },
        { field: 'SubjectAssignGridView', type: 'GridView', sourceTable: 'tbl_Subject, tbl_ClassSubjectMap', originUI: 'SubjectSetup.aspx & ClassSubjectMapping.aspx', isIndependent: false, dependsOn: 'schoolClassDropDownList & departmentDropDownList (Loads curriculum subjects. If no subjects configured for class, grid is empty!)' },
        { field: 'FeeMapGridView', type: 'GridView', sourceTable: 'tbl_FeeAmount, tbl_FeeHead', originUI: 'FeeSetup.aspx & FeeMapping.aspx', isIndependent: false, dependsOn: 'schoolClassDropDownList (Loads tuition rules for class. Fee mapping must be configured in FeeMapping.aspx first!)' }
      ],
      cascadingRules: [
        'Independent Controls: sessionDropDownList, shiftDropDownList, schoolClassDropDownList, admissionDtTextBox.',
        'Cascading Dependency 1: departmentDropDownList depends on schoolClassDropDownList (Science/Commerce groups only appear for Class 9 and 10; Junior classes have no department).',
        'Cascading Dependency 2: classSectionDropDownList depends on schoolClassDropDownList (loads sections assigned specifically to the selected class).',
        'Cascading Dependency 3: SubjectAssignGridView depends on schoolClassDropDownList & departmentDropDownList (GridView items are populated from tbl_Subject filtered by Class/Group. If no subjects were configured in SubjectSetup.aspx for that class, the grid renders empty!).',
        'Cascading Dependency 4: FeeMapGridView depends on schoolClassDropDownList (GridView items are populated from tbl_FeeAmount mapped to that class. If no fee mapping was created in FeeMapping.aspx for that class, the grid renders empty and fee collection will fail!).'
      ],
      dataOutflow: {
        targetTables: ['tbl_AdmissionInfo', 'tbl_StudentSubjectAssign', 'tbl_StudentFeeMap'],
        downstreamPages: [
          { page: 'FeesCollection.aspx', usage: 'Collects tuition and session fees based on tbl_StudentFeeMap and class enrollment.' },
          { page: 'ExamMarksEntry.aspx', usage: 'Loads student roster under the specific Class, Section, and assigned subjects from tbl_StudentSubjectAssign.' },
          { page: 'StudentAttendance.aspx', usage: 'Generates daily attendance register based on Class, Section, and RollNo.' },
          { page: 'StudentPromotion.aspx', usage: 'Evaluates annual exam performance and re-allocates student to the next academic session.' },
          { page: 'AdmitCardReportViewer.aspx', usage: 'Generates exam admit cards with assigned subjects and photo.' }
        ]
      }
    },
    {
      fileName: 'ExamMarksEntry.aspx',
      title: 'Examination Marks Entry & Grade Processing',
      subsystem: 'Academic Subsystem',
      category: 'academic',
      purpose: 'This page allows teachers and examination officers to enter term, mid-term, and final examination marks for students in a specific Class, Section, and Subject, validating mark boundaries and computing grade points.',
      idGeneration: 'Generates unique MarksId per student-subject-exam combination, computing GradePoint and LetterGrade.',
      controlsSummary: { totalTextBoxes: 2, totalDropdowns: 6, totalGrids: 1, totalButtons: 2, totalHiddenFields: 1 },
      controls: [
        { id: 'examTypeDropDownList', category: 'DropDownList', label: 'Examination Name (Term 1, Mid-Term, Annual)' },
        { id: 'sessionDropDownList', category: 'DropDownList', label: 'Academic Session' },
        { id: 'schoolClassDropDownList', category: 'DropDownList', label: 'Academic Class' },
        { id: 'departmentDropDownList', category: 'DropDownList', label: 'Department / Group' },
        { id: 'classSectionDropDownList', category: 'DropDownList', label: 'Section' },
        { id: 'subjectDropDownList', category: 'DropDownList', label: 'Subject being graded' },
        { id: 'examMarksGridView', category: 'GridView', label: 'Student Marks Spreadsheet (Written, MCQ, Practical, Total, Grade)' },
        { id: 'btnSave', category: 'Button', label: 'Submit & Finalize Marks' }
      ],
      dataInflow: [
        { field: 'examTypeDropDownList', type: 'DropDownList', sourceTable: 'tbl_Exam', originUI: 'ExamSetup.aspx', isIndependent: true },
        { field: 'subjectDropDownList', type: 'DropDownList', sourceTable: 'tbl_Subject', originUI: 'SubjectSetup.aspx', isIndependent: false, dependsOn: 'schoolClassDropDownList & departmentDropDownList' },
        { field: 'examMarksGridView', type: 'GridView', sourceTable: 'tbl_AdmissionInfo, tbl_StudentSubjectAssign', originUI: 'AdmissionInfo.aspx', isIndependent: false, dependsOn: 'All header dropdowns. Only students admitted with the selected subject appear in grid.' }
      ],
      cascadingRules: [
        'subjectDropDownList depends on schoolClassDropDownList & departmentDropDownList.',
        'examMarksGridView depends on all header dropdowns: only students enrolled in the selected Class/Section with the assigned subject appear.',
        'Prerequisite Validation Blocker: If student has unpaid exam fees in FeesCollection.aspx, the row is flagged or locked from final grade submission until fee clearance is posted.'
      ],
      dataOutflow: {
        targetTables: ['tbl_ExamMarks', 'tbl_StudentMarksDetails'],
        downstreamPages: [
          { page: 'TabulationSheet.aspx', usage: 'Aggregates all subject marks into full-class term result sheets.' },
          { page: 'MarksheetReportViewer.aspx / QuestPDF', usage: 'Generates official student report cards and academic transcripts with GPA.' },
          { page: 'StudentPromotion.aspx', usage: 'Uses annual final CGPA to determine merit ranking and promotion to next class.' }
        ]
      }
    }
  ];

  const currentModulePages: PageBehavioralSpec[] = pageCatalog?.[activeModule] && pageCatalog[activeModule]!.length > 0
    ? pageCatalog[activeModule]!
    : defaultAcademicPages;

  const filteredPages = currentModulePages.filter(p =>
    (p.fileName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (p.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedPage: PageBehavioralSpec = filteredPages[selectedPageIndex] || filteredPages[0] || defaultAcademicPages[0];

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Top Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Module-by-Module UI Behavioral & Data Inflow Catalog</h5>
              <span className="badge bg-primary text-white rounded-pill font-monospace fs-11">
                Field & Inflow Blueprint
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              In-depth specification for every UI page: exact form controls, origin database tables, prerequisite setup pages, conditional cascading rules, and downstream data consumers.
            </p>
          </div>
        </div>

        {/* Module Tab Selector */}
        <div className="btn-group p-1 bg-light rounded-pill">
          <button
            onClick={() => { setActiveModule('academic'); setSelectedPageIndex(0); }}
            className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-bold d-flex align-items-center gap-1.5 transition-all ${
              activeModule === 'academic' ? 'btn-white shadow-sm text-primary' : 'text-muted'
            }`}
          >
            <BookOpen size={14} /> 🎓 Academic Module (Core)
          </button>
          <button
            onClick={() => { setActiveModule('accounts'); setSelectedPageIndex(0); }}
            className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-bold d-flex align-items-center gap-1.5 transition-all ${
              activeModule === 'accounts' ? 'btn-white shadow-sm text-primary' : 'text-muted'
            }`}
          >
            <DollarSign size={14} /> 💵 Accounts & POS
          </button>
          <button
            onClick={() => { setActiveModule('hrm'); setSelectedPageIndex(0); }}
            className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-bold d-flex align-items-center gap-1.5 transition-all ${
              activeModule === 'hrm' ? 'btn-white shadow-sm text-primary' : 'text-muted'
            }`}
          >
            <Users size={14} /> 👥 HRM & Payroll
          </button>
          <button
            onClick={() => { setActiveModule('panel'); setSelectedPageIndex(0); }}
            className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-bold d-flex align-items-center gap-1.5 transition-all ${
              activeModule === 'panel' ? 'btn-white shadow-sm text-primary' : 'text-muted'
            }`}
          >
            <Shield size={14} /> ⚙️ Panel / Admin
          </button>
        </div>
      </div>

      {/* Main Split Layout: Left Page Selector + Right Detailed Blueprint */}
      <div className="card-body p-4">
        <div className="row g-4">
          
          {/* Left Sidebar: Pages List */}
          <div className="col-lg-4 col-xl-3">
            <div className="card border-0 bg-light rounded-4 p-3 mb-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="fw-bold fs-12 text-uppercase font-monospace text-muted">Pages in Module</span>
                <span className="badge bg-primary-subtle text-primary font-monospace fs-10">{filteredPages.length} Pages</span>
              </div>

              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text bg-white border-end-0"><Search size={13} className="text-muted" /></span>
                <input
                  type="text"
                  className="form-control bg-white border-start-0 fs-12"
                  placeholder="Filter page name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="nav flex-column nav-pills gap-1" style={{ maxHeight: '550px', overflowY: 'auto' }}>
                {filteredPages.map((page, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPageIndex(idx)}
                    className={`nav-link text-start fs-12 py-2.5 px-3 rounded-3 d-flex align-items-center justify-content-between transition-all ${
                      selectedPage.fileName === page.fileName
                        ? 'active fw-bold shadow-sm'
                        : 'text-dark hover-bg-white bg-transparent'
                    }`}
                  >
                    <div className="d-flex align-items-center gap-2 text-truncate">
                      <FileCode size={16} className={selectedPage.fileName === page.fileName ? 'text-white' : 'text-primary'} />
                      <span className="font-monospace text-truncate">{page.fileName}</span>
                    </div>
                    {selectedPage.fileName === page.fileName && <ChevronRight size={14} className="text-white" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Main Area: Comprehensive Page Behavioral Blueprint */}
          <div className="col-lg-8 col-xl-9">
            
            {selectedPage ? (
              <div className="card border-0 bg-white shadow-sm rounded-4 p-4">
                
                {/* Page Title & Operational Purpose Banner */}
                <div className="p-3 bg-primary-subtle rounded-4 mb-4 border border-primary-subtle">
                  <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <FileCode size={20} className="text-primary" />
                      <h5 className="fw-bold mb-0 text-dark font-monospace">{selectedPage.fileName}</h5>
                      <span className="badge bg-primary text-white fs-11 rounded-pill">{selectedPage.subsystem}</span>
                    </div>
                    <span className="badge bg-white text-primary border font-monospace fs-11 px-2.5 py-1">
                      {selectedPage.title}
                    </span>
                  </div>

                  <p className="text-dark fs-13 mb-2 fw-medium">
                    🎯 <strong>Operational Purpose:</strong> {selectedPage.purpose}
                  </p>

                  <div className="d-flex align-items-center gap-2 text-primary font-monospace fs-12">
                    <Key size={14} />
                    <span><strong>Identity Assignment:</strong> {selectedPage.idGeneration}</span>
                  </div>
                </div>

                {/* Section 1: Complete Form Controls Inventory */}
                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="fw-bold text-dark fs-13 text-uppercase font-monospace mb-0 d-flex align-items-center gap-1.5">
                      <Layers size={15} className="text-primary" /> 1. UI Form Controls & Element Types ({(selectedPage.controls || []).length})
                    </h6>
                    <div className="hstack gap-2 font-monospace fs-11 text-muted">
                      <span>Inputs: <strong>{selectedPage.controlsSummary?.totalTextBoxes || 0}</strong></span>
                      <span>•</span>
                      <span>Dropdowns: <strong>{selectedPage.controlsSummary?.totalDropdowns || 0}</strong></span>
                      <span>•</span>
                      <span>Grids: <strong>{selectedPage.controlsSummary?.totalGrids || 0}</strong></span>
                    </div>
                  </div>

                  <div className="table-responsive rounded-3 border">
                    <table className="table table-hover table-sm align-middle mb-0 fs-12">
                      <thead className="table-light">
                        <tr>
                          <th className="fw-semibold text-muted text-uppercase fs-10" style={{ width: '30%' }}>Control ID</th>
                          <th className="fw-semibold text-muted text-uppercase fs-10" style={{ width: '25%' }}>Element Category</th>
                          <th className="fw-semibold text-muted text-uppercase fs-10" style={{ width: '45%' }}>Label / Business Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedPage.controls || []).map((ctrl, i) => (
                          <tr key={i}>
                            <td>
                              <span className="fw-bold font-monospace text-dark">{ctrl.id}</span>
                            </td>
                            <td>
                              <span className={`badge font-monospace fs-10 ${
                                ctrl.category === 'DropDownList' ? 'bg-info-subtle text-info' :
                                ctrl.category === 'GridView' ? 'bg-warning-subtle text-warning' :
                                ctrl.category === 'Button' ? 'bg-primary-subtle text-primary' :
                                ctrl.category === 'HiddenField' ? 'bg-secondary-subtle text-secondary' : 'bg-light text-dark'
                              }`}>
                                {ctrl.category}
                              </span>
                            </td>
                            <td className="text-muted font-monospace fs-11">
                              {ctrl.label || ctrl.handler || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 2: Data Inflow Logic & Prerequisite Setup UI Pages */}
                <div className="mb-4">
                  <h6 className="fw-bold text-dark fs-13 text-uppercase font-monospace mb-2 d-flex align-items-center gap-1.5">
                    <Database size={15} className="text-warning" /> 2. Data Inflow Logic: Source Tables & Prerequisite Setup UIs
                  </h6>

                  <div className="table-responsive rounded-3 border">
                    <table className="table table-hover table-sm align-middle mb-0 fs-12">
                      <thead className="table-light">
                        <tr>
                          <th className="fw-semibold text-muted text-uppercase fs-10" style={{ width: '25%' }}>Dropdown / Grid Field</th>
                          <th className="fw-semibold text-muted text-uppercase fs-10" style={{ width: '25%' }}>Source Database Table</th>
                          <th className="fw-semibold text-muted text-uppercase fs-10" style={{ width: '50%' }}>Originating Setup ASPX UI & Inflow Logic</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedPage.dataInflow || []).map((inflow, i) => (
                          <tr key={i}>
                            <td>
                              <span className="fw-bold font-monospace text-primary">{inflow.field}</span>
                            </td>
                            <td>
                              <span className="badge bg-light text-dark border font-monospace fs-11">
                                {inflow.sourceTable}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center gap-1 text-dark fs-12">
                                <CornerDownRight size={13} className="text-primary flex-shrink-0" />
                                <span><strong>Setup UI:</strong> <code className="text-primary fw-bold">{inflow.originUI}</code></span>
                              </div>
                              {inflow.dependsOn && (
                                <small className="text-danger d-block font-monospace fs-11 mt-0.5">
                                  ⚠️ {inflow.dependsOn}
                                </small>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 3: Conditional Cascading & Prerequisite Rules */}
                <div className="mb-4">
                  <h6 className="fw-bold text-dark fs-13 text-uppercase font-monospace mb-2 d-flex align-items-center gap-1.5">
                    <AlertTriangle size={15} className="text-danger" /> 3. Conditional Cascading & Prerequisite Rules
                  </h6>

                  <div className="p-3 bg-danger-subtle rounded-3 border border-danger-subtle">
                    <ul className="mb-0 fs-12 text-danger-emphasis ps-3 font-monospace">
                      {(selectedPage.cascadingRules || []).map((rule, i) => (
                        <li key={i} className="mb-1.5">{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 4: Data Outflow & Downstream Consumer Pages */}
                <div>
                  <h6 className="fw-bold text-dark fs-13 text-uppercase font-monospace mb-2 d-flex align-items-center gap-1.5">
                    <ArrowRight size={15} className="text-success" /> 4. Data Outflow & Downstream Consumer UI Pages
                  </h6>

                  <div className="row g-3">
                    <div className="col-md-5">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <span className="fw-bold fs-11 text-muted text-uppercase font-monospace d-block mb-2">Committed Target Tables</span>
                        <div className="d-flex flex-wrap gap-1">
                          {(selectedPage.dataOutflow?.targetTables || []).map((t, i) => (
                            <span key={i} className="badge bg-success-subtle text-success border border-success-subtle font-monospace fs-11">
                              [dbo].[{t}]
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-7">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <span className="fw-bold fs-11 text-muted text-uppercase font-monospace d-block mb-2">Downstream Consumer Pages & Usage</span>
                        <div className="vstack gap-1.5">
                          {(selectedPage.dataOutflow?.downstreamPages || []).map((dp, i) => (
                            <div key={i} className="fs-12 text-dark font-monospace d-flex align-items-start gap-1.5">
                              <CheckCircle2 size={13} className="text-success flex-shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-primary">{dp.page}</strong>: <span className="text-muted">{dp.usage}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-center py-5 text-muted">
                Select a page from the left sidebar to view its detailed behavioral catalog.
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};
