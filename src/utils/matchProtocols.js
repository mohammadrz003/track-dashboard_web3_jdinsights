const matchProtocols = ({ data, protocolName }) => {
  switch (protocolName) {
    case "zkevm": {
      const balance = data.Balance.map((value) => {
        return {
          token_name: value.tokenName,
          token_symbol: value.tokenSymbol,
          amount: value.amount,
          usd_amount: value.usd_amount,
        };
      });

      const protocols = data.Protocols.map((value) => {
        return {
          name: value.name,
          volume: value.volume,
          activity: {
            last_activity: value.activity.last_activity,
            active_days: value.activity.active_days,
          },
          interactions: value.interactions,
          image_url: value.image_url,
        };
      });

      return {
        interactions: {
          interactions: data.Interactions.interactions,
          last_week: data.Interactions.lastWeek,
        },
        volume: {
          total_volume: data.Volume.total_volume,
          last_week_volume: data.Volume.last_week_volume,
        },
        fee: {
          total_fee: data.Fees.total_fee,
          last_week_fee: data.Fees.last_week_fee,
        },
        activity: {
          num_months: data.Activity.num_months,
          num_weeks: data.Activity.num_weeks,
          num_days: data.Activity.num_days,
          last_activity: data.Activity.last_activity,
        },
        balance,
        protocols,
      };
    }
    case "base": {
      break;
    }
    default:
      return data;
  }
};

export default matchProtocols;
