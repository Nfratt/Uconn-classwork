import React from 'react';
import './Mathstyles.css';
export default function Math(props){
    let result=null;
  
    const {num1,oporator,num2}= props;
    switch (oporator) {
      case '+': result = num1+num2; break;
      case '-': result= num1-num2;break;
      case '*': result= num1*num2;break;
      case '/': result=num1/num2;break;
    
      default:break;
    }
    const styles={
      fontSize:result+'px'
    }
  
    return<span style={styles}>{result}</span>
  }