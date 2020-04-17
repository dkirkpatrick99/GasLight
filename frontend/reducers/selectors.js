export const selectCampaignsFromUser = (campaigns, userId) => {
    let result = [];
    for ( let id in campaigns ) {
      if ( campaigns[id].owner_id === userId ) { result.push(campaigns[id]) }
    }
    return result;
  }

  // export const selectCampaignsFromFollows = (campaigns, follows) => {
  //   let result = [];
  //   for ( let id in campaigns ) {
  //     if ( campaigns[id].id === follows[id].campaign_id ) { result.push(campaigns[id]) }
  //   }
  //   return result;
  // }

export const selectContributionsFromUser = (contributions, userId) => {
  let result = [];
  for (let id in contributions) {
    if (contributions[id].user_id === userId) {result.push(contributions[id])}
  }
  return result;
}

export const selectUserFollows = (follows, userId) => {
  let result = [];
  for (let id in follows) {
    if (follows[id].user_id === userId) {result.push(follows[id])}
  }
  return result;
}

export const selectFollowId = (follows, userId, campId) => {
  let result = [];
  for (let id in follows) {
    if (follows[id].user_id === userId && follows[id].campaign_id === campId) {result.push(follows[id])}
  }
  return result;
}

export const selectRewardsFromCampaignId = (rewards, campId) => {
  let result = [];
  for ( let id in rewards ) {
    if ( rewards[id].campaign_id === campId ) { result.push(rewards[id]) }
  }
  return result;
}

// export const userFollowingBoolean = (follows, follow) => {
//   let result = [];
//   for ( let id in rewards ) {
//     if ( rewards[id].campaign_id === campId ) { result.push(rewards[id]) }
//   }
//   return result;
// }
