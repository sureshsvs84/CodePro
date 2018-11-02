import React from 'react';

const LabelWithValue =({ className,colSize,label,value } = this.props)=>{
    return(
        <div className={'col '+ colSize +' '+ className}>
         <span className="bold">{label}</span> <span>{value} </span>
        </div>
         );
    };

export default LabelWithValue;