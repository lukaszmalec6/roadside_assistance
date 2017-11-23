import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewIncidents } from "../../Actions/actions";
import api from "../../ApiService";
import GoInfo from "react-icons/lib/go/info";
import TiTrash from "react-icons/lib/ti/trash";
import TiInfoOutline from "react-icons/lib/ti/info-outline";
import TiInputChecked from "react-icons/lib/ti/input-checked";
import TiWarning from "react-icons/lib/ti/warning";
import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
  PageHeader,
  Modal,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import "../../theme.css";
import FlipMove from "react-flip-move";

class Dashboard extends Component {
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
    api.deleteIncident(id).then(response => {
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
    let { incidents } = this.props;
    const popoverTop = (
      <Popover id="popover-positioned-right" title="Info">
        <h5>
          Dashboard shows the last 3 alarms about accidents. When a new alarm
          arrives, you will be informed immediately.{" "}
        </h5>
        <h5>
          Use the buttons to mark the alarm as received, delete it, or view
          information.
        </h5>
      </Popover>
    );

    return (
      <Grid>
        <Row className="show-grid" style={{ marginTop: "100px" }}>
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
          <PageHeader>
            <div>
              <GoInfo color="lightblue" />
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverTop}
              >
                <Button>Check info</Button>
              </OverlayTrigger>
            </div>
          </PageHeader>
          <FlipMove duration={150} easing="ease">
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
                      {incident.secondname + " "}
                    </h3>
                    <h4 className="card-text">just had an accident!</h4>
                    <ButtonToolbar style={{ marginTop: "20px" }}>
                      <Button
                        disabled={incident.processed}
                        bsStyle="warning"
                        bsSize="large"
                        onClick={() => this.markasprocessed(incident.id)}
                      >
                        <TiInputChecked color="white" size={30} />Got it!
                      </Button>
                      <Button
                        bsStyle="info"
                        bsSize="large"
                        onClick={() => this.erase(incident.id)}
                      >
                        <TiTrash color="white" size={30} /> Delete
                      </Button>
                      <Button
                        bsStyle="success"
                        bsSize="large"
                        href={"/incidents/" + incident.id}
                      >
                        <TiInfoOutline color="white" size={30} /> Viev info
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
          </FlipMove>
        </Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    incidents: state.live_incidents.live_incidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLiveIncidents: () => dispatch(fetchNewIncidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
