import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export const UiElementsPage: React.FC = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="mb-0">UI Components Showcase</h4>
        </div>
      </div>

      {/* Buttons */}
      <Card className="mb-3">
        <Card.Header><Card.Title>Buttons & Variants</Card.Title></Card.Header>
        <Card.Body>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
          </div>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Button variant="soft-primary">Soft Primary</Button>
            <Button variant="soft-success">Soft Success</Button>
            <Button variant="soft-danger">Soft Danger</Button>
            <Button variant="soft-warning">Soft Warning</Button>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="outline-primary">Outline</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" icon><i className="ti ti-heart"></i></Button>
          </div>
        </Card.Body>
      </Card>

      {/* Badges & Alerts */}
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Header><Card.Title>Badges & Labels</Card.Title></Card.Header>
            <Card.Body className="d-flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="soft-primary">Soft Primary</Badge>
              <Badge variant="soft-success">Soft Success</Badge>
              <Badge variant="soft-warning">Soft Warning</Badge>
              <Badge variant="info" pill>Pill Badge</Badge>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <Card.Header><Card.Title>Alerts</Card.Title></Card.Header>
            <Card.Body>
              <div className="alert alert-success d-flex align-items-center gap-2 mb-2">
                <i className="ti ti-check-circle fs-4"></i>
                <div>Action completed successfully!</div>
              </div>
              <div className="alert alert-danger d-flex align-items-center gap-2 mb-0">
                <i className="ti ti-alert-triangle fs-4"></i>
                <div>Error processing the request.</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
