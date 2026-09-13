import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const PdfViewerPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="PDF Viewer" category="Plugins" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-body">
<div className="text-center">
<div className="btn-group text-nowrap">
<button className="btn btn-dark" id="prev">
<i className="ti ti-arrow-left"></i>
<span className="d-none d-sm-inline ms-2">Previous</span>
</button>
<button className="btn btn-dark" id="next">
<i className="ti ti-arrow-right"></i>
<span className="d-none d-sm-inline ms-2">Next</span>
</button>
<button className="btn btn-dark" id="zoomin">
<i className="ti ti-zoom-in"></i>
<span className="d-none d-sm-inline ms-2">Zoom In</span>
</button>
<button className="btn btn-dark" id="zoomout">
<i className="ti ti-zoom-out"></i>
<span className="d-none d-sm-inline ms-2">Zoom Out</span>
</button>
<button className="btn btn-dark rounded-end-3" id="zoomfit">100%</button>
<input className="form-control rounded-end-0 ms-1" id="page_num" style={{ width: '50px' }} type="text"/>
<span className="input-group-text rounded-start-0 border-start-0" id="page_count">/ 00</span>
</div>
</div>
<div className="text-center overflow-auto mt-3">
<canvas className="pdfcanvas border rounded-3" id="the-canvas"></canvas>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
};
