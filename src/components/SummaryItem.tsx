interface Props {
  name: string;
  value: number;
}

function SummaryItem(props: Props) {
  return (
    <div className="summary-item">
      <p>{props.name}</p>
      <p>₦ {props.value}</p>
    </div>
  );
}
export default SummaryItem;
