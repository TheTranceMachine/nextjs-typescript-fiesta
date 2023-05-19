interface TextArea {
  id: string;
  rows: number;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  focusRingColor?: string;
  focusBorderColor?: string;
  value: string;
  action: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

const DefaultTextArea = (props: TextArea) => (
  <textarea
    id={props.id}
    rows={props.rows}
    className={`block p-2.5 w-full text-sm 
    text-${props.textColor} 
    bg-${props.bgColor} 
    rounded-lg border border-${props.borderColor} 
    focus:ring-${props.focusRingColor} 
    focus:border-${props.focusBorderColor} 
    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    value={props.value}
    onChange={props.action}
  ></textarea>
);

export default DefaultTextArea;
