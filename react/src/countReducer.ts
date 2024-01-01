type Action = {
  type: string;
  initCount?: number;
};

export default (count: number, action: Action) => {
  switch (action.type) {
    case 'add':
      return count + 1;
    case 'reset':
      return action.initCount;
  }
  return count;
};
