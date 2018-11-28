import React from 'react';
import PropTypes from 'prop-types';

const QAList = (props) => {
    return (
        <ul className="list-group">
            {
                props.fruits.length > 0 && (
                    props.fruits.map(fruitItem => (
                        <li className="list-group-item" id="list-individual-item" key={fruitItem.qaId}>
                            <div className="row">
                                <div className="col-1">
                                    <img className="fruit-item-image" src={fruitItem.user.picture} />
                                </div>
                                <div className="col-3">
                                    {fruitItem.user.name} 
                                    <p className="img-text">Q&A
                                    <span className="img-text-info">Live</span></p>
                                </div>
                                <div className="col-6">
                                    <p className="fruit-item-topic">{fruitItem.topic}</p> 
                                </div>
                                <div className="col-2 text-right">
                                <img 
                                    data-qa-id={fruitItem.qaId} 
                                    src={"http://localhost:8081/assets/circle_rightarrow.png"} 
                                    className="view-fruit-item" 
                                    onClick={props.onSelectFruit} />
                                </div>
                            </div>
                        </li>
                    ))
                )
            }
        </ul>
    );
  }

  QAList.propTypes = {
      fruits: PropTypes.array.isRequired,
      onSelectFruit: PropTypes.func.isRequired
  };

  export default QAList;