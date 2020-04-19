import React from 'react'
import Resizer from 'react-image-file-resizer';


class CampaignForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.campaign
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

    };

    componentDidMount() {
        this.props.fetchCampaigns();
        window.scrollTo(0,0);

    }

    handleSubmit(e) {
        const props = this.props
        e.preventDefault();
        // const campaign = Object.assign({}, this.state);
        // this.props.createCampaign(campaign);
        if (this.props.formType === 'Create Campaign') {
            const formData = new FormData();
            formData.append('campaign[title]', this.state.title);
            formData.append('campaign[location]', this.state.location);
            formData.append('campaign[short_description]', this.state.short_description);
            formData.append('campaign[long_description]', this.state.long_description);
            formData.append('campaign[goal_amount]', this.state.goal_amount);
            formData.append('campaign[end_date]', this.state.end_date);
            formData.append('campaign[goal_status]', this.state.goal_status);
            formData.append('campaign[category_id]', this.state.category_id);
            formData.append('campaign[photo]', this.state.photoFile);
            $.ajax({
                url: '/api/campaigns',
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false
            }).then( payload => {
                this.props.history.push(`/campaigns/${Object.values(payload)[0].id}`);
            })
        } else if (this.props.formType === 'Edit Campaign') {
            const formData = new FormData();
            formData.append('campaign[title]', this.state.title);
            formData.append('campaign[location]', this.state.location);
            formData.append('campaign[short_description]', this.state.short_description);
            formData.append('campaign[long_description]', this.state.long_description);
            formData.append('campaign[goal_amount]', this.state.goal_amount);
            formData.append('campaign[end_date]', this.state.end_date);
            formData.append('campaign[goal_status]', this.state.goal_status);
            formData.append('campaign[category_id]', this.state.category_id);
            formData.append('campaign[photo]', this.state.photoFile);
            $.ajax({
                url: `/api/campaigns/${this.props.campaign.id}`,
                method: 'PATCH',
                data: formData,
                contentType: false,
                processData: false
            }).then( payload => {
                
                document.querySelector('.camp-show-all').style.display = "block"
                document.querySelector('.toggle-edit').style.display = "none"
                // this.props.history.push(`/campaigns/${this.props.campaign.id}`);
            })
        }
    }

    photoUrlSet() {
        this.setState({campaign: {photoURL: this.props.campaign.photoURL}})
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        

            fileReader.onloadend = () => {
                this.setState({photoFile: file, photoURL: fileReader.result});
            }
            if(file){fileReader.readAsDataURL(file);}
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        if(!Object.values(this.props.allCampaigns).length) return null
        
        let preview = this.state.photoURL ? <img className="image-prev" src={this.state.photoURL}/> : null
        
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
                                <input type="text" maxlength="40" value={this.state.title} onChange={this.update('title')} placeholder="My Campaign Title"/>
                            </label>
                            <label>Uploaad A Photo For This Campaign
                                <input type="file" onChange={this.handleFile}/>
                                <div>
                                    <h3>Image Preview</h3>
                                    <div>{preview}</div>
                                </div>
                            </label>
                            <label>Location
                                <div className="inner-campaign-text">Where is your campaign located?</div>
                                <input type="text" value={this.state.location} onChange={this.update('location')} placeholder="Seattle, WA, United States"/>
                            </label>
                            <label>Short Description
                                <div className="inner-campaign-text"> Give a breif description of your product</div>
                                <textarea name="" id="" cols="30" rows="2" maxlength="80" value={this.state.short_description} onChange={this.update('short_description')} placeholder="Your Short Campaign Description Goes Here"></textarea>
                            </label>
                            <label>Long Description
                                <div className="inner-campaign-text">Provide a detailed description of your product</div>
                                <textarea name="" id="" cols="30" rows="10" value={this.state.long_description} onChange={this.update('long_description')} placeholder="Your Detailed Campaign Description Goes Here"></textarea>
                            </label>
                            <label>Goal Amount
                                <div className="inner-campaign-text">Fundsto be raised for this campaign? (Please do not use ",")</div>
                                <input type="text" value={this.state.goal_amount} onChange={this.update('goal_amount')} placeholder="100000"/>
                            </label>
                            <label>End Date
                                <div className="inner-campaign-text">How much time will you allow for this campaign?</div>
                                <input type="text" value={this.state.end_date} onChange={this.update('end_date')} placeholder="30"/>
                            </label>
                            {/* <label>Goal Status
                                <div className="inner-campaign-text">Has your goal been met?</div>
                                <input type="text" value={this.state.goal_status} onChange={this.update('goal_status')}/>
                            </label> */}
                            <div className="submit-contain">
                                <input className="campaign-submit" type="submit" value={this.props.formType}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CampaignForm;