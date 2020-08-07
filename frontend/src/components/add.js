import React from "react";
const API = "http://localhost:3000/addjob";
class add extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {
      jobs: {},
      name: "",
      description: "",
      keyword: "",
      location: "",
      counter: 0,
    };
  }
  refresh = () => {
    this.setState({ counter: this.state.counter++ });
  };
  add(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let keyword = this.refs.keyword.value;
    let location = this.refs.location.value;

    let data = {
      name,
      description,
      keyword,
      location,
    };
    fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      if (response.ok) {
        alert("Record Added Successfully");
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    });
    this.refresh();
  }
  render() {
    return (
      <div>
        <h2>Add New Job</h2>
        <form name='addform'>
          <table align='center'>
            <tr>
              <td>Title </td>
              <td>
                <input type='text' ref='name' placeholder='Enter Name'></input>
              </td>
            </tr>
            <tr>
              <td>Descripiton </td>
              <td>
                <input
                  type='text'
                  ref='description'
                  placeholder='Enter Description'
                ></input>
              </td>
            </tr>

            <tr>
              <td>Keyword</td>
              <td>
                <input
                  type='text'
                  ref='keyword'
                  placeholder='Enter Keyword'
                ></input>
              </td>
            </tr>
            <tr>
              <td>Loction</td>
              <td>
                <input
                  type='text'
                  ref='location'
                  placeholder='Enter Location'
                ></input>
              </td>
            </tr>

            <tr>
              <td colSpan='2' align='center'>
                <button onClick={this.add}>Add Job</button>
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='hidden'
                  ref='hid'
                  value={this.state.counter}
                ></input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default add;
