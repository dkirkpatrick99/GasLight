import React from 'react'

class RewardForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            description: "",
            min_contribution: 0,
            campaign_id: 5
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault()
        const reward = Object.assign({}, this.state);
        this.props.createReward(reward)
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
                    Let’s get ready to start your campaign!
                        <div className="instructions">We want to create the best onboarding for you – please fill out the information below. Your answers will be locked for this campaign and can’t be changed later.</div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    <div className="create-perk">
                        <label>Price
                            <h2>Set an amount that you want to collect from backers who claim this perk. This amount should represent how much you want to receive for all the items included in this perk.</h2>
                            <input type="text" value={this.state.min_contribution} onChange={this.update('min_contribution')}/>
                        </label>
                        <label>Title
                            <h2>The title for your perk is what will appear on your campaign page and throughout Indiegogo. Create a title that best describes the contents of what this perk is offering.</h2>
                            <input type="text" value={this.state.name} onChange={this.update('name')}/>
                        </label>
                        <label>Description
                            <h2>Describe the details of this perk. Be creative, this is your opportunity to educate backers on what they will be receiving after they claim this perk.</h2>
                            <textarea name="" id="" cols="30" rows="10" value={this.state.description} onChange={this.update('description')}></textarea>
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Create Perk"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default RewardForm;