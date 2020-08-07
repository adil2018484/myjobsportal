import React from "react";
const API = "http://localhost:3000/jobs";
const API1 = "http://localhost:3000/deljob/";

class del extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      test1: 0,
    };

    this.deljob.bind(this);
  }
  deljob = (e) => {
    e.preventDefault();
    let name = this.refs.list.value;
    fetch(API1 + name, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      if (response.ok) {
        alert("Record Deleted Successfully");

        return true;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    });
  };
  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ jobs: data }));
  }
  render() {
    const { jobs } = this.state;

    return (
      <div align='center'>
        <h1>Select an Job to Delete</h1>
        <form name='del'>
          <select ref='list' align='center'>
            {jobs.map((job) => (
              <option key={job.name} value={job.name}>
                {job.name}
              </option>
            ))}
          </select>
          <button onClick={this.deljob}>Delete Job </button>
        </form>
      </div>
    );
  }
}

export default del;
