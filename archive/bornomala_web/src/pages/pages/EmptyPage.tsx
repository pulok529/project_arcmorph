import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const EmptyPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Empty Page" category="Pages" />

      <div className="module-content-body">

      </div>
    </div>
  );
};
