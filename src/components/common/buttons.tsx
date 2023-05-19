interface DefaultButton {
  text: string;
  color: string;
  hover: string;
  textColor: string;
  action: () => void;
  extraProps: string;
}

interface GroupButton {
  text: string;
  position: string;
  color: string;
  hover: string;
  textColor: string;
  action: (note: object) => void;
}

const DefaultButton = (props: DefaultButton) => (
  <button
    className={`${props.extraProps} bg-${props.color} hover:bg-${props.hover} text-${props.textColor} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    onClick={props.action}
  >
    {props.text}
  </button>
);

const GroupButton = (props: GroupButton) => (
  <button
    className={`bg-${props.color} hover:bg-${props.hover} text-${props.textColor} font-bold py-2 px-4 rounded-${props.position}`}
    onClick={props.action}
  >
    {props.text}
  </button>
);

export { DefaultButton, GroupButton };
