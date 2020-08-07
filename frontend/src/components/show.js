import React from "react";
const API = "http://localhost:3000/jobs";
class show extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ jobs: data }));
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        <table align='center' border='1'>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Keyword</th>
            <th>Location</th>
          </tr>

          {jobs.map((job) => (
            <tr>
              <td key={job.name}>{job.name}</td>
              <td key={job.description}>{job.description}</td>
              <td key={job.keyword}>{job.keyword}</td>
              <td key={job.location}>{job.location}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default show;
