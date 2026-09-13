import React from 'react';
import Swal from 'sweetalert2';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const SweetAlertsPage: React.FC = () => {
  const showBasic = () => {
    Swal.fire({
      title: 'Any fool can use a computer',
      confirmButtonColor: '#4f46e5'
    });
  };

  const showTitle = () => {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      confirmButtonColor: '#4f46e5'
    });
  };

  const showHtml = () => {
    Swal.fire({
      title: '<i>HTML</i> <u>example</u>',
      icon: 'info',
      html: 'You can use <b>bold text</b>, <a href="#!">links</a> and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '<i class="ti ti-thumb-up"></i> Great!',
      cancelButtonText: '<i class="ti ti-thumb-down"></i>',
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#ef4444'
    });
  };

  const showState = (icon: 'info' | 'warning' | 'error' | 'success' | 'question') => {
    Swal.fire({
      title: `SweetAlert ${icon.toUpperCase()}`,
      text: `This is an example of ${icon} alert state.`,
      icon: icon,
      confirmButtonColor: '#4f46e5'
    });
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Sweet Alerts" breadcrumbs={[{ label: 'Plugins' }, { label: 'Sweet Alerts', active: true }]} />

      <div className="row">
        <div className="col-12">
          <Card title="Examples">
            <div className="table-responsive-sm">
              <table className="table mb-0 align-middle">
                <tbody>
                  <tr>
                    <td>
                      <h5 className="mb-1">Basic</h5>
                      <p className="text-muted mb-0">Displays a simple SweetAlert popup.</p>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-primary" onClick={showBasic}>Click me</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="mb-1">Title</h5>
                      <p className="text-muted mb-0">A popup with a title and supporting text.</p>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-primary" onClick={showTitle}>Click Me</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="mb-1">HTML</h5>
                      <p className="text-muted mb-0">Shows a popup with custom HTML content.</p>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-primary" onClick={showHtml}>Toggle HTML SweetAlert</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="mb-1">All States</h5>
                      <p className="text-muted mb-0">Examples of SweetAlert in different alert states.</p>
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-2">
                        <button type="button" className="btn btn-sm btn-info" onClick={() => showState('info')}>Toggle Info</button>
                        <button type="button" className="btn btn-sm btn-warning" onClick={() => showState('warning')}>Toggle Warning</button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => showState('error')}>Toggle Error</button>
                        <button type="button" className="btn btn-sm btn-success" onClick={() => showState('success')}>Toggle Success</button>
                        <button type="button" className="btn btn-sm btn-primary" onClick={() => showState('question')}>Toggle Question</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SweetAlertsPage;
