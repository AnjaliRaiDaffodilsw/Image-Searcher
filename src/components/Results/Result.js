import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Result extends Component {
          constructor(props) {
                    super(props)

                    this.state = {
                              isOpen: false,
                              currentImage: ''
                    }
          }
          handleOpenButton = (imgs) => {
                    this.setState({
                              isOpen: true,
                              currentImage: imgs
                    })
          }
          handleCloseButton = () => {
                    this.setState({
                              isOpen: false
                    });
          }
          render() {
                    let imagesList;
                    const { images } = this.props

                    if (images) {
                              imagesList = (
                                        <GridList cols={4}>
                                                  {  images.map(img => (
                                                            <GridTile
                                                                      title={img.tags}
                                                                      key={img.id}
                                                                      actionIcon={
                                                                                <IconButton onClick={() => this.handleOpenButton(img.largeImageURL)}>
                                                                                          <ZoomIn color="white" />
                                                                                </IconButton>
                                                                      }
                                                            >
                                                                      <img src={img.largeImageURL} alt="" />
                                                            </GridTile>
                                                  ))
                                                  }
                                        </GridList>
                              )
                    }
                    else {
                              imagesList = null;
                    }
                    const actions = [
                              <FlatButton label="Close" primary={true} onClick={this.handleCloseButton} />
                    ]
                    return (
                              <div style={{
                                        marginLeft: 50,
                                        marginRight: 50,
                                        marginTop: 20
                              }}>
                                        {imagesList}
                                        <Dialog
                                                  actions={actions}
                                                  modal={false}
                                                  open={this.state.isOpen}
                                                  onRequestClose={this.handleCloseButton}
                                        >
                                                  <img src={this.state.currentImage} alt="" style={{ width: '100%' }} />
                                        </Dialog>
                              </div>
                    )
          }
}
Result.propTypes = {
          images: PropTypes.array.isRequired
}

export default Result;