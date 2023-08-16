const matchProtocols = ({ data, protocolName }) => {
  switch (protocolName) {
    case "zkevm": {
      const balance = data.Balance.map((value) => {
        return {
          token_name: value?.tokenName,
          token_symbol: value?.tokenSymbol,
          amount: value?.amount,
          usd_amount: value?.usd_amount,
          image_url: value?.image_url,
        };
      });

      const protocols = data.Protocols.map((value) => {
        return {
          name: value?.name,
          volume: value?.volume,
          activity: {
            last_activity: value?.activity?.last_activity,
            active_days: value?.activity?.active_days,
          },
          interactions: value?.interactions,
          image_url: value?.image_url,
        };
      });

      return {
        interactions: {
          interactions: data?.Interactions?.interactions || 0,
          last_week: data?.Interactions?.lastWeek || 0,
        },
        volume: {
          total_volume: data?.Volume?.total_volume || 0,
          last_week_volume: data?.Volume?.last_week_volume || 0,
        },
        fee: {
          total_fee: data?.Fees?.total_fee || 0,
          last_week_fee: data?.Fees?.last_week_fee || 0,
        },
        activity: {
          num_months: data?.Activity?.num_months || 0,
          num_weeks: data?.Activity?.num_weeks || 0,
          num_days: data?.Activity?.num_days || 0,
          last_activity: data?.Activity?.last_activity || "None",
        },
        balance: balance ? balance : [],
        protocols: protocols ? protocols : [],
      };
    }
    case "base": {
      const balance = data.Balance.map((value) => {
        return {
          token_name: value?.tokenName,
          token_symbol: value?.tokenSymbol,
          amount: value?.amount,
          usd_amount: value?.usd_amount,
          image_url: value?.image_url,
        };
      });

      const protocols = data.Protocols.map((value) => {
        return {
          name: value?.name,
          volume: value?.volume,
          activity: {
            last_activity: value?.activity?.last_activity,
            active_days: value?.activity?.active_days,
          },
          interactions: value?.interactions,
          image_url: value?.image_url,
        };
      });

      return {
        interactions: {
          interactions: data?.Interactions?.interactions || 0,
          last_week: data?.Interactions?.lastWeek || 0,
        },
        volume: {
          total_volume: data?.Volume?.total_volume || 0,
          last_week_volume: data?.Volume?.last_week_volume || 0,
        },
        fee: {
          total_fee: data?.Fees?.total_fee || 0,
          last_week_fee: data?.Fees?.last_week_fee || 0,
        },
        activity: {
          num_months: data?.Activity?.num_months || 0,
          num_weeks: data?.Activity?.num_weeks || 0,
          num_days: data?.Activity?.num_days || 0,
          last_activity: data?.Activity?.last_activity || "None",
        },
        balance: balance ? balance : [],
        protocols: protocols ? protocols : [],
      };
    }
    default:
      return data;
  }
};

export default matchProtocols;
