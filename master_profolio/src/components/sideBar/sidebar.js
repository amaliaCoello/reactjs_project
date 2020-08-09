import React from "react";
import { Accordion, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../assets/css/sideBar/sidebar.css";

const SideBar = () => (
  <aside className="main-sidebar px-0 col-12 col-md-3 col-lg-2">
    <div className="d-flex">
      <div className="border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">
          <Icon.CaretLeftFill />
        </div>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-none"
          >
            <Icon.ColumnsGap /> Dashboard
          </a>
          <Accordion>
            <Card className="bg-none">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Icon.FileEarmarkZip /> Items
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.FileEarmarkPlus /> Add Items
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.FileMedical /> Custom Items
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.FileRichtextFill /> My Gallery
                  </a>
                </div>
              </Accordion.Collapse>
            </Card>
            <Card className="bg-none">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Icon.Cart4 /> Sales
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.CartPlus /> Orders
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.Cart2 /> Shopings Cars
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.CardText /> Tracking
                  </a>
                </div>
              </Accordion.Collapse>
            </Card>
            <Card className="bg-none">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <Icon.Gear /> Configuration
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <div>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.PersonPlus /> Add Users
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-menu"
                  >
                    <Icon.JournalPlus /> Add Nomenclators
                  </a>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  </aside>
);

export default SideBar;
