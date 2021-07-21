import React, { Component } from 'react';
import axios from 'axios';
import Result from "../Results/Result";

class Search extends Component {
          constructor(props) {
                    super(props)

                    this.state = {
                              searchVal: '',
                              images: []
                    }
          }
          onModify = (event) => {
                    const val = event.target.value;
                    this.setState({ searchVal: val }, () => {
                              if (val === '') {
                                        this.setState({ images: [] });
                              }
                              else {
                                        axios
                                                  .get(
                                                            `https://pixabay.com/api/?key=${process.env.REACT_APP_MM_KEY}&q=${this.state.searchVal
                                                            }&image_type=photo&safesearch=true`
                                                  )
                                                  .then(res => this.setState({ images: res.data.hits }))
                                                  .catch(err => console.log(err));
                              }
                    });
          };
          render() {
                    console.log(this.state.images);
                    return (
                              <div>
                                        <input type="text"
                                                  style=
                                                  {{
                                                            backgroundColor: 'black',
                                                            marginLeft: 470,
                                                            marginTop: 100,
                                                            paddingTop: 10,
                                                            paddingLeft: 70,
                                                            fontSize: 30,
                                                            outline: "none",
                                                            color: "white",
                                                            paddingBottom: 5
                                                  }}
                                                  placeholder="Search for images"
                                                  value={this.state.searchVal}
                                                  onChange={this.onModify}
                                        />
                                        <br />
                                        {this.state.images.length > 0 ? (<Result images={this.state.images} />) : null}
                              </div>

                    )
          }
}



export default Search;