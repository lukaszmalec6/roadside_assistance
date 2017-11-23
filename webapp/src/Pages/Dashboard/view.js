import React, { Component } from "react";
import api from "../../ApiService";
import TiTrash from "react-icons/lib/ti/trash";
import TiInfoOutline from "react-icons/lib/ti/info-outline";
import TiInputChecked from "react-icons/lib/ti/input-checked";
import TiWarning from "react-icons/lib/ti/warning";
import { Panel, ButtonToolbar, Button, Modal } from "react-bootstrap";
import "../../theme.css";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    api.subscribeToSocket(() => {
      this.props.loadLiveIncidents();
      this.setState({ showModal: true });
    });
  }
  componentWillMount() {
    this.props.loadLiveIncidents();
  }
  erase = id => {
    api.delete("incidents", id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  markasprocessed = id => {
    console.log(id);
    api.markIncidentAsRead(id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };
  render() {
    if (this.props.permissions) {
      let { incidents } = this.props;
      return (
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>ACCIDENT!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TiWarning color="red" size={35} />
              <h4>Check dashboard for more informations.</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>

          {incidents ? (
            incidents.map((incident, index) => (
              <Panel
                key={index}
                header={
                  incident.processed
                    ? "Accident, status: processed"
                    : "Accident, status: not processed!"
                }
                bsStyle={incident.processed ? "info" : "danger"}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    {incident.firstname + " "}
                    {incident.lastname + " "}
                  </h3>
                  <h4 className="card-text">just had an accident!</h4>
                  <ButtonToolbar style={{ marginTop: "20px" }}>
                    <Button
                      disabled={incident.processed ? true : false}
                      bsStyle="primary"
                      bsSize="small"
                      onClick={() => this.markasprocessed(incident.id)}
                    >
                      <TiInputChecked color="white" size={30} />Got it!
                    </Button>
                    <Button
                      bsStyle="primary"
                      bsSize="small"
                      href={"/incidents/" + incident.id}
                    >
                      <TiInfoOutline color="white" size={30} /> Viev info
                    </Button>
                    <Button
                      bsStyle="danger"
                      bsSize="small"
                      onClick={() => this.erase(incident.id)}
                    >
                      <TiTrash color="white" size={30} /> Delete
                    </Button>
                  </ButtonToolbar>
                </div>
              </Panel>
            ))
          ) : (
            <div>
              <h3>Nothing to show</h3>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <p>Good morning. We will let you know if something happens</p>
        </div>
      );
    }
  }
}
