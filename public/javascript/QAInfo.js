import React from 'react';
import PropTypes from 'prop-types';

const QAInfo = (props) => {
    return (
        <div>
            <div>
                <div className="row">
                    <button className="offset-7 col-4 btn btn-block btn-primary btn-go-back" onClick={props.handleGoBack}>Go Back</button>
                </div>
                <p className="fruit-item-text">{props.fruitDetails.topic}</p>
                {
                    props.fruitDetails.questions.map(questionItem => (
                        <div key={questionItem.qid} className="card">
                            <div className="card-header">
                            <img className="fruit-img"src={questionItem.user.picture}/>
                                {questionItem.user.name} 
                                <p className="item-location">{questionItem.user.location}</p>
                            </div>
                            <div className="card-body">
                                <p>{questionItem.text}</p>
                                <div className="text-right">Apple <img className="apple-img" src={'http://localhost:8081/assets/apple.png'}/></div> 
                                <div className="text-right">{questionItem.answer}</div> 
                            </div>
                        </div>   
                    ))
                }
            </div>
        </div>
    );
}

QAInfo.propTypes = {
    handleGoBack: PropTypes.func.isRequired,
    fruitDetails: PropTypes.object.isRequired
}

export default QAInfo;