interface Input {
  title: string;
  textColor: string;
  action: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const DefaultInput = (props: Input) => (
  <input
    className={`shadow appearance-none border rounded w-full py-2 px-3 text-${props.textColor} leading-tight focus:outline-none focus:shadow-outline`}
    title={props.title}
    onChange={props.action}
    value={props.value}
  />
);

export default DefaultInput;
