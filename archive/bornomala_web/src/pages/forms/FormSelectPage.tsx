import React, { useState } from 'react';
import Select from 'react-select';
import { PageHeader } from '../../components/common/PageHeader';

export const FormSelectPage: React.FC = () => {
  const defaultOptions = [
    { value: 'choice-1', label: 'Choice 1' },
    { value: 'choice-2', label: 'Choice 2' },
    { value: 'choice-3', label: 'Choice 3' }
  ];

  const groupedOptions = [
    {
      label: 'UK',
      options: [
        { value: 'London', label: 'London' },
        { value: 'Manchester', label: 'Manchester' },
        { value: 'Liverpool', label: 'Liverpool' }
      ]
    },
    {
      label: 'FR',
      options: [
        { value: 'Paris', label: 'Paris' },
        { value: 'Lyon', label: 'Lyon' },
        { value: 'Marseille', label: 'Marseille' }
      ]
    }
  ];

  const statesOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'FL', label: 'Florida' },
    { value: 'NY', label: 'New York' },
    { value: 'TX', label: 'Texas' },
    { value: 'WA', label: 'Washington' }
  ];

  const [singleChoice, setSingleChoice] = useState<any>(defaultOptions[0]);
  const [groupedChoice, setGroupedChoice] = useState<any>(groupedOptions[0].options[0]);
  const [multiStates, setMultiStates] = useState<any>([statesOptions[0], statesOptions[4]]);
  const [tags, setTags] = useState<string[]>(['Task-1', 'Feature-A', 'Bug-Fixed']);
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (t: string) => {
    setTags(tags.filter(item => item !== t));
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Select" breadcrumbs={[{ label: 'Forms' }, { label: 'Select', active: true }]} />

      <div className="row">
        <div className="col-12">
          {/* Card 1: Choices.Js */}
          <div className="card">
            <div className="card-header d-block">
              <h4 className="card-title mb-1">Choices.Js</h4>
              <p className="text-muted mb-0">Choices.js is a lightweight, configurable select box/text input plugin.</p>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h5>Single Select Input: Default</h5>
                  <p className="text-muted mb-0">Standard searchable single choice selection.</p>
                </div>
                <div className="col-lg-6">
                  <Select
                    options={defaultOptions}
                    value={singleChoice}
                    onChange={setSingleChoice}
                    classNamePrefix="react-select"
                  />
                </div>
              </div>

              <div className="my-4 border-top border-dashed"></div>

              <div className="row g-4">
                <div className="col-lg-6">
                  <h5>Single Select Input: Option Groups</h5>
                  <p className="text-muted mb-0">Categorized dropdown options by geographic groups.</p>
                </div>
                <div className="col-lg-6">
                  <Select
                    options={groupedOptions}
                    value={groupedChoice}
                    onChange={setGroupedChoice}
                    classNamePrefix="react-select"
                  />
                </div>
              </div>

              <div className="my-4 border-top border-dashed"></div>

              <div className="row g-4">
                <div className="col-lg-6">
                  <h5>Text Input: Limit Values with Remove Button</h5>
                  <p className="text-muted mb-0">Dynamic interactive badge tags with remove action.</p>
                </div>
                <div className="col-lg-6">
                  <div className="border rounded p-2 d-flex flex-wrap gap-2 align-items-center bg-light">
                    {tags.map(tag => (
                      <span key={tag} className="badge bg-primary d-flex align-items-center gap-1 py-1 px-2">
                        {tag}
                        <i className="ti ti-x cursor-pointer" onClick={() => removeTag(tag)}></i>
                      </span>
                    ))}
                    <input
                      type="text"
                      className="border-0 bg-transparent flex-grow-1"
                      style={{ outline: 'none', minWidth: '120px' }}
                      placeholder="Type and press Enter..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Select2 */}
          <div className="card">
            <div className="card-header d-block">
              <h4 className="card-title mb-1">Select2</h4>
              <p className="text-muted mb-0">Select2 gives you a customizable select box with support for searching, tagging, remote data sets, and infinite scrolling.</p>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h5>Multiple Select with Search</h5>
                  <p className="text-muted mb-0">Multi-item tag picker with real-time filtering.</p>
                </div>
                <div className="col-lg-6">
                  <Select
                    isMulti
                    options={statesOptions}
                    value={multiStates}
                    onChange={setMultiStates}
                    classNamePrefix="react-select"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormSelectPage;
