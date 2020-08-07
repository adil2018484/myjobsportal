import React from "react";
const API = "http://localhost:3000/jobs";
const API2 = "http://localhost:3000/job/";
const API1 = "http://localhost:3000/updatejob/";
var id;
class edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      job: [],
      test1: 0,
    };

    this.editjob.bind(this);
    this.updatejob.bind(this);
  }
  editjob = (e) => {
    e.preventDefault();
    id = this.refs.list.value;
    console.log(id);
    fetch(API2 + id)
      .then((response) => response.json())
      .then((data) => this.setState({ job: data }));
    console.log(this.state.job);
  };
  updatejob = (e) => {
    e.preventDefault();
    let name = this.refs.newname.value;
    let description = this.refs.newd.value;
    let keyword = this.refs.keyword.value;

    let location = this.refs.location.value;

    let Id = this.refs.list.value;
    fetch(
      API1 +
        id +
        "/" +
        name +
        "/" +
        description +
        "/" +
        keyword +
        "/" +
        location,
      {
        method: "PUT",
        // body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(function (response) {
      if (response.ok) {
        alert("Record Updated Successfully");
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
        <h1>Select a Job to Edit</h1>
        <form name='del'>
          <select ref='list' align='center'>
            {jobs.map((job) => (
              <option key={job._id} value={job._id}>
                {job.name}
              </option>
            ))}
          </select>
          <button onClick={this.editjob}>Edit Job</button>
        </form>
        <br></br>
        <form name='editform'>
          <table align='center'>
            <tr>
              <td>Name of Job</td>
              <td>
                <input
                  type='text'
                  ref='newname'
                  placeholder='Enter Name'
                  // value={this.state.job.name}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <input
                  type='text'
                  ref='newd'
                  placeholder='Enter Description'
                  // value={this.state.job.designation}
                ></input>
              </td>
            </tr>

            <tr>
              <td>Keyword</td>
              <td>
                <input
                  type='text'
                  ref='keyword'
                  placeholder='Enter keyword'
                  // value={this.state.job.designation}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                <input
                  type='text'
                  ref='location'
                  placeholder='Enter Location'
                  // value={this.state.job.designation}
                ></input>
              </td>
            </tr>

            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='hidden'
                  ref='id'
                  value={this.state.job._id}
                ></input>
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <button onClick={this.updatejob}>Update Job</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default edit;
