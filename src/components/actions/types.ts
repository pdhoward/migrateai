// types.ts
export type ContentItem = {
    eid: number;
    pre: number[];
    eState: boolean;
    dState: boolean;
    isExecuting: boolean;
    isDisabled: boolean;
    name: string;
    description: string;
    api: string;
    image: JSX.Element;
  };
  