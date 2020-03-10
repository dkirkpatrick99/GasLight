import React from 'react'

class CampaignForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            location: "",
            short_description: "",
            long_description: "",
            goal_amont: 0,
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
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <div className="create-content">
                    <label>Title:
                        <input type="text"  onChange={this.update('title')}/>
                    </label>
                    <label>Location:
                        <input type="text" onChange={this.update('location')}/>
                    </label>
                    <label>Short Description:
                        <textarea name="" id="" cols="30" rows="10" onChange={this.update('short_description')}></textarea>
                    </label>
                    <label>Long Description:
                        <textarea name="" id="" cols="30" rows="10" onChange={this.update('long_description')}></textarea>
                    </label>
                    <label>Goal Amount:
                        <input type="text" onChange={this.update('goal_amount')}/>
                    </label>
                    <label>End Date:
                        <input type="text" onChange={this.update('end_date')}/>
                    </label>
                    <label>Goal Status:
                        <input type="text" onChange={this.update('goal_status')}/>
                    </label>

                    <input type="submit" value={this.props.formType}/>
                </div>
            </form>
        )
    }
}

export default CampaignForm;