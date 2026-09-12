import React from 'react';
import {
  FileSpreadsheet,
  GraduationCap,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  DollarSign,
  Layers,
  Sparkles
} from 'lucide-react';

interface ReportCanvasPreviewProps {
  fileName: string;
  metadata: any;
}

export const ReportCanvasPreview: React.FC<ReportCanvasPreviewProps> = ({
  fileName,
  metadata
}) => {
  const cleanName = fileName.replace(/\.rpt$/i, '').replace(/^rpt/i, '').replace(/([A-Z])/g, ' $1').trim() || 'ACADEMIC REPORT';
  const nameLower = fileName.toLowerCase();

  // Detect Archetype from metadata or filename
  const archetype: string = metadata?.reportArchetype || (() => {
    if (nameLower.includes('admitcard') || nameLower.includes('admit_card')) return 'admit_card';
    if (nameLower.includes('seatplan') || nameLower.includes('seat_plan')) return 'seat_plan';
    if (nameLower.includes('tebu') || nameLower.includes('tabulat')) return 'tabulation';
    if (nameLower.includes('attend') || nameLower.includes('att.') || nameLower.includes('attinfo') || nameLower.includes('studentatt')) return 'attendance';
    if (nameLower.includes('feereceipt') || nameLower.includes('feecollection') || nameLower.includes('moneyreceipt') || nameLower.includes('studentfeereceipt') || nameLower.includes('feevr') || nameLower.includes('dailycollection') || nameLower.includes('monthlyconfeecollection') || nameLower.includes('monthlyfeecollection') || nameLower.includes('monthlyheadfeecollection') || nameLower.includes('dailyfeecollection')) return 'fee_receipt';
    if (nameLower.includes('due') || nameLower.includes('feerule') || nameLower.includes('lessamount') || nameLower.includes('scholarship') || nameLower.includes('feestatus') || nameLower.includes('feepaid') || nameLower.includes('totalstudentfee')) return 'fee_due';
    if (nameLower.includes('routine')) return 'routine';
    if (nameLower.includes('subenroll') || nameLower.includes('subjectenroll') || nameLower.includes('subjectchoice') || nameLower.includes('singlesubenroll')) return 'subject_enroll';
    if (nameLower.includes('admission') || nameLower.includes('admited') || nameLower.includes('allstudentfigure') || nameLower.includes('allstudent') || nameLower.includes('allstuinfo') || nameLower === 'rptstudent.rpt' || nameLower.includes('singlestuadmission')) return 'admission';
    if (nameLower.includes('holiday')) return 'holiday';
    if (nameLower.includes('dept') || nameLower.includes('department') || nameLower.includes('section') || nameLower.includes('subject') || nameLower.includes('exammarks')) return 'master_setup';
    return 'transcript';
  })();

  const boundDataSetName = metadata?.boundDataSet?.schemaFileName || 'dsReport.xsd';
  const primaryTable = metadata?.boundDataSet?.dataTables?.[0];
  const schemaColumns: Array<{ name: string; type?: string; dataType?: string }> = primaryTable?.columns || [];

  return (
    <div className="d-flex flex-column gap-3">
      {/* Top Banner with Archetype Badge & Print Button */}
      <div className="d-flex align-items-center justify-content-between p-3 rounded-4 card border shadow-sm flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-indigo-100 text-indigo-800 font-monospace px-3 py-1.5 fs-12">
            Archetype: {archetype.toUpperCase().replace('_', ' ')}
          </span>
          <span className="badge bg-slate-100 text-slate-700 font-monospace border px-2.5 py-1.5 fs-12">
            Schema: {boundDataSetName} ({schemaColumns.length} Fields)
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button
            onClick={() => window.print()}
            className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fs-12 d-flex align-items-center gap-1.5"
          >
            <FileSpreadsheet size={13} />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* A4 PRINTABLE DOCUMENT CANVAS */}
      <div
        className="rpt-printable-canvas border rounded-4 shadow-lg mx-auto p-4 p-md-5 w-100 position-relative"
        style={{
          maxWidth: archetype === 'tabulation' || archetype === 'attendance' || archetype === 'routine' ? '1020px' : '840px',
          minHeight: '900px',
          fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
          color: '#1e293b',
          border: '1px solid #cbd5e1'
        }}
      >
        {/* Watermark */}
        <div
          className="position-absolute top-50 start-50 translate-middle pointer-events-none text-uppercase fw-bold text-slate-100 opacity-25 font-monospace text-center user-select-none"
          style={{ fontSize: '70px', transform: 'translate(-50%, -50%) rotate(-30deg)', zIndex: 0, letterSpacing: '8px' }}
        >
          BORNOMALA
        </div>

        <div className="position-relative" style={{ zIndex: 1 }}>
          {/* INSTITUTION LETTERHEAD */}
          <div className="text-center pb-3 border-bottom border-2 border-slate-800 mb-3">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-1">
              <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '48px', height: '48px', fontSize: '20px', background: '#1e3a8a' }}>
                🎓
              </div>
              <div className="text-start">
                <h4 className="fw-bolder text-slate-900 mb-0 font-monospace text-uppercase" style={{ letterSpacing: '1px', color: '#1e3a8a' }}>
                  BORNOMALA SCHOOL & COLLEGE
                </h4>
                <p className="fs-12 text-slate-600 mb-0">
                  South Banasree, Main Road, Dhaka-1219 | Tel: +880 1711-000000 | info@bornomalaschool.edu.bd
                </p>
              </div>
            </div>

            <div className="mt-2 py-1.5 px-4 bg-slate-900 text-white d-inline-block rounded-pill fw-bold fs-13 text-uppercase font-monospace shadow-sm" style={{ letterSpacing: '1.2px', background: '#0f172a' }}>
              {cleanName}
            </div>
            <div className="fs-12 fw-semibold text-slate-600 mt-1">
              ACADEMIC SESSION: 2025-2026 &nbsp;|&nbsp; SEMESTER: FINAL TERM
            </div>
          </div>

          {/* ========================================================
              ARCHETYPE 1: ADMIT CARD
          ======================================================== */}
          {archetype === 'admit_card' && (
            <div>
              {/* Student Demographics + Photo Box */}
              <div className="p-3 rounded-3 border mb-3 bg-slate-50 fs-12">
                <div className="row align-items-center">
                  <div className="col-md-9">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                          <span className="text-muted fw-semibold">Candidate Name:</span>
                          <strong className="text-slate-900">MD. ARIFUL ISLAM</strong>
                        </div>
                        <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                          <span className="text-muted fw-semibold">Student ID / Code:</span>
                          <strong className="font-monospace text-slate-900">STD-2026-0042</strong>
                        </div>
                        <div className="d-flex justify-content-between py-0.5">
                          <span className="text-muted fw-semibold">Class Roll No:</span>
                          <strong className="font-monospace text-slate-900">1001</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                          <span className="text-muted fw-semibold">Class & Group:</span>
                          <strong className="text-slate-900">Class Ten (X) - Science</strong>
                        </div>
                        <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                          <span className="text-muted fw-semibold">Section / Shift:</span>
                          <strong className="text-slate-900">Padma (A) - Morning</strong>
                        </div>
                        <div className="d-flex justify-content-between py-0.5">
                          <span className="text-muted fw-semibold">Examination Center:</span>
                          <strong className="text-slate-900">Main Campus (Building 2)</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="border rounded-3 p-2 bg-white d-inline-flex flex-column align-items-center justify-content-center shadow-sm" style={{ width: '85px', height: '100px', border: '1.5px dashed #94a3b8' }}>
                      <User size={36} className="text-slate-400 mb-1" />
                      <span className="fs-10 text-muted">Passport Photo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Subject Dates & Schedule Table */}
              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-12 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th style={{ width: '40px' }}>#</th>
                      <th style={{ width: '100px' }}>Subject Code</th>
                      <th className="text-start">Subject Title</th>
                      <th style={{ width: '120px' }}>Exam Date</th>
                      <th style={{ width: '110px' }}>Time Slot</th>
                      <th style={{ width: '120px' }}>Invigilator Sign</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-center">1</td><td className="text-center font-monospace">101</td><td className="fw-semibold">Bangla (Paper I & II)</td><td className="text-center">15-Oct-2026</td><td className="text-center">10:00 AM - 01:00 PM</td><td className="text-center"></td></tr>
                    <tr className="bg-slate-50"><td className="text-center">2</td><td className="text-center font-monospace">107</td><td className="fw-semibold">English (Paper I & II)</td><td className="text-center">18-Oct-2026</td><td className="text-center">10:00 AM - 01:00 PM</td><td className="text-center"></td></tr>
                    <tr><td className="text-center">3</td><td className="text-center font-monospace">109</td><td className="fw-semibold">Mathematics</td><td className="text-center">21-Oct-2026</td><td className="text-center">10:00 AM - 01:00 PM</td><td className="text-center"></td></tr>
                    <tr className="bg-slate-50"><td className="text-center">4</td><td className="text-center font-monospace">136</td><td className="fw-semibold">Physics (Theory + Practical)</td><td className="text-center">24-Oct-2026</td><td className="text-center">10:00 AM - 01:00 PM</td><td className="text-center"></td></tr>
                    <tr><td className="text-center">5</td><td className="text-center font-monospace">137</td><td className="fw-semibold">Chemistry (Theory + Practical)</td><td className="text-center">27-Oct-2026</td><td className="text-center">10:00 AM - 01:00 PM</td><td className="text-center"></td></tr>
                    <tr className="bg-slate-50"><td className="text-center">6</td><td className="text-center font-monospace">138</td><td className="fw-semibold">Biology (Theory + Practical)</td><td className="text-center">30-Oct-2026</td><td className="text-center">10:00 AM - 01:00 PM</td><td className="text-center"></td></tr>
                  </tbody>
                </table>
              </div>

              {/* Examination Rules Box */}
              <div className="p-3 rounded-3 border bg-slate-50 fs-11 text-slate-700 mb-4">
                <strong className="text-slate-900 d-block mb-1">CANDIDATE EXAMINATION RULES:</strong>
                <ol className="mb-0 ps-3">
                  <li>Candidates must carry this Admit Card & Student ID Card into the examination room.</li>
                  <li>Mobile phones, smartwatches, and unauthorized electronics are strictly prohibited.</li>
                  <li>Entry after 15 minutes of commencement is strictly disallowed.</li>
                </ol>
              </div>

              {/* Signatures */}
              <div className="row pt-4 text-center fs-12">
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Candidate Signature</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Class Teacher</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Controller of Examinations</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 2: SEAT PLAN / DESK SLIPS
          ======================================================== */}
          {archetype === 'seat_plan' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-700">
                ROOM NO: 302 &nbsp;|&nbsp; BUILDING 2 (ACADEMIC BLOCK) &nbsp;|&nbsp; BENCH CAPACITY: 2 CANDIDATES/BENCH
              </div>

              <div className="row g-3 mb-4">
                {[
                  { roll: '1001', name: 'MD. ARIFUL ISLAM', bench: 'Bench 01-A', shift: 'Morning' },
                  { roll: '1002', name: 'SUMAIYA AKTER', bench: 'Bench 01-B', shift: 'Morning' },
                  { roll: '1003', name: 'RAHIM HOSSAIN', bench: 'Bench 02-A', shift: 'Morning' },
                  { roll: '1004', name: 'TANVIR AHMED', bench: 'Bench 02-B', shift: 'Morning' },
                  { roll: '1005', name: 'NUSRAT JAHAN', bench: 'Bench 03-A', shift: 'Morning' },
                  { roll: '1006', name: 'MAHMUDUL HASAN', bench: 'Bench 03-B', shift: 'Morning' }
                ].map((slip, sIdx) => (
                  <div key={sIdx} className="col-6">
                    <div className="p-3 border-2 border-dashed rounded-3 bg-slate-50 text-center position-relative">
                      <span className="badge bg-indigo-600 text-white font-monospace position-absolute top-0 start-0 m-2 fs-10">{slip.bench}</span>
                      <small className="text-muted text-uppercase d-block mb-1">Bornomala Examination Seat Slip</small>
                      <h3 className="fw-bolder text-primary mb-0 font-monospace">ROLL: {slip.roll}</h3>
                      <strong className="fs-13 text-slate-900 d-block">{slip.name}</strong>
                      <span className="fs-11 text-slate-600">Class Ten (X) - Science (Section A)</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Hall In-Charge</div></div>
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Chief Invigilator</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 3: TABULATION SHEET (LANDSCAPE MASTER ROSTER)
          ======================================================== */}
          {archetype === 'tabulation' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-800">
                CLASS: TEN (X) &nbsp;|&nbsp; DEPT: SCIENCE &nbsp;|&nbsp; SECTION: PADMA (A) &nbsp;|&nbsp; EXAM: FINAL TERM 2026
              </div>

              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-11 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th style={{ width: '35px' }}>#</th>
                      <th style={{ width: '45px' }}>Roll</th>
                      <th className="text-start" style={{ width: '150px' }}>Student Name</th>
                      <th>Bangla (100)</th>
                      <th>English (100)</th>
                      <th>Math (100)</th>
                      <th>Physics (100)</th>
                      <th>Chemistry (100)</th>
                      <th>Biology (100)</th>
                      <th>Total</th>
                      <th>GPA</th>
                      <th>LG</th>
                      <th>Status</th>
                      <th>Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-center">1</td><td className="text-center font-monospace">1001</td><td className="fw-semibold">MD. ARIFUL ISLAM</td><td className="text-center">84 (A+)</td><td className="text-center">82 (A+)</td><td className="text-center">93 (A+)</td><td className="text-center">90 (A+)</td><td className="text-center">88 (A+)</td><td className="text-center">90 (A+)</td><td className="text-center fw-bold text-primary">527</td><td className="text-center font-monospace fw-bold">5.00</td><td className="text-center fw-bold text-success">A+</td><td className="text-center text-success fw-bold">PASSED</td><td className="text-center">1st</td></tr>
                    <tr className="bg-slate-50"><td className="text-center">2</td><td className="text-center font-monospace">1002</td><td className="fw-semibold">SUMAIYA AKTER</td><td className="text-center">80 (A+)</td><td className="text-center">85 (A+)</td><td className="text-center">91 (A+)</td><td className="text-center">86 (A+)</td><td className="text-center">84 (A+)</td><td className="text-center">88 (A+)</td><td className="text-center fw-bold text-primary">514</td><td className="text-center font-monospace fw-bold">5.00</td><td className="text-center fw-bold text-success">A+</td><td className="text-center text-success fw-bold">PASSED</td><td className="text-center">2nd</td></tr>
                    <tr><td className="text-center">3</td><td className="text-center font-monospace">1003</td><td className="fw-semibold">RAHIM HOSSAIN</td><td className="text-center">74 (A)</td><td className="text-center">78 (A)</td><td className="text-center">82 (A+)</td><td className="text-center">80 (A+)</td><td className="text-center">76 (A)</td><td className="text-center">82 (A+)</td><td className="text-center fw-bold text-primary">472</td><td className="text-center font-monospace fw-bold">4.67</td><td className="text-center fw-bold text-primary">A</td><td className="text-center text-success fw-bold">PASSED</td><td className="text-center">3rd</td></tr>
                    <tr className="bg-slate-50"><td className="text-center">4</td><td className="text-center font-monospace">1004</td><td className="fw-semibold">TANVIR AHMED</td><td className="text-center">70 (A)</td><td className="text-center">72 (A)</td><td className="text-center">75 (A)</td><td className="text-center">74 (A)</td><td className="text-center">70 (A)</td><td className="text-center">75 (A)</td><td className="text-center fw-bold text-primary">436</td><td className="text-center font-monospace fw-bold">4.00</td><td className="text-center fw-bold text-primary">A</td><td className="text-center text-success fw-bold">PASSED</td><td className="text-center">4th</td></tr>
                    <tr><td className="text-center">5</td><td className="text-center font-monospace">1005</td><td className="fw-semibold">NUSRAT JAHAN</td><td className="text-center">65 (A-)</td><td className="text-center">68 (A-)</td><td className="text-center">70 (A)</td><td className="text-center">66 (A-)</td><td className="text-center">64 (A-)</td><td className="text-center">70 (A)</td><td className="text-center fw-bold text-primary">403</td><td className="text-center font-monospace fw-bold">3.67</td><td className="text-center fw-bold text-info">A-</td><td className="text-center text-success fw-bold">PASSED</td><td className="text-center">5th</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Class Summary Statistics */}
              <div className="row g-2 mb-3 fs-11">
                <div className="col-3"><div className="p-2 border rounded-3 bg-slate-50 text-center"><small className="text-muted d-block">Appeared</small><strong className="fs-13">120 Students</strong></div></div>
                <div className="col-3"><div className="p-2 border rounded-3 bg-emerald-50 text-center"><small className="text-emerald-700 d-block">Passed (Pass Rate)</small><strong className="fs-13 text-emerald-800">118 (98.3%)</strong></div></div>
                <div className="col-3"><div className="p-2 border rounded-3 bg-rose-50 text-center"><small className="text-rose-700 d-block">Failed</small><strong className="fs-13 text-rose-800">2 Students</strong></div></div>
                <div className="col-3"><div className="p-2 border rounded-3 bg-indigo-50 text-center"><small className="text-indigo-700 d-block">GPA 5.0 (A+)</small><strong className="fs-13 text-indigo-800">38 Students</strong></div></div>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Prepared By (Tabulator)</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Checked & Verified By</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Headmaster / Principal</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 4: ATTENDANCE REGISTER
          ======================================================== */}
          {archetype === 'attendance' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-800">
                MONTH: SEPTEMBER 2026 &nbsp;|&nbsp; CLASS: TEN (X) - SECTION A &nbsp;|&nbsp; TOTAL WORKING DAYS: 22
              </div>

              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-11 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th>Roll</th>
                      <th className="text-start" style={{ width: '130px' }}>Student Name</th>
                      {Array.from({ length: 15 }, (_, i) => (
                        <th key={i} style={{ width: '22px' }}>{i + 1}</th>
                      ))}
                      <th>Pres</th>
                      <th>Abs</th>
                      <th>%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-center font-monospace">1001</td><td className="fw-semibold">MD. ARIFUL</td>{Array.from({ length: 15 }, (_, i) => <td key={i} className="text-center text-success fw-bold">P</td>)}<td className="text-center fw-bold">22</td><td className="text-center">0</td><td className="text-center text-success fw-bold">100%</td></tr>
                    <tr className="bg-slate-50"><td className="text-center font-monospace">1002</td><td className="fw-semibold">SUMAIYA AKTER</td>{Array.from({ length: 15 }, (_, i) => <td key={i} className={`text-center fw-bold ${i === 4 ? 'text-danger' : 'text-success'}`}>{i === 4 ? 'A' : 'P'}</td>)}<td className="text-center fw-bold">21</td><td className="text-center text-danger">1</td><td className="text-center text-primary fw-bold">95.4%</td></tr>
                    <tr><td className="text-center font-monospace">1003</td><td className="fw-semibold">RAHIM HOSSAIN</td>{Array.from({ length: 15 }, (_, i) => <td key={i} className="text-center text-success fw-bold">P</td>)}<td className="text-center fw-bold">22</td><td className="text-center">0</td><td className="text-center text-success fw-bold">100%</td></tr>
                    <tr className="bg-slate-50"><td className="text-center font-monospace">1004</td><td className="fw-semibold">TANVIR AHMED</td>{Array.from({ length: 15 }, (_, i) => <td key={i} className={`text-center fw-bold ${i === 2 || i === 8 ? 'text-warning' : 'text-success'}`}>{i === 2 || i === 8 ? 'L' : 'P'}</td>)}<td className="text-center fw-bold">20</td><td className="text-center text-warning">2</td><td className="text-center text-primary fw-bold">90.9%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Class Teacher Signature</div></div>
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Principal / Headmaster</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 5: FEE COLLECTION / MONEY RECEIPT
          ======================================================== */}
          {archetype === 'fee_receipt' && (
            <div>
              {/* 2-Part Synchronized Receipt Layout */}
              <div className="row g-3 mb-4">
                {['STUDENT COPY', 'OFFICE / BANK COPY'].map((copyTitle, cIdx) => (
                  <div key={cIdx} className="col-6">
                    <div className="p-3 border rounded-3 bg-slate-50">
                      <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                        <strong className="fs-12 text-slate-800 font-monospace">RECEIPT: VR-2026-8842</strong>
                        <span className="badge bg-indigo-100 text-indigo-800 fs-10">{copyTitle}</span>
                      </div>
                      <div className="fs-11 mb-2">
                        <div><strong>Student:</strong> MD. ARIFUL ISLAM (Roll: 1001)</div>
                        <div><strong>Class:</strong> Ten (X) - Science | Shift: Morning</div>
                        <div><strong>Date:</strong> 09-Sep-2026 | Mode: Cash</div>
                      </div>

                      <table className="table table-bordered table-sm fs-11 mb-2">
                        <thead className="table-light">
                          <tr><th>Fee Head</th><th className="text-end">Amount</th></tr>
                        </thead>
                        <tbody>
                          <tr><td>Monthly Tuition Fee</td><td className="text-end font-monospace">9,000.00</td></tr>
                          <tr><td>Semester Exam Fee</td><td className="text-end font-monospace">1,500.00</td></tr>
                          <tr><td>Science Lab Fee</td><td className="text-end font-monospace">1,000.00</td></tr>
                          <tr><td>Library Fund</td><td className="text-end font-monospace">800.00</td></tr>
                        </tbody>
                        <tfoot className="fw-bold">
                          <tr><td>Total Paid:</td><td className="text-end font-monospace text-success">12,300.00 Tk</td></tr>
                        </tfoot>
                      </table>

                      <div className="fs-10 text-muted mb-3 fst-italic">In Words: Twelve Thousand Three Hundred Taka Only</div>
                      <div className="d-flex justify-content-between pt-3 border-top fs-11">
                        <span>Student / Depositor</span>
                        <span className="fw-bold">Authorized Cashier</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 6: FEE DUE / SCHOLARSHIP LEDGER
          ======================================================== */}
          {archetype === 'fee_due' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-800">
                STUDENT FEE DUE / CONCESSION & SCHOLARSHIP LEDGER &nbsp;|&nbsp; CLASS TEN (X)
              </div>

              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-12 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th style={{ width: '40px' }}>#</th>
                      <th>Student ID</th>
                      <th>Roll</th>
                      <th className="text-start">Student Name</th>
                      <th>Class & Section</th>
                      <th>Due Months</th>
                      <th>Total Billed</th>
                      <th>Waiver / Scholar</th>
                      <th>Net Outstanding</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-center">1</td><td className="font-monospace">STD-0042</td><td className="text-center font-monospace">1001</td><td className="fw-semibold">MD. ARIFUL ISLAM</td><td className="text-center">X - A</td><td className="text-center">None</td><td className="text-end font-monospace">12,500.00</td><td className="text-end font-monospace">0.00</td><td className="text-end font-monospace text-success fw-bold">0.00</td><td className="text-center"><span className="badge bg-success">Cleared</span></td></tr>
                    <tr className="bg-slate-50"><td className="text-center">2</td><td className="font-monospace">STD-0045</td><td className="text-center font-monospace">1004</td><td className="fw-semibold">TANVIR AHMED</td><td className="text-center">X - A</td><td className="text-center text-danger">Aug, Sep</td><td className="text-end font-monospace">12,500.00</td><td className="text-end font-monospace">500.00</td><td className="text-end font-monospace text-danger fw-bold">3,500.00</td><td className="text-center"><span className="badge bg-danger">Due</span></td></tr>
                    <tr><td className="text-center">3</td><td className="font-monospace">STD-0050</td><td className="text-center font-monospace">1009</td><td className="fw-semibold">KAMRUL HASAN</td><td className="text-center">X - A</td><td className="text-center text-danger">Sep</td><td className="text-end font-monospace">12,500.00</td><td className="text-end font-monospace">0.00</td><td className="text-end font-monospace text-danger fw-bold">1,800.00</td><td className="text-center"><span className="badge bg-danger">Due</span></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Accounts Officer</div></div>
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Headmaster / Principal</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 7: CLASS ROUTINE & TIMETABLE
          ======================================================== */}
          {archetype === 'routine' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-800">
                CLASS: TEN (X) - SCIENCE &nbsp;|&nbsp; SECTION: PADMA (A) &nbsp;|&nbsp; ROOM NO: 302
              </div>

              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-11 mb-0 align-middle text-center">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr>
                      <th style={{ width: '90px' }}>Day</th>
                      <th>Period 1<br/><small>(08:30-09:15)</small></th>
                      <th>Period 2<br/><small>(09:15-10:00)</small></th>
                      <th>Period 3<br/><small>(10:00-10:45)</small></th>
                      <th style={{ width: '60px', background: '#d97706' }}>Tiffin<br/><small>(10:45-11:15)</small></th>
                      <th>Period 4<br/><small>(11:15-12:00)</small></th>
                      <th>Period 5<br/><small>(12:00-12:45)</small></th>
                      <th>Period 6<br/><small>(12:45-01:30)</small></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold bg-slate-100">Saturday</td><td>Bangla<br/><small className="text-muted">(MRK)</small></td><td>English<br/><small className="text-muted">(SAH)</small></td><td>Math<br/><small className="text-muted">(AZH)</small></td><td rowSpan={6} className="bg-amber-100 fw-bold text-amber-900 align-middle">B<br/>R<br/>E<br/>A<br/>K</td><td>Physics<br/><small className="text-muted">(TNA)</small></td><td>Chemistry<br/><small className="text-muted">(RKB)</small></td><td>ICT Lab<br/><small className="text-muted">(MNH)</small></td></tr>
                    <tr className="bg-slate-50"><td className="fw-bold bg-slate-100">Sunday</td><td>Math<br/><small className="text-muted">(AZH)</small></td><td>Physics<br/><small className="text-muted">(TNA)</small></td><td>Chemistry<br/><small className="text-muted">(RKB)</small></td><td>Biology<br/><small className="text-muted">(FHK)</small></td><td>Bangla<br/><small className="text-muted">(MRK)</small></td><td>English<br/><small className="text-muted">(SAH)</small></td></tr>
                    <tr><td className="fw-bold bg-slate-100">Monday</td><td>English<br/><small className="text-muted">(SAH)</small></td><td>Math<br/><small className="text-muted">(AZH)</small></td><td>Biology<br/><small className="text-muted">(FHK)</small></td><td>Physics<br/><small className="text-muted">(TNA)</small></td><td>Higher Math<br/><small className="text-muted">(AZH)</small></td><td>Religion<br/><small className="text-muted">(ABM)</small></td></tr>
                    <tr className="bg-slate-50"><td className="fw-bold bg-slate-100">Tuesday</td><td>Physics Lab<br/><small className="text-muted">(TNA)</small></td><td>Chem Lab<br/><small className="text-muted">(RKB)</small></td><td>Bangla<br/><small className="text-muted">(MRK)</small></td><td>English<br/><small className="text-muted">(SAH)</small></td><td>Math<br/><small className="text-muted">(AZH)</small></td><td>Social Science<br/><small className="text-muted">(SRA)</small></td></tr>
                    <tr><td className="fw-bold bg-slate-100">Wednesday</td><td>Chemistry<br/><small className="text-muted">(RKB)</small></td><td>Biology<br/><small className="text-muted">(FHK)</small></td><td>Higher Math<br/><small className="text-muted">(AZH)</small></td><td>Bangla<br/><small className="text-muted">(MRK)</small></td><td>English<br/><small className="text-muted">(SAH)</small></td><td>Physical Edu<br/><small className="text-muted">(KML)</small></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Routine Committee Convener</div></div>
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Headmaster / Principal</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 8: STUDENT SUBJECT CHOICE / ENROLLMENT
          ======================================================== */}
          {archetype === 'subject_enroll' && (
            <div>
              <div className="p-3 rounded-3 border mb-3 bg-slate-50 fs-12">
                <div className="row g-2">
                  <div className="col-6">
                    <div><strong>Student Name:</strong> MD. ARIFUL ISLAM</div>
                    <div><strong>Student ID:</strong> STD-2026-0042</div>
                    <div><strong>Class Roll:</strong> 1001</div>
                  </div>
                  <div className="col-6">
                    <div><strong>Academic Stream:</strong> Science Stream</div>
                    <div><strong>Class & Shift:</strong> Class Ten (X) - Morning</div>
                    <div><strong>Registration Date:</strong> 09-Sep-2026</div>
                  </div>
                </div>
              </div>

              <div className="card border p-3 mb-3 bg-white">
                <h6 className="fw-bold text-slate-800 border-bottom pb-2 mb-2">1. COMPULSORY SUBJECTS (MANDATORY)</h6>
                <div className="d-flex flex-wrap gap-2 fs-12">
                  <span className="badge bg-slate-100 text-slate-800 border p-2">101 - Bangla (1st & 2nd)</span>
                  <span className="badge bg-slate-100 text-slate-800 border p-2">107 - English (1st & 2nd)</span>
                  <span className="badge bg-slate-100 text-slate-800 border p-2">109 - Mathematics</span>
                  <span className="badge bg-slate-100 text-slate-800 border p-2">154 - ICT</span>
                </div>

                <h6 className="fw-bold text-slate-800 border-bottom pb-2 mb-2 mt-3">2. MAIN ELECTIVE SUBJECTS</h6>
                <div className="d-flex flex-wrap gap-2 fs-12">
                  <span className="badge bg-blue-50 text-blue-800 border border-blue-200 p-2">136 - Physics</span>
                  <span className="badge bg-blue-50 text-blue-800 border border-blue-200 p-2">137 - Chemistry</span>
                  <span className="badge bg-blue-50 text-blue-800 border border-blue-200 p-2">138 - Biology</span>
                </div>

                <h6 className="fw-bold text-slate-800 border-bottom pb-2 mb-2 mt-3">3. OPTIONAL (4TH) SUBJECT CHOICE</h6>
                <div className="p-2.5 rounded-3 bg-emerald-50 border border-emerald-200 fs-12">
                  <strong>Selected 4th Subject:</strong> <span className="text-emerald-800 font-monospace fw-bold ms-2">126 - HIGHER MATHEMATICS</span>
                </div>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Student Signature</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Guardian Approval</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1 fw-bold">Principal Approval</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 9: ADMISSION DOSSIER / STUDENT PROFILE
          ======================================================== */}
          {archetype === 'admission' && (
            <div>
              <div className="p-3 rounded-3 border mb-3 bg-slate-50 fs-12">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h5 className="fw-bold text-dark mb-1">STUDENT ADMISSION BIO-DATA</h5>
                    <div className="row g-2">
                      <div className="col-6">
                        <div><strong>Full Name:</strong> MD. ARIFUL ISLAM</div>
                        <div><strong>Date of Birth:</strong> 14-Aug-2010</div>
                        <div><strong>Gender / Blood:</strong> Male | B+ (Positive)</div>
                      </div>
                      <div className="col-6">
                        <div><strong>Enrolled Class:</strong> Class Ten (X)</div>
                        <div><strong>Admission Roll:</strong> 1001 (Section A)</div>
                        <div><strong>Session:</strong> 2025-2026</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 text-center">
                    <div className="border rounded-3 p-2 bg-white d-inline-flex flex-column align-items-center justify-content-center shadow-sm" style={{ width: '85px', height: '100px' }}>
                      <User size={36} className="text-slate-400 mb-1" />
                      <span className="fs-10 text-muted">Photo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border p-3 mb-3 bg-white fs-12">
                <h6 className="fw-bold text-slate-800 border-bottom pb-1 mb-2">PARENT & GUARDIAN INFORMATION</h6>
                <div className="row g-2 mb-2">
                  <div className="col-6"><strong>Father's Name:</strong> Md. Rafiqul Islam (NID: 1980269251000)</div>
                  <div className="col-6"><strong>Mother's Name:</strong> Salma Begum (NID: 1984269251000)</div>
                  <div className="col-6"><strong>Guardian Mobile:</strong> +880 1711-000000</div>
                  <div className="col-6"><strong>Emergency Contact:</strong> +880 1819-000000</div>
                </div>

                <h6 className="fw-bold text-slate-800 border-bottom pb-1 mb-2 mt-2">RESIDENTIAL ADDRESS</h6>
                <div><strong>Present Address:</strong> House 42, Road 05, South Banasree, Dhaka-1219</div>
                <div><strong>Permanent Address:</strong> Vill: Joypur, P.O: Chandpur, Dist: Comilla</div>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Guardian Signature</div></div>
                <div className="col-6"><div className="border-top border-dark pt-1 fw-bold">Admission Officer / Principal</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 10: HOLIDAY CALENDAR
          ======================================================== */}
          {archetype === 'holiday' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-800">
                ANNUAL ACADEMIC HOLIDAY & EVENT CALENDAR &nbsp;|&nbsp; YEAR 2026
              </div>

              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-12 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th style={{ width: '40px' }}>#</th>
                      <th className="text-start">Holiday / Occasion Title</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Total Days</th>
                      <th>Day of Week</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-center">1</td><td className="fw-semibold">International Mother Language Day</td><td className="text-center">21-Feb-2026</td><td className="text-center">21-Feb-2026</td><td className="text-center fw-bold">1 Day</td><td className="text-center">Saturday</td><td className="text-center"><span className="badge bg-primary">National</span></td></tr>
                    <tr className="bg-slate-50"><td className="text-center">2</td><td className="fw-semibold">Independence & National Day</td><td className="text-center">26-Mar-2026</td><td className="text-center">26-Mar-2026</td><td className="text-center fw-bold">1 Day</td><td className="text-center">Thursday</td><td className="text-center"><span className="badge bg-primary">National</span></td></tr>
                    <tr><td className="text-center">3</td><td className="fw-semibold">Holy Shab-e-Qadr & Eid-ul-Fitr Vacation</td><td className="text-center">18-Apr-2026</td><td className="text-center">26-Apr-2026</td><td className="text-center fw-bold">9 Days</td><td className="text-center">Sat - Sun</td><td className="text-center"><span className="badge bg-success">Religious</span></td></tr>
                    <tr className="bg-slate-50"><td className="text-center">4</td><td className="fw-semibold">Summer Vacation & Eid-ul-Adha</td><td className="text-center">15-Jun-2026</td><td className="text-center">25-Jun-2026</td><td className="text-center fw-bold">11 Days</td><td className="text-center">Mon - Thu</td><td className="text-center"><span className="badge bg-warning text-dark">Institutional</span></td></tr>
                    <tr><td className="text-center">5</td><td className="fw-semibold">Victory Day</td><td className="text-center">16-Dec-2026</td><td className="text-center">16-Dec-2026</td><td className="text-center fw-bold">1 Day</td><td className="text-center">Wednesday</td><td className="text-center"><span className="badge bg-primary">National</span></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-12"><div className="border-top border-dark pt-1 fw-bold d-inline-block px-5">Headmaster / Principal</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 11: MASTER SETUP DIRECTORY
          ======================================================== */}
          {archetype === 'master_setup' && (
            <div>
              <div className="p-2 mb-3 bg-slate-100 rounded-3 text-center fs-12 fw-bold text-slate-800">
                ADMINISTRATIVE MASTER CONFIGURATION DIRECTORY &nbsp;|&nbsp; BORNOMALA EDUCATION SYSTEMS
              </div>

              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-12 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th style={{ width: '40px' }}>#</th>
                      {schemaColumns.length > 0 ? (
                        schemaColumns.slice(0, 6).map((c, idx) => (
                          <th key={idx} className="text-start">{c.name}</th>
                        ))
                      ) : (
                        <>
                          <th className="text-start">Master Code</th>
                          <th className="text-start">Configuration Title</th>
                          <th>Capacity / Stream</th>
                          <th>Created Date</th>
                          <th>Status</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="font-monospace">CFG-001</td>
                      <td className="fw-semibold">{cleanName} - Master Node A</td>
                      <td className="text-center">Morning Shift</td>
                      <td className="text-center">Active</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="text-center">2</td>
                      <td className="font-monospace">CFG-002</td>
                      <td className="fw-semibold">{cleanName} - Master Node B</td>
                      <td className="text-center">Day Shift</td>
                      <td className="text-center">Active</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td className="font-monospace">CFG-003</td>
                      <td className="fw-semibold">{cleanName} - Master Node C</td>
                      <td className="text-center">Combined Shift</td>
                      <td className="text-center">Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="row pt-4 text-center fs-12">
                <div className="col-12"><div className="border-top border-dark pt-1 fw-bold d-inline-block px-5">System Administrator / Registrar</div></div>
              </div>
            </div>
          )}

          {/* ========================================================
              ARCHETYPE 12: ACADEMIC TRANSCRIPT / GRADE REPORT (DEFAULT)
          ======================================================== */}
          {archetype === 'transcript' && (
            <div>
              {/* Student Demographics Grid */}
              <div className="p-3 rounded-3 border mb-3 bg-slate-50 fs-12">
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                      <span className="text-muted fw-semibold">Student Name:</span>
                      <strong className="text-slate-900">MD. ARIFUL ISLAM</strong>
                    </div>
                    <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                      <span className="text-muted fw-semibold">Student ID / Code:</span>
                      <strong className="font-monospace text-slate-900">STD-2026-0042</strong>
                    </div>
                    <div className="d-flex justify-content-between py-0.5">
                      <span className="text-muted fw-semibold">Class Roll No:</span>
                      <strong className="font-monospace text-slate-900">1001</strong>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                      <span className="text-muted fw-semibold">Class & Group:</span>
                      <strong className="text-slate-900">Class Ten (X) - Science</strong>
                    </div>
                    <div className="d-flex justify-content-between py-0.5 border-bottom border-slate-200">
                      <span className="text-muted fw-semibold">Section / Shift:</span>
                      <strong className="text-slate-900">Padma (A) - Morning</strong>
                    </div>
                    <div className="d-flex justify-content-between py-0.5">
                      <span className="text-muted fw-semibold">Date of Evaluation:</span>
                      <strong className="text-slate-900">09-Sep-2026</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marks Evaluation Table */}
              <div className="table-responsive mb-3 border rounded-3 overflow-hidden">
                <table className="table table-bordered table-sm fs-12 mb-0 align-middle">
                  <thead style={{ background: '#1e3a8a', color: '#ffffff' }}>
                    <tr className="text-center">
                      <th style={{ width: '35px' }}>#</th>
                      <th className="text-start">Subject Name</th>
                      <th>Sub Max</th>
                      <th>Obj Max</th>
                      <th>Prac Max</th>
                      <th>Total Max</th>
                      <th>Obt Sub</th>
                      <th>Obt Obj</th>
                      <th>Obt Prac</th>
                      <th>Total Marks</th>
                      <th>GP</th>
                      <th>LG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-center">1</td><td className="fw-semibold">101 - Bangla (1st & 2nd)</td><td className="text-center">70</td><td className="text-center">30</td><td className="text-center">-</td><td className="text-center fw-bold">100</td><td className="text-center">58</td><td className="text-center">26</td><td className="text-center">-</td><td className="text-center fw-bold text-primary">84</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                    <tr className="bg-slate-50"><td className="text-center">2</td><td className="fw-semibold">107 - English (1st & 2nd)</td><td className="text-center">100</td><td className="text-center">-</td><td className="text-center">-</td><td className="text-center fw-bold">100</td><td className="text-center">82</td><td className="text-center">-</td><td className="text-center">-</td><td className="text-center fw-bold text-primary">82</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                    <tr><td className="text-center">3</td><td className="fw-semibold">109 - Mathematics</td><td className="text-center">70</td><td className="text-center">30</td><td className="text-center">-</td><td className="text-center fw-bold">100</td><td className="text-center">65</td><td className="text-center">28</td><td className="text-center">-</td><td className="text-center fw-bold text-primary">93</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                    <tr className="bg-slate-50"><td className="text-center">4</td><td className="fw-semibold">136 - Physics (Theory + Lab)</td><td className="text-center">50</td><td className="text-center">25</td><td className="text-center">25</td><td className="text-center fw-bold">100</td><td className="text-center">44</td><td className="text-center">22</td><td className="text-center">24</td><td className="text-center fw-bold text-primary">90</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                    <tr><td className="text-center">5</td><td className="fw-semibold">137 - Chemistry (Theory + Lab)</td><td className="text-center">50</td><td className="text-center">25</td><td className="text-center">25</td><td className="text-center fw-bold">100</td><td className="text-center">42</td><td className="text-center">23</td><td className="text-center">23</td><td className="text-center fw-bold text-primary">88</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                    <tr className="bg-slate-50"><td className="text-center">6</td><td className="fw-semibold">138 - Biology (Theory + Lab)</td><td className="text-center">50</td><td className="text-center">25</td><td className="text-center">25</td><td className="text-center fw-bold">100</td><td className="text-center">45</td><td className="text-center">21</td><td className="text-center">24</td><td className="text-center fw-bold text-primary">90</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                    <tr><td className="text-center">7</td><td className="fw-semibold">126 - Higher Math (4th Subject)</td><td className="text-center">50</td><td className="text-center">25</td><td className="text-center">25</td><td className="text-center fw-bold">100</td><td className="text-center">46</td><td className="text-center">24</td><td className="text-center">24</td><td className="text-center fw-bold text-primary">94</td><td className="text-center font-monospace">5.00</td><td className="text-center fw-bold text-success">A+</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Performance Metrics Summary */}
              <div className="row g-2 mb-3">
                <div className="col-3"><div className="p-2.5 rounded-3 border bg-slate-50 text-center"><small className="text-muted d-block fs-11">Grand Total Marks</small><strong className="fs-15 text-slate-900 font-monospace">621 / 700</strong></div></div>
                <div className="col-3"><div className="p-2.5 rounded-3 border bg-emerald-50 border-emerald-200 text-center"><small className="text-emerald-700 d-block fs-11 fw-semibold">Cumulative GPA</small><strong className="fs-15 text-emerald-800 font-monospace">5.00 (A+)</strong></div></div>
                <div className="col-3"><div className="p-2.5 rounded-3 border bg-indigo-50 border-indigo-200 text-center"><small className="text-indigo-700 d-block fs-11 fw-semibold">Class Merit Rank</small><strong className="fs-15 text-indigo-800 font-monospace">1st (Out of 120)</strong></div></div>
                <div className="col-3"><div className="p-2.5 rounded-3 border bg-slate-50 text-center"><small className="text-muted d-block fs-11">Attendance Rate</small><strong className="fs-15 text-slate-900 font-monospace">214 / 220 (97.3%)</strong></div></div>
              </div>

              {/* Grading Legend */}
              <div className="p-2 rounded-3 border bg-slate-50 mb-4 text-center fs-11">
                <span className="fw-bold text-slate-700 me-2">Grading System (GPA 5.0 Scale):</span>
                <span className="badge bg-slate-200 text-slate-800 me-1">80-100: A+ (5.0)</span>
                <span className="badge bg-slate-200 text-slate-800 me-1">70-79: A (4.0)</span>
                <span className="badge bg-slate-200 text-slate-800 me-1">60-69: A- (3.5)</span>
                <span className="badge bg-slate-200 text-slate-800 me-1">50-59: B (3.0)</span>
                <span className="badge bg-slate-200 text-slate-800 me-1">40-49: C (2.0)</span>
                <span className="badge bg-slate-200 text-slate-800 me-1">33-39: D (1.0)</span>
                <span className="badge bg-danger-subtle text-danger">0-32: F (0.0)</span>
              </div>

              {/* Signatures */}
              <div className="row pt-4 text-center fs-12">
                <div className="col-4"><div className="border-top border-dark pt-1.5 fw-bold text-slate-800">Class Teacher</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1.5 fw-bold text-slate-800">Guardian's Signature</div></div>
                <div className="col-4"><div className="border-top border-dark pt-1.5 fw-bold text-slate-800">Headmaster / Principal</div></div>
              </div>
            </div>
          )}

          {/* DOCUMENT FOOTER */}
          <div className="d-flex justify-content-between align-items-center pt-3 mt-3 border-top text-muted fs-11">
            <span>Printed: 09-Sep-2026 05:25 AM | Token: CRT-EDU-2026</span>
            <span>Copyright © Creatrix - Bornomala Education Systems</span>
            <span>Page 1 of 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
