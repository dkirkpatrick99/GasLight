# MoneyWise

[Live Site](https://MoneyWise-crowdfunding.herokuapp.com/#/)
![alt text](/public/readmepic.png)

### Background
MoneyWise is a website to crowdfund great projects and causes. With this website, you can turn an indea into reality.
You can create a campaign of your own or contribute to ones that you believe in.

### Features and Implementation
MoneyWise is a full-stack web application inspired by Indiegogo. 
- Ruby on Rails 2.3.1 
- PostgreSQL database
- React 5.5.1
- Redux framework on the frontend.

### Users and Profiles
The users table stores all profile and user data with password digests and session tokens to keep you logged in.

### Campaigns
Create a campaign and a view page will show all the information to users. It will keep track of including contributions, timeline, follows and how much your campaign needs to meet its goal! 

toggleFollow(e) {  
    if (this.props.userFollowId.length) {
        this.props.deleteFollow(this.props.userFollowId[0].id)
        this.setState(this.state)

    } else {
        this.props.createFollow({user_id: this.props.currentUser, campaign_id: this.props.campaign.id})
            .then( payload => {
                this.props.fetchFollows()
            })
        this.setState(this.state)
    }
}

All campaign information is stored in one table in the database. A user foreign key associates the campaign to its creator.

### Contributions
User will be able to make contributions and receive rewards from a campaign based on their contributions. Contributions act as a joins table connecting a campaign to the users that decide to contribute to that campaign. Posting a contribution will dynamically add to the current funded amount of that campaign.

handleSubmit(e) {
    let campId = this.props.campId;
    let userId = this.props.currentUser.id;
    e.preventDefault();
    let amount = parseInt(this.state.amount);
    let cont = {
        amount: amount,
        user_id: userId,
        campaign_id: campId
    };
    this.props.createContribution(cont)
        .then(() => this.props.fetchCampaign(campId))
        .then(() => this.props.closeModal());
}  
