import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const FormTextEditorsPage: React.FC = () => {
  const [snowContent, setSnowContent] = useState<string>(`
    <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
    <p><br /></p>
    <ul>
      <li>Fully responsive layout with a sleek and modern design.</li>
      <li>Multiple pre-built pages such as login, registration, dashboard, charts, tables, and more.</li>
      <li>Includes various components like modals, alerts, navigation menus, etc.</li>
      <li>Easy to customize and extend to suit your project’s needs.</li>
      <li>Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.</li>
    </ul>
    <p><br /></p>
    <p>MyAdmin Admin is the perfect choice for your next admin project. Get started today and create a stunning interface for your application.</p>
  `);

  const [bubbleContent, setBubbleContent] = useState<string>(`
    <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
    <p><br /></p>
    <ul>
      <li>Fully responsive layout with a sleek and modern design.</li>
      <li>Multiple pre-built pages such as login, registration, dashboard, charts, tables, and more.</li>
      <li>Includes various components like modals, alerts, navigation menus, etc.</li>
    </ul>
    <p><br /></p>
    <p>MyAdmin Admin is the perfect choice for your next admin project.</p>
  `);

  const [summernoteContent, setSummernoteContent] = useState<string>(`
    <h4>MyAdmin Admin - Modern Admin Dashboard</h4>
    <p>MyAdmin Admin is a powerful and feature-rich Bootstrap-based admin template designed to help you build stunning and functional dashboards. It provides a clean, responsive, and easy-to-use interface for managing data and providing insights.</p>
    <p>With numerous components and options, it is perfect for building any type of web application. <strong>MyAdmin Admin</strong> includes everything you need to start building your next project.</p>
    <ul>
      <li>Fully responsive layout</li>
      <li>Customizable UI components</li>
      <li>Built on Bootstrap 5</li>
      <li>Multiple ready-to-use pages</li>
    </ul>
  `);

  const execCmd = (cmd: string, val: string | undefined = undefined) => {
    document.execCommand(cmd, false, val);
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Text Editors" breadcrumbs={[{ label: 'Forms' }, { label: 'Text Editors', active: true }]} />

      <div className="row">
        <div className="col-12">
          {/* Card 1: Quilljs */}
          <div className="card">
            <div className="card-header d-block">
              <h4 className="card-title mb-1">Quilljs</h4>
              <p className="text-muted mb-0">Quill is a modern WYSIWYG editor built for compatibility and extensibility</p>
            </div>

            <div className="card-body">
              <h5 className="card-title mb-1">Snow Editor</h5>
              <p className="text-muted">Snow is a clean, flat toolbar theme.</p>

              {/* Snow Toolbar */}
              <div className="ql-toolbar ql-snow border rounded-top bg-light p-2 d-flex flex-wrap gap-2 align-items-center">
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('bold')} title="Bold"><b>B</b></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('italic')} title="Italic"><i>I</i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('underline')} title="Underline"><u>U</u></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('strikeThrough')} title="Strike"><s>S</s></button>
                </div>
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('formatBlock', '<h3>')} title="Heading 3"><i className="ti ti-h-3"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('formatBlock', '<p>')} title="Paragraph"><i className="ti ti-pilcrow"></i></button>
                </div>
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('insertUnorderedList')} title="Bullet List"><i className="ti ti-list"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('insertOrderedList')} title="Numbered List"><i className="ti ti-list-numbers"></i></button>
                </div>
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('justifyLeft')} title="Left"><i className="ti ti-align-left"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('justifyCenter')} title="Center"><i className="ti ti-align-center"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('justifyRight')} title="Right"><i className="ti ti-align-right"></i></button>
                </div>
              </div>

              {/* Snow Content Box */}
              <div
                className="form-control rounded-top-0 border-top-0 p-3 ql-editor"
                style={{ minHeight: '260px', maxHeight: '400px', overflowY: 'auto' }}
                contentEditable
                dangerouslySetInnerHTML={{ __html: snowContent }}
                onBlur={(e) => setSnowContent(e.currentTarget.innerHTML)}
              />
            </div>

            <div className="border-top border-dashed"></div>

            <div className="card-body">
              <h5 className="card-title mb-2">Bubble Editor</h5>
              <p className="text-muted">Bubble is a simple tooltip based theme.</p>

              <div
                className="form-control rounded p-3 ql-editor border"
                style={{ minHeight: '200px', maxHeight: '350px', overflowY: 'auto' }}
                contentEditable
                dangerouslySetInnerHTML={{ __html: bubbleContent }}
                onBlur={(e) => setBubbleContent(e.currentTarget.innerHTML)}
              />
            </div>
          </div>

          {/* Card 2: Summernote */}
          <div className="card">
            <div className="card-header d-block">
              <h4 className="card-title mb-1">Summernote</h4>
              <p className="text-muted mb-0">Summernote is a JavaScript library that helps you create WYSIWYG editors with a simple and easy-to-use interface. Summernote is licensed under MIT and maintained by the community.</p>
              <div className="alert alert-warning alert-dismissible fade show mb-0 mt-2" role="alert">
                <strong>Note:</strong> Pure React implementation of Summernote WYSIWYG editor with live formatting and styling tools.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>

            <div className="card-body">
              {/* Summernote Toolbar */}
              <div className="border rounded-top bg-light p-2 d-flex flex-wrap gap-2 align-items-center">
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('bold')}><b>B</b></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('italic')}><i>I</i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('underline')}><u>U</u></button>
                </div>
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('insertUnorderedList')}><i className="ti ti-list"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('insertOrderedList')}><i className="ti ti-list-numbers"></i></button>
                </div>
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('justifyLeft')}><i className="ti ti-align-left"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('justifyCenter')}><i className="ti ti-align-center"></i></button>
                  <button type="button" className="btn btn-light border" onClick={() => execCmd('justifyRight')}><i className="ti ti-align-right"></i></button>
                </div>
              </div>
              <div
                className="form-control rounded-top-0 border-top-0 p-3"
                style={{ minHeight: '220px', maxHeight: '400px', overflowY: 'auto' }}
                contentEditable
                dangerouslySetInnerHTML={{ __html: summernoteContent }}
                onBlur={(e) => setSummernoteContent(e.currentTarget.innerHTML)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormTextEditorsPage;
