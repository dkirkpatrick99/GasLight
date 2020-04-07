import React from 'react';
import {NavLink} from 'react-router-dom';

class ContributionModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {amount : 0}
    }

    update(field) {
        // return e => this.setState({
        //   [field]: e.currentTarget.value
        // });
      }

    handleSubmit(e) {
        // e.preventDefault();
        // const money = Object.assign({}, this.state);
        // this.props.createContribution(money);
        // this.props.closeModal();
      }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="contribution-modal">
                    <div className="contribution-content">
                        <div className="close-it" onClick={this.props.closeModal}>+</div>
                            <h1>Back This Project</h1>
                                <p>Make a contribution</p>
                        <div className="centering">
                            <div className="contribution-contain">
                                <label>
                                    <input className="amount" type="text" placeholder="$100" onChange={this.update('amount')}/> <input className="back-it-button" type="submit" value="Back It"/>

                                    <p>Contributions are not associated with perks</p>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        )
    }

}

export default ContributionModal;