import React, { useState } from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const FormPickersPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2026-08-29');
  const [time, setTime] = useState('14:30');

  return (
    <div>
      <PageHeader title="Pickers" category="Forms" />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Flatpickr Date Pickers">
            <div className="mb-3">
              <label className="form-label">Basic Date Picker</label>
              <input
                type="date"
                className="form-control"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <span className="form-text text-muted">Selected date: <strong>{selectedDate}</strong></span>
            </div>

            <div className="mb-3">
              <label className="form-label">Time Picker</label>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <span className="form-text text-muted">Selected time: <strong>{time}</strong></span>
            </div>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card title="Color Pickers & Date Ranges">
            <div className="mb-3">
              <label className="form-label">Custom Theme Color</label>
              <input type="color" className="form-control form-control-color w-100" defaultValue="#4f46e5" />
            </div>

            <div className="mb-3">
              <label className="form-label">Month & Year Picker</label>
              <input type="month" className="form-control" defaultValue="2026-08" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
