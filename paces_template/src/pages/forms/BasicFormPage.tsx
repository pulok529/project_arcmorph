import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const BasicFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    text: 'Some default text',
    password: 'secretpassword123',
    email: 'david@example.com',
    number: 42,
    slider: 65,
    color: '#4f46e5',
    date: '2026-08-26',
    time: '14:30',
    priority: '1',
    notifications: true,
    autoSync: false
  });

  return (
    <div>
      <PageHeader title="Basic Elements" category="Forms" />

      <div className="row">
        {/* Card 1: Input Textfield Type */}
        <div className="col-lg-6">
          <Card title="Input Textfield Type">
            <div className="mb-3">
              <label className="form-label">Simple Text Input</label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
              <div className="form-text">We will never share your email with third parties.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Readonly Field</label>
              <input type="text" className="form-control" value="Readonly text content" readOnly />
            </div>
            <div className="mb-0">
              <label className="form-label">Disabled Field</label>
              <input type="text" className="form-control" value="Disabled input field" disabled />
            </div>
          </Card>
        </div>

        {/* Card 2: Specialized Input Types */}
        <div className="col-lg-6">
          <Card title="Specialized Input Types">
            <div className="mb-3">
              <label className="form-label">Number Input</label>
              <input 
                type="number" 
                className="form-control" 
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: Number(e.target.value) })} 
              />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label className="form-label">Range Slider</label>
                <span className="badge badge-soft-primary">{formData.slider}%</span>
              </div>
              <input 
                type="range" 
                className="form-range" 
                min="0" 
                max="100" 
                value={formData.slider}
                onChange={(e) => setFormData({ ...formData, slider: Number(e.target.value) })} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Color Picker</label>
              <input 
                type="color" 
                className="form-control form-control-color" 
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date & Time</label>
              <div className="row g-2">
                <div className="col-6">
                  <input 
                    type="date" 
                    className="form-control" 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
                  />
                </div>
                <div className="col-6">
                  <input 
                    type="time" 
                    className="form-control" 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })} 
                  />
                </div>
              </div>
            </div>
            <div className="mb-0">
              <label className="form-label">File Input</label>
              <input type="file" className="form-control" />
            </div>
          </Card>
        </div>
      </div>

      <div className="row mt-3">
        {/* Card 3: Input Groups */}
        <div className="col-lg-6">
          <Card title="Input Groups & Addons">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient username" />
              <span className="input-group-text">@example.com</span>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input type="text" className="form-control" placeholder="Amount" defaultValue="99.95" />
              <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-0">
              <input type="text" className="form-control" placeholder="Search keywords..." />
              <button className="btn btn-primary" type="button"><i className="ti ti-search me-1"></i> Search</button>
            </div>
          </Card>
        </div>

        {/* Card 4: Floating Labels */}
        <div className="col-lg-6">
          <Card title="Floating Labels">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="reactFloatingInput" placeholder="name@example.com" defaultValue="david@example.com" />
              <label htmlFor="reactFloatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="reactFloatingPassword" placeholder="Password" defaultValue="secret123" />
              <label htmlFor="reactFloatingPassword">Password</label>
            </div>
            <div className="form-floating mb-0">
              <select className="form-select" id="reactFloatingSelect" value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })}>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </select>
              <label htmlFor="reactFloatingSelect">Works with selects</label>
            </div>
          </Card>
        </div>
      </div>

      <div className="row mt-3">
        {/* Card 5: Input Sizes */}
        <div className="col-lg-6">
          <Card title="Input Sizes">
            <div className="mb-3">
              <label className="form-label fs-xs text-muted">Large Input (.form-control-lg)</label>
              <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
            </div>
            <div className="mb-3">
              <label className="form-label fs-xs text-muted">Default Input</label>
              <input className="form-control" type="text" placeholder="Default input" />
            </div>
            <div className="mb-0">
              <label className="form-label fs-xs text-muted">Small Input (.form-control-sm)</label>
              <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
            </div>
          </Card>
        </div>

        {/* Card 6: Checks, Radios and Switches */}
        <div className="col-lg-6">
          <Card title="Checks, Radios & Switches">
            <div className="row">
              <div className="col-md-6">
                <h6 className="fs-xs text-muted text-uppercase mb-2">Checkboxes</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="reactCheck1" defaultChecked />
                  <label className="form-check-label" htmlFor="reactCheck1">Active Option</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="reactCheck2" />
                  <label className="form-check-label" htmlFor="reactCheck2">Secondary Option</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="reactCheck3" disabled />
                  <label className="form-check-label" htmlFor="reactCheck3">Disabled Checkbox</label>
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="fs-xs text-muted text-uppercase mb-2">Switches</h6>
                <div className="form-check form-switch mb-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="reactSwitch1" 
                    checked={formData.notifications} 
                    onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })} 
                  />
                  <label className="form-check-label" htmlFor="reactSwitch1">Notifications</label>
                </div>
                <div className="form-check form-switch mb-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="reactSwitch2" 
                    checked={formData.autoSync} 
                    onChange={(e) => setFormData({ ...formData, autoSync: e.target.checked })} 
                  />
                  <label className="form-check-label" htmlFor="reactSwitch2">Auto Sync</label>
                </div>
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" id="reactSwitch3" disabled />
                  <label className="form-check-label" htmlFor="reactSwitch3">Disabled Switch</label>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
