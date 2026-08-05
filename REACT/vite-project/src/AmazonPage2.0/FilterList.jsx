function FilterList() {
      //props->
      //title
      //array of options[new, renewed, used]
      //options[Adjustable, Length, TangleFree, Anti-chev]
      const {title, options} = props;
      //props and mapping
      // Dynamic

  return (
     < div>
       <b>{title}</b>
       < div>
       {options.map((option, index) => (
         <div key={index}>
           <input type="checkbox" />
           <span>{option}</span>
         </div>
       ))}
       </div>
    </div>
) ;
}

export default FilterList;
            