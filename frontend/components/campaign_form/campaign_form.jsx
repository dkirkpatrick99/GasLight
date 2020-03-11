import React from 'react'

class CampaignForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            location: "",
            short_description: "",
            long_description: "",
            goal_amont: "",
            end_date: "",
            goal_status: false
            
        },
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const campaign = Object.assign({}, this.state);
        debugger
        this.props.createCampaign(campaign)
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
                    <div className="campaign-content">
                        <div className="create-content">
                            <label>Title
                                <div className="inner-campaign-text">What is the title of your campaign?</div>
                                <input type="text" value={this.state.title} onChange={this.update('title')} placeholder="My Campaign Title"/>
                            </label>
                            <label>Location
                                <div className="inner-campaign-text">Where is your campaign located?</div>
                                <input type="text" value={this.state.location} onChange={this.update('location')} placeholder="Seattle, WA, United States"/>
                            </label>
                            <label>Short Description
                                <div className="inner-campaign-text"> Give a breif description of your product</div>
                                <textarea name="" id="" cols="30" rows="5" value={this.state.short_description} onChange={this.update('short_description')}></textarea>
                            </label>
                            <label>Long Description
                                <div className="inner-campaign-text">Provide a detailed description of your product</div>
                                <textarea name="" id="" cols="30" rows="10" value={this.state.long_description} onChange={this.update('long_description')}></textarea>
                            </label>
                            <label>Goal Amount
                                <div className="inner-campaign-text">Fundsto be raised for this campaign?</div>
                                <input type="text" value={this.state.goal_amont} onChange={this.update('goal_amount')} placeholder="100,000"/>
                            </label>
                            <label>End Date
                                <div className="inner-campaign-text">How much time will you allow for this campaign?</div>
                                <input type="text" value={this.state.end_date} onChange={this.update('end_date')} placeholder="30"/>
                            </label>
                            <label>Goal Status
                                <div className="inner-campaign-text">Has your goal been met?</div>
                                <input type="text" value={this.state.goal_status} onChange={this.update('goal_status')}/>
                            </label>

                            <input type="submit" value={this.props.formType}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CampaignForm;