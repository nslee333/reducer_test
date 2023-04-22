type Action = {
  type: string;
};

type State = {
  count: number;
};

export function reducer(state: State, action: Action) {
  if (action.type === "incremented_count") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "decremented_count") {
    return {
      count: state.count - 1,
    };
  } else {
    throw Error("Unknown Error.");
  }
}
