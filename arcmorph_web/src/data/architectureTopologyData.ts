// Architecture Topology Graph Data Types & Dataset
export type NodeType = 'core' | 'service' | 'form' | 'table' | 'worker' | 'gateway' | 'state';
export type ClusterType = 'All' | 'Academic' | 'Accounts' | 'Attendance' | 'Examination' | 'HRM' | 'Database' | 'Infrastructure' | 'Core';

export interface GraphNode {
  id: string;
  name: string;
  type: NodeType;
  cluster: ClusterType;
  complexity: number;
  loc: number;
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  file?: string;
  upstream: Array<{ id: string; name: string; type: NodeType }>;
  downstream: Array<{ id: string; name: string; type: NodeType }>;
  codeSnippet?: string;
  decouplingRecipe?: {
    targetService: string;
    apiContract: string;
    dbStrategy: string;
    testCoverage: string;
  };
  // Dynamic physics coordinates
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  radius?: number;
  color?: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  type?: 'call' | 'query' | 'event' | 'dependency';
}

export interface GraphDataset {
  viewId: 'form_dependency' | 'database_erd' | 'user_journey';
  viewTitle: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export const FORM_DEPENDENCY_DATASET: GraphDataset = {
  viewId: 'form_dependency',
  viewTitle: 'Form Dependency Tree',
  nodes: [
    {
      id: 'core-monolith',
      name: 'Legacy Monolithic ERP Modules',
      type: 'core',
      cluster: 'Core',
      complexity: 94,
      loc: 482500,
      risk: 'Critical',
      file: 'Bornomala.Monolith/App_Code/GlobalMonolithContext.cs',
      upstream: [],
      downstream: [
        { id: 'srv-student', name: 'StudentService', type: 'service' },
        { id: 'srv-noor', name: 'NoortamenService', type: 'service' },
        { id: 'gw-fee', name: 'FeePaymentGateway', type: 'gateway' },
        { id: 'wrk-att', name: 'AttendanceWorker', type: 'worker' },
        { id: 'srv-foam', name: 'FoamService', type: 'service' },
        { id: 'wrk-mort', name: 'Mortanker', type: 'worker' }
      ],
      codeSnippet: '// Global Monolithic Context\npublic static class GlobalMonolithContext {\n    public static SqlConnection SharedMasterDbConn;\n    public static LegacySessionManager MasterSession;\n}'
    },
    {
      id: 'form-student-admission',
      name: 'StudentAdmission.aspx',
      type: 'form',
      cluster: 'Academic',
      complexity: 38,
      loc: 1840,
      risk: 'High',
      file: 'Bornomala.Web/Pages/Academic/StudentAdmission.aspx',
      upstream: [
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' },
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' },
        { id: 'form-student-portal', name: 'StudentAdmission.com.aspx', type: 'form' }
      ],
      downstream: [
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' },
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' },
        { id: 'tbl-subject-map', name: 'tblStudentSubjectMapping', type: 'table' }
      ],
      codeSnippet: 'protected void btnSaveAdmission_Click(object sender, EventArgs e) {\n    string regNo = GenerateStudentAdmissionId(ddlClass.SelectedValue);\n    using (var cmd = new SqlCommand("sp_InsertStudentAdmission", conn)) {\n        cmd.Parameters.AddWithValue("@StudentName", txtName.Text);\n        cmd.ExecuteNonQuery();\n    }\n}',
      decouplingRecipe: {
        targetService: 'academic-service (:8081)',
        apiContract: 'POST /api/v1/students/admissions\nPayload: { studentName, classId, guardianContact, bloodGroup }',
        dbStrategy: 'Migrate tblStudentInfo to PostgreSQL schema academic.students. Replace synchronous direct ADO.NET with RabbitMQ StudentAdmittedEvent.',
        testCoverage: 'Playwright spec tests/e2e/student_admission.spec.ts passing with mock payment webhook.'
      }
    },
    {
      id: 'form-student-portal',
      name: 'StudentAdmission.com.aspx',
      type: 'form',
      cluster: 'Academic',
      complexity: 24,
      loc: 1120,
      risk: 'Medium',
      file: 'Bornomala.Web/Pages/Public/StudentAdmission.com.aspx',
      upstream: [],
      downstream: [
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' },
        { id: 'gw-fee', name: 'FeePaymentGateway', type: 'gateway' }
      ],
      codeSnippet: 'public partial class PublicStudentPortal : Page {\n    // Public online registration entry\n}'
    },
    {
      id: 'srv-student',
      name: 'StudentService',
      type: 'service',
      cluster: 'Academic',
      complexity: 29,
      loc: 3200,
      risk: 'Medium',
      file: 'Bornomala.BLL/Services/StudentService.cs',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' },
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' }
      ],
      downstream: [
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' },
        { id: 'tbl-subject-map', name: 'tblStudentSubjectMapping', type: 'table' }
      ],
      codeSnippet: 'public class StudentService : IStudentService {\n    public StudentAdmissionDto Enroll(StudentEnrollmentCommand cmd) {\n        return _studentRepo.Create(cmd);\n    }\n}',
      decouplingRecipe: {
        targetService: 'academic-service',
        apiContract: 'GRPC /proto.StudentAdmission/EnrollStudent',
        dbStrategy: 'Isolate academic tenant DB with row-level security.',
        testCoverage: 'Unit test suite: 42 passed (98% branch coverage).'
      }
    },
    {
      id: 'srv-noor',
      name: 'NoortamenService',
      type: 'service',
      cluster: 'Academic',
      complexity: 22,
      loc: 1950,
      risk: 'Medium',
      file: 'Bornomala.BLL/Services/NoortamenService.cs',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' }
      ],
      downstream: [
        { id: 'tbl-subject-map', name: 'tblStudentSubjectMapping', type: 'table' },
        { id: 'srv-student', name: 'StudentService', type: 'service' }
      ],
      codeSnippet: 'public class NoortamenService {\n    public void CalculateNormativeDistribution(int termId) {\n        // Legacy bell curve normalizer\n    }\n}'
    },
    {
      id: 'gw-fee',
      name: 'FeePaymentGateway',
      type: 'gateway',
      cluster: 'Accounts',
      complexity: 45,
      loc: 2800,
      risk: 'High',
      file: 'Bornomala.BLL/Accounts/FeePaymentGateway.cs',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' },
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' }
      ],
      downstream: [
        { id: 'tbl-fee-coll', name: 'tblFeesCollection', type: 'table' },
        { id: 'tbl-ledger', name: 'tblAccountsLedger', type: 'table' }
      ],
      codeSnippet: 'public async Task<PaymentResult> ProcessBkashGateway(string invoiceNo, decimal amount) {\n    var token = await GetBkashToken();\n    return await ExecuteExecutePayment(token, invoiceNo, amount);\n}',
      decouplingRecipe: {
        targetService: 'accounts-service (:8082)',
        apiContract: 'POST /api/v1/payments/checkout\nWebhook: POST /api/v1/payments/webhooks/bkash',
        dbStrategy: 'Move tblFeesCollection to accounts.invoices with idempotent payment ledger.',
        testCoverage: 'Contract testing using Pact & Playwright simulation.'
      }
    },
    {
      id: 'wrk-att',
      name: 'AttendanceWorker',
      type: 'worker',
      cluster: 'Attendance',
      complexity: 34,
      loc: 2150,
      risk: 'Medium',
      file: 'Bornomala.Background/AttendanceWorker.cs',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' }
      ],
      downstream: [
        { id: 'tbl-att-log', name: 'tblAttendanceLog', type: 'table' },
        { id: 'gw-sms', name: 'SmsNotificationGateway', type: 'gateway' }
      ],
      codeSnippet: 'protected override async Task ExecuteAsync(CancellationToken stoppingToken) {\n    while (!stoppingToken.IsCancellationRequested) {\n        await PollZKTecoBiometricTerminals();\n        await Task.Delay(TimeSpan.FromSeconds(30));\n    }\n}'
    },
    {
      id: 'srv-foam',
      name: 'FoamService',
      type: 'service',
      cluster: 'Academic',
      complexity: 18,
      loc: 1100,
      risk: 'Low',
      file: 'Bornomala.BLL/Academic/FoamService.cs',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' }
      ],
      downstream: [
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' }
      ],
      codeSnippet: 'public class FoamService {\n    public DocumentExport GenerateApplicationForm(int studentId) {\n        return PDFGenerator.Render("AdmissionTemplate.html", studentId);\n    }\n}'
    },
    {
      id: 'wrk-mort',
      name: 'Mortanker',
      type: 'worker',
      cluster: 'Infrastructure',
      complexity: 25,
      loc: 1420,
      risk: 'Medium',
      file: 'Bornomala.Infrastructure/MortankerHealthWorker.cs',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' }
      ],
      downstream: [
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' },
        { id: 'tbl-fee-coll', name: 'tblFeesCollection', type: 'table' }
      ],
      codeSnippet: 'public class MortankerHealthWorker {\n    public void AuditOrphanedForeignKeys() {\n        // Cleans up orphaned admission and fee collection links\n    }\n}'
    },
    {
      id: 'tbl-student',
      name: 'tblStudentInfo',
      type: 'table',
      cluster: 'Database',
      complexity: 12,
      loc: 65,
      risk: 'Critical',
      file: 'dbo.tblStudentInfo (SQL Server)',
      upstream: [
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' },
        { id: 'srv-student', name: 'StudentService', type: 'service' },
        { id: 'srv-foam', name: 'FoamService', type: 'service' }
      ],
      downstream: [
        { id: 'tbl-subject-map', name: 'tblStudentSubjectMapping', type: 'table' }
      ],
      codeSnippet: 'CREATE TABLE dbo.tblStudentInfo (\n    StudentID INT IDENTITY(1,1) PRIMARY KEY,\n    AdmissionNo NVARCHAR(50) NOT NULL UNIQUE,\n    StudentName NVARCHAR(150) NOT NULL,\n    ClassID INT NOT NULL,\n    SectionID INT NOT NULL,\n    Status NVARCHAR(20) DEFAULT "ACTIVE"\n);'
    },
    {
      id: 'tbl-subject-map',
      name: 'tblStudentSubjectMapping',
      type: 'table',
      cluster: 'Database',
      complexity: 8,
      loc: 45,
      risk: 'Medium',
      file: 'dbo.tblStudentSubjectMapping (SQL Server)',
      upstream: [
        { id: 'form-student-admission', name: 'StudentAdmission.aspx', type: 'form' },
        { id: 'srv-noor', name: 'NoortamenService', type: 'service' },
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' }
      ],
      downstream: [],
      codeSnippet: 'CREATE TABLE dbo.tblStudentSubjectMapping (\n    MappingID INT IDENTITY(1,1) PRIMARY KEY,\n    StudentID INT FOREIGN KEY REFERENCES tblStudentInfo(StudentID),\n    SubjectID INT NOT NULL,\n    IsOptional BIT DEFAULT 0\n);'
    },
    {
      id: 'tbl-fee-coll',
      name: 'tblFeesCollection',
      type: 'table',
      cluster: 'Database',
      complexity: 15,
      loc: 85,
      risk: 'High',
      file: 'dbo.tblFeesCollection (SQL Server)',
      upstream: [
        { id: 'gw-fee', name: 'FeePaymentGateway', type: 'gateway' },
        { id: 'form-fee-coll', name: 'FeeCollection.aspx', type: 'form' }
      ],
      downstream: [
        { id: 'tbl-ledger', name: 'tblAccountsLedger', type: 'table' }
      ],
      codeSnippet: 'CREATE TABLE dbo.tblFeesCollection (\n    CollectionID INT PRIMARY KEY IDENTITY,\n    StudentID INT FOREIGN KEY REFERENCES tblStudentInfo(StudentID),\n    AmountPaid DECIMAL(18,2) NOT NULL,\n    PaidDate DATETIME DEFAULT GETDATE(),\n    TrxID NVARCHAR(100)\n);'
    },
    {
      id: 'tbl-att-log',
      name: 'tblAttendanceLog',
      type: 'table',
      cluster: 'Database',
      complexity: 10,
      loc: 50,
      risk: 'Medium',
      file: 'dbo.tblAttendanceLog (SQL Server)',
      upstream: [
        { id: 'wrk-att', name: 'AttendanceWorker', type: 'worker' }
      ],
      downstream: [],
      codeSnippet: 'CREATE TABLE dbo.tblAttendanceLog (\n    LogID BIGINT IDENTITY(1,1) PRIMARY KEY,\n    StudentID INT NOT NULL,\n    PunchTime DATETIME NOT NULL,\n    DeviceIP NVARCHAR(50),\n    Status NVARCHAR(10)\n);'
    },
    {
      id: 'tbl-ledger',
      name: 'tblAccountsLedger',
      type: 'table',
      cluster: 'Database',
      complexity: 14,
      loc: 70,
      risk: 'High',
      file: 'dbo.tblAccountsLedger (SQL Server)',
      upstream: [
        { id: 'gw-fee', name: 'FeePaymentGateway', type: 'gateway' },
        { id: 'tbl-fee-coll', name: 'tblFeesCollection', type: 'table' }
      ],
      downstream: [],
      codeSnippet: 'CREATE TABLE dbo.tblAccountsLedger (\n    EntryID INT PRIMARY KEY IDENTITY,\n    HeadID INT NOT NULL,\n    Debit DECIMAL(18,2) DEFAULT 0,\n    Credit DECIMAL(18,2) DEFAULT 0,\n    VoucherNo NVARCHAR(50)\n);'
    },
    {
      id: 'gw-sms',
      name: 'SmsNotificationGateway',
      type: 'gateway',
      cluster: 'Infrastructure',
      complexity: 16,
      loc: 750,
      risk: 'Low',
      file: 'Bornomala.Infrastructure/SmsNotificationGateway.cs',
      upstream: [
        { id: 'wrk-att', name: 'AttendanceWorker', type: 'worker' }
      ],
      downstream: [],
      codeSnippet: 'public async Task SendAbsentAlertSms(string mobile, string studentName) {\n    await _smsClient.Send(mobile, $"Dear Guardian, {studentName} is absent today.");\n}'
    },
    {
      id: 'form-fee-coll',
      name: 'FeeCollection.aspx',
      type: 'form',
      cluster: 'Accounts',
      complexity: 32,
      loc: 1650,
      risk: 'High',
      file: 'Bornomala.Web/Pages/Accounts/FeeCollection.aspx',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' }
      ],
      downstream: [
        { id: 'tbl-fee-coll', name: 'tblFeesCollection', type: 'table' },
        { id: 'gw-fee', name: 'FeePaymentGateway', type: 'gateway' }
      ],
      codeSnippet: 'protected void btnPayFee_Click(object sender, EventArgs e) {\n    decimal amt = Convert.ToDecimal(txtAmount.Text);\n    FeePaymentGateway.Process(ddlStudent.SelectedValue, amt);\n}'
    },
    {
      id: 'form-exam-marks',
      name: 'ExamMarksEntry.aspx',
      type: 'form',
      cluster: 'Examination',
      complexity: 28,
      loc: 1400,
      risk: 'Medium',
      file: 'Bornomala.Web/Pages/Exam/ExamMarksEntry.aspx',
      upstream: [
        { id: 'core-monolith', name: 'Legacy Monolithic ERP Modules', type: 'core' }
      ],
      downstream: [
        { id: 'tbl-student', name: 'tblStudentInfo', type: 'table' }
      ],
      codeSnippet: 'protected void btnSaveMarks_Click(object sender, EventArgs e) {\n    foreach(GridViewRow row in gvMarks.Rows) {\n        SaveStudentMarks(row);\n    }\n}'
    }
  ],
  edges: [
    { id: 'e1', source: 'core-monolith', target: 'srv-student', label: 'hosts' },
    { id: 'e2', source: 'core-monolith', target: 'srv-noor', label: 'hosts' },
    { id: 'e3', source: 'core-monolith', target: 'gw-fee', label: 'routes' },
    { id: 'e4', source: 'core-monolith', target: 'wrk-att', label: 'schedules' },
    { id: 'e5', source: 'core-monolith', target: 'srv-foam', label: 'hosts' },
    { id: 'e6', source: 'core-monolith', target: 'wrk-mort', label: 'schedules' },
    { id: 'e7', source: 'core-monolith', target: 'form-student-admission', label: 'renders' },
    { id: 'e8', source: 'core-monolith', target: 'form-fee-coll', label: 'renders' },
    { id: 'e9', source: 'core-monolith', target: 'form-exam-marks', label: 'renders' },
    { id: 'e10', source: 'form-student-admission', target: 'srv-student', label: 'invokes' },
    { id: 'e11', source: 'form-student-admission', target: 'tbl-student', label: 'inserts' },
    { id: 'e12', source: 'form-student-admission', target: 'tbl-subject-map', label: 'configures' },
    { id: 'e13', source: 'srv-student', target: 'tbl-student', label: 'CRUD' },
    { id: 'e14', source: 'srv-student', target: 'tbl-subject-map', label: 'maps' },
    { id: 'e15', source: 'srv-noor', target: 'srv-student', label: 'coordinates' },
    { id: 'e16', source: 'srv-noor', target: 'tbl-subject-map', label: 'normalizes' },
    { id: 'e17', source: 'gw-fee', target: 'tbl-fee-coll', label: 'records' },
    { id: 'e18', source: 'gw-fee', target: 'tbl-ledger', label: 'reconciles' },
    { id: 'e19', source: 'wrk-att', target: 'tbl-att-log', label: 'syncs' },
    { id: 'e20', source: 'wrk-att', target: 'gw-sms', label: 'triggers' },
    { id: 'e21', source: 'srv-foam', target: 'tbl-student', label: 'reads' },
    { id: 'e22', source: 'wrk-mort', target: 'tbl-student', label: 'audits' },
    { id: 'e23', source: 'wrk-mort', target: 'tbl-fee-coll', label: 'audits' },
    { id: 'e24', source: 'form-fee-coll', target: 'gw-fee', label: 'authorizes' },
    { id: 'e25', source: 'form-fee-coll', target: 'tbl-fee-coll', label: 'queries' },
    { id: 'e26', source: 'form-exam-marks', target: 'tbl-student', label: 'queries' }
  ]
};

export const DATABASE_ERD_DATASET: GraphDataset = {
  viewId: 'database_erd',
  viewTitle: 'Database ERD (Schema & Foreign Keys)',
  nodes: [
    {
      id: 'tbl-student-erd',
      name: 'tblStudentInfo',
      type: 'table',
      cluster: 'Academic',
      complexity: 12,
      loc: 65,
      risk: 'Critical',
      file: 'dbo.tblStudentInfo',
      upstream: [],
      downstream: [
        { id: 'tbl-subject-map-erd', name: 'tblStudentSubjectMapping', type: 'table' },
        { id: 'tbl-fee-coll-erd', name: 'tblFeesCollection', type: 'table' },
        { id: 'tbl-att-log-erd', name: 'tblAttendanceLog', type: 'table' }
      ],
      codeSnippet: 'TABLE tblStudentInfo (\n  StudentID INT PK,\n  AdmissionNo NVARCHAR(50) UNIQUE,\n  StudentName NVARCHAR(150),\n  ClassID INT FK,\n  SectionID INT FK\n)'
    },
    {
      id: 'tbl-subject-map-erd',
      name: 'tblStudentSubjectMapping',
      type: 'table',
      cluster: 'Academic',
      complexity: 8,
      loc: 45,
      risk: 'Medium',
      file: 'dbo.tblStudentSubjectMapping',
      upstream: [{ id: 'tbl-student-erd', name: 'tblStudentInfo', type: 'table' }],
      downstream: [],
      codeSnippet: 'TABLE tblStudentSubjectMapping (\n  MappingID INT PK,\n  StudentID INT FK -> tblStudentInfo,\n  SubjectID INT FK\n)'
    },
    {
      id: 'tbl-fee-coll-erd',
      name: 'tblFeesCollection',
      type: 'table',
      cluster: 'Accounts',
      complexity: 15,
      loc: 85,
      risk: 'High',
      file: 'dbo.tblFeesCollection',
      upstream: [{ id: 'tbl-student-erd', name: 'tblStudentInfo', type: 'table' }],
      downstream: [{ id: 'tbl-ledger-erd', name: 'tblAccountsLedger', type: 'table' }],
      codeSnippet: 'TABLE tblFeesCollection (\n  CollectionID INT PK,\n  StudentID INT FK -> tblStudentInfo,\n  AmountPaid DECIMAL(18,2),\n  PaidDate DATETIME\n)'
    },
    {
      id: 'tbl-att-log-erd',
      name: 'tblAttendanceLog',
      type: 'table',
      cluster: 'Attendance',
      complexity: 10,
      loc: 50,
      risk: 'Medium',
      file: 'dbo.tblAttendanceLog',
      upstream: [{ id: 'tbl-student-erd', name: 'tblStudentInfo', type: 'table' }],
      downstream: [],
      codeSnippet: 'TABLE tblAttendanceLog (\n  LogID BIGINT PK,\n  StudentID INT FK -> tblStudentInfo,\n  PunchTime DATETIME\n)'
    },
    {
      id: 'tbl-ledger-erd',
      name: 'tblAccountsLedger',
      type: 'table',
      cluster: 'Accounts',
      complexity: 14,
      loc: 70,
      risk: 'High',
      file: 'dbo.tblAccountsLedger',
      upstream: [{ id: 'tbl-fee-coll-erd', name: 'tblFeesCollection', type: 'table' }],
      downstream: [],
      codeSnippet: 'TABLE tblAccountsLedger (\n  EntryID INT PK,\n  Debit DECIMAL(18,2),\n  Credit DECIMAL(18,2)\n)'
    }
  ],
  edges: [
    { id: 'erd-1', source: 'tbl-student-erd', target: 'tbl-subject-map-erd', label: '1 : N (FK)' },
    { id: 'erd-2', source: 'tbl-student-erd', target: 'tbl-fee-coll-erd', label: '1 : N (FK)' },
    { id: 'erd-3', source: 'tbl-student-erd', target: 'tbl-att-log-erd', label: '1 : N (FK)' },
    { id: 'erd-4', source: 'tbl-fee-coll-erd', target: 'tbl-ledger-erd', label: 'generates' }
  ]
};

export const USER_JOURNEY_DATASET: GraphDataset = {
  viewId: 'user_journey',
  viewTitle: 'User Journey State Machine',
  nodes: [
    {
      id: 'uj-start',
      name: 'Portal Session Initiated',
      type: 'state',
      cluster: 'Academic',
      complexity: 5,
      loc: 50,
      risk: 'Low',
      upstream: [],
      downstream: [{ id: 'uj-admission-form', name: 'Student Admission Submission', type: 'state' }],
      codeSnippet: '// Session state initialization\nSession["IsAuthenticated"] = true;'
    },
    {
      id: 'uj-admission-form',
      name: 'Student Admission Submission',
      type: 'state',
      cluster: 'Academic',
      complexity: 25,
      loc: 450,
      risk: 'Medium',
      upstream: [{ id: 'uj-start', name: 'Portal Session Initiated', type: 'state' }],
      downstream: [{ id: 'uj-fee-pay', name: 'Fee Invoice Generation & Payment', type: 'state' }],
      codeSnippet: '// Form post\nStateTransition.MoveTo("PendingPayment");'
    },
    {
      id: 'uj-fee-pay',
      name: 'Fee Invoice Generation & Payment',
      type: 'state',
      cluster: 'Accounts',
      complexity: 35,
      loc: 600,
      risk: 'High',
      upstream: [{ id: 'uj-admission-form', name: 'Student Admission Submission', type: 'state' }],
      downstream: [{ id: 'uj-biometric', name: 'Biometric Enrollment & Card Issuance', type: 'state' }],
      codeSnippet: '// Online bKash payment execution\nPaymentService.ConfirmTrx(trxId);'
    },
    {
      id: 'uj-biometric',
      name: 'Biometric Enrollment & Card Issuance',
      type: 'state',
      cluster: 'Attendance',
      complexity: 20,
      loc: 300,
      risk: 'Medium',
      upstream: [{ id: 'uj-fee-pay', name: 'Fee Invoice Generation & Payment', type: 'state' }],
      downstream: [{ id: 'uj-complete', name: 'Full Enrolled Active State', type: 'state' }],
      codeSnippet: '// RFID Tag Registered\nStudentEnrollment.MarkActive(studentId);'
    },
    {
      id: 'uj-complete',
      name: 'Full Enrolled Active State',
      type: 'state',
      cluster: 'Academic',
      complexity: 5,
      loc: 80,
      risk: 'Low',
      upstream: [{ id: 'uj-biometric', name: 'Biometric Enrollment & Card Issuance', type: 'state' }],
      downstream: [],
      codeSnippet: '// Final completed state\nreturn StudentLifecycleStatus.Active;'
    }
  ],
  edges: [
    { id: 'uj-e1', source: 'uj-start', target: 'uj-admission-form', label: 'Enters Details' },
    { id: 'uj-e2', source: 'uj-admission-form', target: 'uj-fee-pay', label: 'Generates Fee' },
    { id: 'uj-e3', source: 'uj-fee-pay', target: 'uj-biometric', label: 'Payment Verified' },
    { id: 'uj-e4', source: 'uj-biometric', target: 'uj-complete', label: 'RFID Activated' }
  ]
};

export const DATASETS_MAP: Record<string, GraphDataset> = {
  form_dependency: FORM_DEPENDENCY_DATASET,
  database_erd: DATABASE_ERD_DATASET,
  user_journey: USER_JOURNEY_DATASET
};

export const ARCMORPH_PLATFORM_DATASET: GraphDataset = {
  viewId: 'form_dependency',
  viewTitle: 'ArcMorph Platform 2.0 Microservices Architecture',
  nodes: [
    {
      id: 'arcmorph-core',
      name: 'ArcMorph Core Platform',
      type: 'core',
      cluster: 'Core',
      complexity: 25,
      loc: 38400,
      risk: 'Low',
      file: 'arcmorph_web/src/App.tsx',
      upstream: [],
      downstream: [
        { id: 'frontend-spa', name: 'Vite React UI Shell', type: 'service' },
        { id: 'terminal-ipc', name: 'Master Terminal IPC', type: 'gateway' },
        { id: 'ocr-vault-engine', name: 'Universal OCR Engine', type: 'worker' }
      ],
      codeSnippet: '// ArcMorph Platform 2.0 Core\nexport const App: React.FC = () => {\n  return <AppProviders><AppRouter /></AppProviders>;\n};'
    },
    {
      id: 'frontend-spa',
      name: 'Vite React UI Shell (Paces Native)',
      type: 'service',
      cluster: 'Core',
      complexity: 30,
      loc: 18200,
      risk: 'Low',
      file: 'arcmorph_web/src/components/layout/AppLayout.tsx',
      upstream: [{ id: 'arcmorph-core', name: 'ArcMorph Core Platform', type: 'core' }],
      downstream: [
        { id: 'docker-container', name: 'Docker Container :3005:80', type: 'service' },
        { id: 'session-guard', name: 'Session Guard & PIN Lock', type: 'service' }
      ],
      codeSnippet: '<div className="wrapper"><Topbar /><Sidebar /><Outlet /><ThemeCustomizer /></div>'
    },
    {
      id: 'docker-container',
      name: 'Docker Web Container (project_arcmorph)',
      type: 'service',
      cluster: 'Infrastructure',
      complexity: 15,
      loc: 120,
      risk: 'Low',
      file: 'docker-compose.yml',
      upstream: [{ id: 'frontend-spa', name: 'Vite React UI Shell', type: 'service' }],
      downstream: [{ id: 'mongodb-nosql', name: 'MongoDB NoSQL Daemon', type: 'table' }],
      codeSnippet: 'ports: ["3005:80"]\nimage: arcmorph:web\ncontainer_name: project_arcmorph'
    },
    {
      id: 'mongodb-nosql',
      name: 'MongoDB NoSQL & Audit Logger',
      type: 'table',
      cluster: 'Database',
      complexity: 28,
      loc: 1400,
      risk: 'Low',
      file: 'arcmorph_web/src/context/AuthContext.tsx',
      upstream: [{ id: 'docker-container', name: 'Docker Web Container', type: 'service' }],
      downstream: [],
      codeSnippet: '// MongoDB NoSQL User & Permission Store\n{ _id: ObjectId("..."), username: "superadmin", permissions: ["*"] }'
    },
    {
      id: 'terminal-ipc',
      name: 'Master Terminal WebSocket IPC',
      type: 'gateway',
      cluster: 'Infrastructure',
      complexity: 42,
      loc: 2800,
      risk: 'Medium',
      file: 'arcmorph_web/src/pages/TerminalPage.tsx',
      upstream: [{ id: 'arcmorph-core', name: 'ArcMorph Core Platform', type: 'core' }],
      downstream: [
        { id: 'qwen-orchestrator', name: 'Qwen-2.5-3B Orchestrator', type: 'service' },
        { id: 'subagent-swarm', name: 'Subagent Swarm Workers', type: 'worker' }
      ],
      codeSnippet: 'const handleCommand = (cmd: string) => {\n  if (cmd.includes("morph")) spawnSubagents(targets);\n};'
    },
    {
      id: 'qwen-orchestrator',
      name: 'Qwen-2.5-3B Local Orchestrator',
      type: 'service',
      cluster: 'Core',
      complexity: 35,
      loc: 950,
      risk: 'Low',
      file: 'arcmorph_web/src/context/ModelContext.tsx',
      upstream: [{ id: 'terminal-ipc', name: 'Master Terminal IPC', type: 'gateway' }],
      downstream: [{ id: 'subagent-swarm', name: 'Subagent Swarm Workers', type: 'worker' }],
      codeSnippet: '// Local inference orchestrator\nendpoint: "http://localhost:11434/v1", context: "32k", vram: "4.2 GB"'
    },
    {
      id: 'subagent-swarm',
      name: 'Subagent Swarm (AST, Refactor, OCR)',
      type: 'worker',
      cluster: 'Core',
      complexity: 45,
      loc: 3600,
      risk: 'Medium',
      file: 'arcmorph_web/src/context/TaskContext.tsx',
      upstream: [{ id: 'qwen-orchestrator', name: 'Qwen-2.5-3B Orchestrator', type: 'service' }],
      downstream: [{ id: 'ocr-vault-engine', name: 'Universal OCR Engine', type: 'worker' }],
      codeSnippet: 'const subagents = ["AST-Parser", "Refactor-Agent", "OCR-Worker"];'
    },
    {
      id: 'ocr-vault-engine',
      name: 'Universal OCR Studio & Vault Storage',
      type: 'worker',
      cluster: 'Core',
      complexity: 32,
      loc: 4100,
      risk: 'Low',
      file: 'arcmorph_web/src/pages/OcrStudioPage.tsx',
      upstream: [{ id: 'arcmorph-core', name: 'ArcMorph Core Platform', type: 'core' }],
      downstream: [],
      codeSnippet: '// Hierarchical Vault Directory\nocr_vault/ocrproject_{id}/Stored/{index}/uploaded/'
    },
    {
      id: 'session-guard',
      name: 'Inactivity Lockout & PIN Daemon',
      type: 'service',
      cluster: 'Infrastructure',
      complexity: 18,
      loc: 820,
      risk: 'Low',
      file: 'arcmorph_web/src/context/SessionLockContext.tsx',
      upstream: [{ id: 'frontend-spa', name: 'Vite React UI Shell', type: 'service' }],
      downstream: [],
      codeSnippet: '// Continuous Background Task Guarantee\nif (idleTime > timeout) lockScreenWithoutStoppingTasks();'
    }
  ],
  edges: [
    { id: 'am-e1', source: 'arcmorph-core', target: 'frontend-spa', label: 'Mounts Shell' },
    { id: 'am-e2', source: 'arcmorph-core', target: 'terminal-ipc', label: 'Streams CLI' },
    { id: 'am-e3', source: 'arcmorph-core', target: 'ocr-vault-engine', label: 'Dispatches Files' },
    { id: 'am-e4', source: 'frontend-spa', target: 'docker-container', label: 'Runs In' },
    { id: 'am-e5', source: 'frontend-spa', target: 'session-guard', label: 'Monitors Activity' },
    { id: 'am-e6', source: 'docker-container', target: 'mongodb-nosql', label: 'Persists Logs' },
    { id: 'am-e7', source: 'terminal-ipc', target: 'qwen-orchestrator', label: 'Infers Intent' },
    { id: 'am-e8', source: 'qwen-orchestrator', target: 'subagent-swarm', label: 'Orchestrates' },
    { id: 'am-e9', source: 'subagent-swarm', target: 'ocr-vault-engine', label: 'Stores Output' }
  ]
};

export const PROJECT_TOPOLOGY_DATASETS: Record<string, Record<string, GraphDataset>> = {
  arcmorph: {
    form_dependency: ARCMORPH_PLATFORM_DATASET,
    database_erd: ARCMORPH_PLATFORM_DATASET,
    user_journey: ARCMORPH_PLATFORM_DATASET
  },
  bornomala: {
    form_dependency: FORM_DEPENDENCY_DATASET,
    database_erd: DATABASE_ERD_DATASET,
    user_journey: USER_JOURNEY_DATASET
  }
};
