import React from 'react'

class RewardForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            description: "",
            min_contribution: 0,
            campaign_id: props.campId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const reward = Object.assign({}, this.state);
        this.props.createReward(reward)
            .then( payload => {
                this.props.history.push(`/campaigns/${this.props.campId}`);
            })
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return(
            <div>
                <div className="campaignform-image">
                    <img src="header.png" alt=""/>
                    <div className="campaign-text">
                    Let’s get ready to draw the attention of investors!
                        <div className="instructions">We want to create the best onboarding for you – please fill out the information below. Your answers will be locked for this reward and can’t be changed later.</div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    <div className="campaign-content">
                        <div className="create-content">
                            <label>Price
                                <h2 className="inner-campaign-text">Set an amount that you want to collect from backers who claim this reward. This amount should represent how much you want to receive for all the items included in this reward.</h2>
                                <input type="text" value={this.state.min_contribution} onChange={this.update('min_contribution')}/>
                            </label>
                            <label>Title
                                <h2 className="inner-campaign-text" >The title for your reward is what will appear on your campaign page and throughout Indiegogo. Create a title that best describes the contents of what this reward is offering.</h2>
                                <input type="text" value={this.state.name} onChange={this.update('name')}/>
                            </label>
                            <label>Description
                                <h2 className="inner-campaign-text">Describe the details of this reward. Be creative, this is your opportunity to educate backers on what they will be receiving after they claim this reward.</h2>
                                <textarea name="" id="" cols="30" rows="10" value={this.state.description} onChange={this.update('description')}></textarea>
                            </label>
                        </div>
                        <div className="submit-contain">
                            <input  className="campaign-submit"type="submit" value="Create Reward"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default RewardForm;