import React from 'react'

class CreateCampaign extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.campaign
    }

    handleSubmit(e) {
        this.props.CreateCampaign(this.state)
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
                        <input type="text" onChange={this.update('title')}/>
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

export default CreateCampaign;