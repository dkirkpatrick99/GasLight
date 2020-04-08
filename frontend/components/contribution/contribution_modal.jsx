import React from 'react';
import {NavLink} from 'react-router-dom';

class ContributionModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {amount : 0}
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }


    handleSubmit(e) {
        let campId = this.props.campId;
        let userId = this.props.currentUser.id;
        e.preventDefault();
        let amount = parseInt(this.state.amount);
        // if (amount.includes(",")) {
        //   amount = amount.split(",").join("");
        // } 
        // if (amount.includes(".")) {
        //   const periodIdx = amount.indexOf(".");
        //   amount = amount.slice(0,periodIdx);
        // }
        let cont = {
          amount: amount,
          user_id: userId,
          campaign_id: campId
        };
        this.props.createContribution(cont)
            .then(() => this.props.fetchCampaign(campId))
            .then(() => this.props.closeModal());
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