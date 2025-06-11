import './ItemDate.css';

function ItemDate(props){
    const date=props.date;
    const month=props.month;
    const year=props.year;

    return(<div className="mfg-date">
        <span> {date} </span>
        <span> {month} </span>
        <span> {year}</span>
        {props.children}
    </div>);
}

export default ItemDate;