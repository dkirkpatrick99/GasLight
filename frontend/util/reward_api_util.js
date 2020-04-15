export const createReward = reward => (
    $.ajax({
      url: 'api/rewards',
      method: 'POST',
      data: {reward},
    })
  );

  export const fetchRewards = () => (
    $.ajax({
      url: `api/rewards/`
    })
  );