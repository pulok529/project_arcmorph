import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';

interface AgentDialogue {
  agent: 'Architect' | 'Critic' | 'System';
  avatarColor: string;
  role: string;
  message: string;
  timestamp: string;
}

export const AiStudioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'langgraph' | 'autogen' | 'llamaindex'>('langgraph');
  const [searchRAG, setSearchRAG] = useState('How does student fee calculation handle multi-session concession rules?');

  const [activeLangGraphNode, setActiveLangGraphNode] = useState<string>('Code Builder');

  const dialogues: AgentDialogue[] = [
    {
      agent: 'Architect',
      avatarColor: '#00f2fe',
      role: 'Modernization Architect Agent (Qwen 2.5 Coder)',
      message: 'Proposing decomposition of tbl_StudentAdmissionPage.aspx code-behind into a dedicated CreateStudentAdmissionCommand with MediatR CQRS pipeline. Decoupling direct ADO.NET SQL queries into a transactional EF Core repository.',
      timestamp: '18:14:02'
    },
    {
      agent: 'Critic',
      avatarColor: '#f59e0b',
      role: 'Security & Integrity Critic Agent (Llama 3.3 70B)',
      message: 'CRITICAL AUDIT: In legacy DB, admission number generation uses MAX(AdmissionNo)+1 without pessimistic table locking. Under concurrent admissions, duplicate keys will occur. Must wrap in isolation level Serializable or database sequence.',
      timestamp: '18:14:15'
    },
    {
      agent: 'Architect',
      avatarColor: '#00f2fe',
      role: 'Modernization Architect Agent',
      message: 'Agreed. Updating the EF Core specification to utilize MS SQL 2022 SEQUENCE dbo.Seq_StudentAdmissionNo with NEXT VALUE FOR syntax. Also adding an idempotency token to prevent duplicate form submissions.',
      timestamp: '18:14:31'
    },
    {
      agent: 'Critic',
      avatarColor: '#10b981',
      role: 'Security & Integrity Critic Agent',
      message: 'Consensus achieved. Sequence verified. Concurrency risk mitigated. Ready to advance to the Playwright Visual Test Gate.',
      timestamp: '18:14:48'
    }
  ];

  const ragRules = [
    {
      domain: 'Fee Management',
      ruleId: 'BR-FEE-042',
      confidence: '99.4%',
      extractedFrom: 'FeeCollectionEntryPage.aspx.cs:L240-310',
      rule: 'If student has sibling waiver (tbl_StudentProfile.SiblingDiscountId IS NOT NULL) and payment date <= 10th of current month, apply 15% tuition deduction before calculating late fine.'
    },
    {
      domain: 'Admissions & Roll',
      ruleId: 'BR-ADM-018',
      confidence: '98.8%',
      extractedFrom: 'StudentAdmissionPage.aspx.cs:L88-142',
      rule: 'Section capacity is capped at 45. When Class has multiple groups (Science/Arts), Section allocation must restrict group matching according to tbl_SectionMapping.'
    },
    {
      domain: 'Exam Grading',
      ruleId: 'BR-EXAM-091',
      confidence: '99.7%',
      extractedFrom: 'ExamMarkEntryPage.aspx.cs:L512-580',
      rule: 'Continuous Assessment (CA 30%) and Term Final (70%) must individually reach 33% threshold before letter grade calculation (A+, A, A-, B, C, F).'
    }
  ];

  return (
    <div className="container-fluid pb-5">
      <PageHeader
        title="Multi-Agent AI Studio"
        category="Autonomous Synthesis Engine"
        breadcrumbs={[{ label: 'Home' }, { label: 'AI Studio', active: true }]}
      />

      {/* Studio Navigation Tabs */}
      <div className="card border-0 shadow-sm mb-4" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
        <div className="card-body p-2 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <ul className="nav nav-pills gap-2">
            <li className="nav-item">
              <button
                className={`btn btn-sm ${activeTab === 'langgraph' ? 'btn-info text-dark fw-bold' : 'btn-outline-secondary'}`}
                onClick={() => setActiveTab('langgraph')}
              >
                <i className="ti ti-sitemap me-1"></i> LangGraph State Machine
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-sm ${activeTab === 'autogen' ? 'btn-info text-dark fw-bold' : 'btn-outline-secondary'}`}
                onClick={() => setActiveTab('autogen')}
              >
                <i className="ti ti-users me-1"></i> AutoGen Peer Review Arena
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-sm ${activeTab === 'llamaindex' ? 'btn-info text-dark fw-bold' : 'btn-outline-secondary'}`}
                onClick={() => setActiveTab('llamaindex')}
              >
                <i className="ti ti-search me-1"></i> LlamaIndex AST RAG Ground-Truth
              </button>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 fs-12 text-muted">
            <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
              <i className="ti ti-plug me-1"></i> Multi-Model Router Active
            </span>
          </div>
        </div>
      </div>

      {/* Tab 1: LangGraph State Machine Visualizer */}
      {activeTab === 'langgraph' && (
        <div className="card border-0 shadow-sm" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
          <div className="card-header bg-transparent border-bottom border-dark py-3">
            <h5 className="card-title text-light mb-1">Autonomous Modernization State Graph</h5>
            <p className="fs-12 text-muted mb-0">Dynamic cyclic multi-agent graph with automated test healing loops</p>
          </div>
          <div className="card-body p-4">
            <div className="row g-3 justify-content-center text-center">
              {[
                { title: '1. Cartographer Agent', desc: 'AST Syntax Crawler & Schema Miner', icon: 'ti-map', active: activeLangGraphNode === 'Cartographer' },
                { title: '2. Code Builder Agent', desc: 'CQRS & React 19 Synthesizer', icon: 'ti-code', active: activeLangGraphNode === 'Code Builder' },
                { title: '3. Test Gate Agent', desc: 'Playwright Vision & Parity Inspector', icon: 'ti-shield-check', active: activeLangGraphNode === 'Test Gate' },
                { title: '4. Compiler Healer Agent', desc: 'Self-Correction & Refactoring Loop', icon: 'ti-sparkles', active: activeLangGraphNode === 'Compiler Healer' }
              ].map((node, i) => (
                <div key={i} className="col-md-6 col-xl-3">
                  <div
                    onClick={() => setActiveLangGraphNode(node.title.split('. ')[1])}
                    className="p-4 rounded-3 h-100 transition-all cursor-pointer"
                    style={{
                      background: node.active ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: node.active ? '2px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: node.active ? '0 0 20px rgba(0, 242, 254, 0.2)' : 'none'
                    }}
                  >
                    <div className="avatar-md mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ background: node.active ? '#00f2fe' : '#334155', color: node.active ? '#0b0f19' : '#fff', width: 50, height: 50 }}>
                      <i className={`ti ${node.icon} fs-24`}></i>
                    </div>
                    <h6 className="fw-bold text-light mb-1">{node.title}</h6>
                    <p className="fs-12 text-muted mb-2">{node.desc}</p>
                    <span className={`badge ${node.active ? 'bg-info text-dark' : 'bg-dark border border-secondary text-muted'} fs-11`}>
                      {node.active ? 'Active Execution Node' : 'Idle / Standby'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* State Loop Details */}
            <div className="mt-4 p-3 rounded bg-dark border border-secondary">
              <h6 className="text-light fw-bold fs-13 mb-2 d-flex align-items-center gap-2">
                <i className="ti ti-refresh text-info"></i> Active Loop Specification: {activeLangGraphNode}
              </h6>
              <p className="fs-12 text-muted mb-0">
                The {activeLangGraphNode} continuously verifies that no legacy ADO.NET SQL calls leak into presentation layers. If a Playwright UI test fails or layout collisions occur, execution loops back to the Compiler Healer with the visual bounding box coordinates for autonomous correction.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AutoGen Peer Review Arena */}
      {activeTab === 'autogen' && (
        <div className="card border-0 shadow-sm" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
          <div className="card-header bg-transparent border-bottom border-dark py-3 d-flex align-items-center justify-content-between">
            <div>
              <h5 className="card-title text-light mb-1">AutoGen Multi-Agent Consensus Arena</h5>
              <p className="fs-12 text-muted mb-0">Multi-perspective deliberation between Architecture, Security, and Quality models</p>
            </div>
            <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
              Consensus: 100% Achieved
            </span>
          </div>
          <div className="card-body p-4">
            <div className="d-flex flex-column gap-3">
              {dialogues.map((item, idx) => (
                <div key={idx} className="p-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)', border: `1px solid ${item.avatarColor}30` }}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge rounded-pill px-2.5 py-1 fw-bold fs-11" style={{ background: item.avatarColor, color: '#0b0f19' }}>
                        {item.agent}
                      </span>
                      <span className="fs-13 fw-semibold text-light">{item.role}</span>
                    </div>
                    <span className="fs-11 text-muted font-monospace">{item.timestamp}</span>
                  </div>
                  <p className="fs-13 text-light mb-0" style={{ lineHeight: '1.6' }}>{item.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: LlamaIndex AST RAG Ground-Truth Inspector */}
      {activeTab === 'llamaindex' && (
        <div className="card border-0 shadow-sm" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
          <div className="card-header bg-transparent border-bottom border-dark py-3">
            <h5 className="card-title text-light mb-1">AST Semantic Vector Ground-Truth</h5>
            <p className="fs-12 text-muted mb-0">Query extracted legacy business logic, domain invariants, and mathematical formulas</p>
          </div>
          <div className="card-body p-4">
            <div className="input-group mb-4">
              <span className="input-group-text bg-dark border-secondary text-info">
                <i className="ti ti-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark border-secondary text-light fs-13"
                value={searchRAG}
                onChange={(e) => setSearchRAG(e.target.value)}
                placeholder="Ask any question about legacy business logic, formulas, or database constraints..."
              />
              <button className="btn btn-info text-dark fw-bold px-3">Query Vector Index</button>
            </div>

            <h6 className="text-light fw-bold fs-13 mb-3">Extracted Domain Rules & Mathematical Invariants:</h6>

            <div className="d-flex flex-column gap-3">
              {ragRules.map((r, i) => (
                <div key={i} className="p-3 rounded bg-dark border border-secondary">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-info-subtle text-info border border-info-subtle">{r.domain}</span>
                      <span className="fs-12 fw-bold text-light font-monospace">{r.ruleId}</span>
                    </div>
                    <span className="badge bg-success-subtle text-success fs-11">Cosine Confidence: {r.confidence}</span>
                  </div>
                  <p className="fs-13 text-light mb-2 fw-medium">{r.rule}</p>
                  <span className="fs-11 text-muted font-monospace d-block">
                    <i className="ti ti-code me-1 text-warning"></i> Ground-Truth Provenance: {r.extractedFrom}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AiStudioPage;
