const matchProtocols = ({ data, protocolName }) => {
  switch (protocolName) {
    case "zkevm": {
      const balance = data.Balance.map((value) => {
        return {
          token_name: value.tokenName,
          token_symbol: value.tokenSymbol,
          amount: value.amount,
          usd_amount: value.usd_amount,
          image_url: value.image_url,
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
      const balance = data.Balance.map((value) => {
        return {
          token_name: value.name,
          token_symbol: value.symbol,
          amount: value.amount,
          usd_amount: value.value_usd,
          image_url: value.image_url,
        };
      });

      const protocols = [];

      for (let [key, value] of Object.entries(data.Protocols)) {
        console.log(key, value);
        protocols.push({
          name: key,
          volume: value.Volume,
          activity: {
            last_activity:
              value.Activity.last_activity === "None"
                ? 0
                : value.Activity.last_activity,
            active_days: value.Activity.active_days,
          },
          interactions: value.Activity.interactions,
          image_url: value.image_url,
        });
      }

      return {
        interactions: {
          interactions: data.Interactions.total_interactions,
          last_week: data.Interactions.last_week_interactions,
        },
        volume: {
          total_volume: data.Volume,
          last_week_volume: 0,
        },
        fee: {
          total_fee: data.Fees.total_fee,
          last_week_fee: data.Fees.last_week_fee,
        },
        activity: {
          num_months: data.Activity?.num_months || 0,
          num_weeks: data.Activity?.num_weeks || 0,
          num_days: data.Activity?.num_days || 0,
          last_activity: data.Activity?.last_activity || "None",
        },
        balance,
        protocols,
      };
    }
    default:
      return data;
  }
};

export default matchProtocols;
