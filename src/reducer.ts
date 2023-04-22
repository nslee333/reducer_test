export function reducer(state: any, action: any) {
  if (action.type === 'incremented_count') {
    return {
      count: state.count + 1
    };
  } else if (action.type === 'decremented_count') {
    return {
      count: state.count - 1
    };
  } else {
    throw Error("Unknown Error.");
  }
}