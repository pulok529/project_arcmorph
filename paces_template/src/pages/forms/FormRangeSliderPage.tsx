import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const FormRangeSliderPage: React.FC = () => {
  const [basicVal, setBasicVal] = useState(150);
  const [sizeSm, setSizeSm] = useState(180);
  const [sizeLg, setSizeLg] = useState(90);
  const [colorPrimary, setColorPrimary] = useState(240);
  const [colorSuccess, setColorSuccess] = useState(90);
  const [colorDanger, setColorDanger] = useState(70);
  const [rangeMin, setRangeMin] = useState(20);
  const [rangeMax, setRangeMax] = useState(80);

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Range Slider" category="Forms" />

      <div className="module-content-body">
        <div className="row">
          <div className="col-12">
            <Card 
              title="Examples" 
              subtitle="noUiSlider is a lightweight, ARIA-accessible range slider with multi-touch and keyboard support."
            >
              {/* Basic Range Slider */}
              <div className="row g-3 align-items-center">
                <div className="col-lg-4">
                  <h5 className="mb-1">Basic Range Slider</h5>
                  <p className="text-muted mb-0">A simple single-value slider.</p>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex align-items-center gap-3">
                    <input
                      type="range"
                      className="form-range flex-grow-1"
                      min={0}
                      max={300}
                      value={basicVal}
                      onChange={(e) => setBasicVal(Number(e.target.value))}
                    />
                    <span className="badge bg-primary px-3 py-2 fs-sm">{basicVal}</span>
                  </div>
                </div>
              </div>

              <div className="my-4 border-top border-dashed"></div>

              {/* Sizes Range Slider */}
              <div className="row g-3 align-items-center">
                <div className="col-lg-4">
                  <h5 className="mb-1">Sizes</h5>
                  <p className="text-muted mb-0">Adjust element size using different slider sizes.</p>
                </div>
                <div className="col-lg-8">
                  <label className="form-label fs-xs text-muted mb-1">Small Slider</label>
                  <input
                    type="range"
                    className="form-range mb-3"
                    min={0}
                    max={300}
                    value={sizeSm}
                    onChange={(e) => setSizeSm(Number(e.target.value))}
                  />
                  <label className="form-label fs-xs text-muted mb-1">Large Slider</label>
                  <input
                    type="range"
                    className="form-range form-range-lg"
                    min={0}
                    max={300}
                    value={sizeLg}
                    onChange={(e) => setSizeLg(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="my-4 border-top border-dashed"></div>

              {/* Color Scheme Sliders */}
              <div className="row g-3 align-items-center">
                <div className="col-lg-4">
                  <h5 className="mb-1">Color Scheme Sliders</h5>
                  <p className="text-muted mb-0">Sliders styled with theme colors.</p>
                </div>
                <div className="col-lg-8">
                  <div className="mb-3">
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={300}
                      value={colorPrimary}
                      onChange={(e) => setColorPrimary(Number(e.target.value))}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="range"
                      className="form-range text-success"
                      min={0}
                      max={300}
                      value={colorSuccess}
                      onChange={(e) => setColorSuccess(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <input
                      type="range"
                      className="form-range text-danger"
                      min={0}
                      max={300}
                      value={colorDanger}
                      onChange={(e) => setColorDanger(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="my-4 border-top border-dashed"></div>

              {/* Multi Elements Range */}
              <div className="row g-3 align-items-center">
                <div className="col-lg-4">
                  <h5 className="mb-1">Multi Elements Range</h5>
                  <p className="text-muted mb-0">Dual-handle slider for selecting a range.</p>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex gap-3 align-items-center">
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={100}
                      value={rangeMin}
                      onChange={(e) => setRangeMin(Math.min(Number(e.target.value), rangeMax - 5))}
                    />
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={100}
                      value={rangeMax}
                      onChange={(e) => setRangeMax(Math.max(Number(e.target.value), rangeMin + 5))}
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-2 fs-sm fw-semibold">
                    <span className="badge bg-secondary">Min: {rangeMin}%</span>
                    <span className="badge bg-primary">Max: {rangeMax}%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormRangeSliderPage;
