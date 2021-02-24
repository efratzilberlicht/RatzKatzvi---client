import React ,{useState}from 'react'
import { Dropdown,FormControl } from 'react-bootstrap'
import "./DropdownFilter.css";

export default function DropdownFilter(props) {
 const [itemName, setitemName] = useState(`בחר ${props.props.name}   `)
 const handleChooseItem = event => {
  if(props.props.name === "נושא"){
      setitemName(event.Subject);             
  } 
  else {
        setitemName(event.ItemName);             
   }  
 }                  
 const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));
const [value, setValue] = useState('');
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
  

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);
 
 if(props.props.name === "נושא") {             
 return (
 <Dropdown>
     <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
     {itemName}
     </Dropdown.Toggle>
  
     <Dropdown.Menu as={CustomMenu} onSelect={eventKey => {
           handleChooseItem(JSON.parse(eventKey))}}>
        {props.props.list.map(subject => <Dropdown.Item
                 className="dropItemFilter"                
                 eventKey={JSON.stringify(subject)}
                 key={subject.SubjectId}
               >
                 {subject.Subject}
               </Dropdown.Item>
             )}
     </Dropdown.Menu>
   </Dropdown>
 );
}
else {             
   return (
   <Dropdown>
       <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
       {itemName}
       </Dropdown.Toggle>
    
       <Dropdown.Menu as={CustomMenu} onSelect={eventKey => {
             handleChooseItem(JSON.parse(eventKey))}}>
          {props.props.list.map(item => <Dropdown.Item
                   className="dropItemFilter"                
                   eventKey={JSON.stringify(item)}
                   key={item.ItemId}
                 >
                   {item.ItemName}
                 </Dropdown.Item>
               )}
       </Dropdown.Menu>
     </Dropdown>
   );
  }

}