import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const I18nPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="i18n Support" category="Plugins" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-header">
<h4 className="card-title">Example</h4>
</div>
<div className="card-body">
<h5 className="mb-2">You can change the language of demo text as well as the menu with simple function fire on buttons click. Try it:</h5>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-light gap-1 d-inline-flex align-items-center" data-translator-lang="en">
<img alt="user-image" className="me-1 rounded" data-translator-image="" height={18} src="assets/images/flags/us.svg"/>
<span className="align-middle">English</span>
</button>
<button className="btn btn-light gap-1 d-inline-flex align-items-center" data-translator-lang="hi">
<img alt="user-image" className="me-1 rounded" data-translator-image="" height={18} src="assets/images/flags/in.svg"/>
<span className="align-middle">Hindi</span>
</button>
<button className="btn btn-light gap-1 d-inline-flex align-items-center" data-translator-lang="it">
<img alt="user-image" className="me-1 rounded" data-translator-image="" height={18} src="assets/images/flags/it.svg"/>
<span className="align-middle">Italian</span>
</button>
<button className="btn btn-light gap-1 d-inline-flex align-items-center" data-translator-lang="es">
<img alt="user-image" className="me-1 rounded" data-translator-image="" height={18} src="assets/images/flags/es.svg"/>
<span className="align-middle">Spanish</span>
</button>
<button className="btn btn-light gap-1 d-inline-flex align-items-center" data-translator-lang="ru">
<img alt="user-image" className="me-1 rounded" data-translator-image="" height={18} src="assets/images/flags/ru.svg"/>
<span className="align-middle">Russian</span>
</button>
</div>
<h5 className="mt-3">Example:</h5>
<div className="bg-light-subtle border border-dashed p-3 rounded-3" style={{ height: '85px' }}>
<p className="mb-0" data-lang="demo-text"></p>
</div>
</div>
</div>
<div className="card">
<div className="card-header">
<h5 className="card-title">i18support Configuration</h5>
</div>
<div className="card-body">
<div className="mb-3">
<span className="badge badge-soft-success py-1 badge-label fs-base text-uppercase mb-2">Step 1</span>
<p className="text-muted">To enable i18n support in your application, you need to define all translatable text. The most effective way to do this is by storing the text in an external JSON file. For example:</p>
<div className="row">
<div className="col-md-4">
<h5>en.json</h5>
<pre className="bg-light-subtle border border-dashed rounded">
                                            <code className="language-javascript">
                                                &amp;#123;
                                                    "dashboards": "Dashboards",
                                                    "dashboard-one": "Dashboard v.1",
                                                    "dashboard-two": "Dashboard v.2"
                                                &amp;#125;
                                            </code>
                                        </pre>
</div>
<div className="col-md-4">
<h5>es.json</h5>
<pre className="bg-light-subtle border border-dashed rounded">
                                            <code className="language-javascript">
                                                &amp;#123;
                                                    "dashboards": "Paneles",
                                                    "dashboard-one": "Panel v.1",
                                                    "dashboard-two": "Panel v.2"
                                                &amp;#125;
                                            </code>
                                        </pre>
</div>
<div className="col-md-4">
<h5>ru.json</h5>
<pre className="bg-light-subtle border border-dashed rounded">
                                                <code className="language-javascript">
                                                    &amp;#123;
                                                        "dashboards": "Панели",
                                                        "dashboard-one": "Панель v.1",
                                                        "dashboard-two": "Панель v.2"
                                                    &amp;#125;
                                                </code>
                                            </pre>
</div>
</div>
</div>
<div className="mb-3">
<span className="badge badge-soft-success py-1 badge-label fs-base text-uppercase mb-2">Step 2</span>
<p className="text-muted">
                                            Next you need to add html indicators in all place you want to use
                                            <code>data-lang</code>
                                            .
                                        </p>
<pre className="bg-light-subtle border border-dashed rounded">
                                        <code className="language-markup">
                                        &lt;div&gt;
                                            &lt;span data-lang="dashboards"&gt; Dashboards &lt;/span&gt;
                                            &lt;span data-lang="dashboard-one"&gt; Dashboard v.1 &lt;/span&gt;
                                            &lt;span data-lang="dashboard-two"&gt; Dashboard v.2 &lt;/span&gt;
                                        &lt;/div&gt;
                                        </code>
                                    </pre>
</div>
<div>
<span className="badge badge-soft-success py-1 badge-label fs-base text-uppercase mb-2">Step 3</span>
<p className="text-muted">
                                            After that if you want to change the language you just need to add buttons and fire the
                                            <code>selectedLanguage</code>
                                            .
                                        </p>
<div className="row">
<div className="col-md-6">
<h5 className="mb-2">HTML Code</h5>
<pre className="bg-light-subtle border border-dashed rounded">
                                            <code className="language-markup">
                                            &lt;a className="btn btn-light" data-translator-lang="en"&gt; Set EN language&lt;/a&gt;

                                            &lt;a className="btn btn-light" data-translator-lang="es"&gt; Set ES language&lt;/a&gt;
                                            </code>
                                        </pre>
<h5 className="mt-3 mb-2">Javascript Code</h5>
<pre className="bg-light-subtle border border-dashed rounded">
                                            <code className="language-javascript">
                                                let selectedLanguage = "en";
                                            </code>
                                        </pre>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
};
