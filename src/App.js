import { useEffect, useState } from 'react';
import './App.css';
import App_name from './App_name';
import Balance from './Balance';
import Income_expense from './Income_expense';
// import Single_history from './History/Single_history';
import History from './History/History';
import Transactions from './Transactions/Transactions';


function App() {

  const get_local_storage_itesm =()=>{
    let list = localStorage.getItem('history')
    if(list){
      return JSON.parse(list)
    }
    else{
      return []
    }
  }

  const get_balance =()=>{
    let bal = localStorage.getItem('balance')
    if(bal){
      return JSON.parse(bal)
    }
    else{
      return (0)
    }
    
  }
  const get_income =()=>{
    let inc = localStorage.getItem('income')
    if(inc){
      return JSON.parse(inc)
    }
    else{
      return (0)
    }
    
  }

  const get_expense =()=>{
    let exp = localStorage.getItem('expense')
    if(exp){
      return JSON.parse(exp)
    }
    else{
      return (0)
    }
    
  }

  const [t_details , setT_details] = useState({
    name: '',
    amount: ''
  })

  const [balance , set_balance ] = useState(get_balance())
  const [income, set_income] = useState(get_income())
  const [expense, set_expense] = useState(get_expense())


  const[t_details_array , setT_details_array] = useState(get_local_storage_itesm()) 

  useEffect(()=>{

    localStorage.setItem('history', JSON.stringify(t_details_array))
    localStorage.setItem('balance' , JSON.stringify(balance))
    localStorage.setItem('income' , JSON.stringify(income))
    localStorage.setItem('expense' , JSON.stringify(expense))


  }, [t_details_array, balance, income, expense])


  
  const input_handler =(event)=>{

    

    const name = event.target.name
    const value = event.target.value



      setT_details({...t_details, [name] : value })

    
  }
  

  const Add_transaction = () =>{


    

    const t_record = {...t_details , id: new Date().getTime().toString()}

    if(t_record.name !== '' && t_record.amount !== ''){

      setT_details_array([...t_details_array , t_record])

    set_balance(balance + Number(t_details.amount))

    if(Number(t_details.amount) > 0){
      set_income(income + Number(t_details.amount))
    }
    else if(Number(t_details.amount) < 0){
      set_expense(expense + Math.abs(Number(t_details.amount)) )
    }

    

    setT_details({name: '' , amount:''})
    

    }

    
  
  }

  const Delete_Btn =(id)=>{
    

    
    setT_details_array((oldItems)=>{
      return oldItems.filter((curElem , index)=>{
        if(index == id){
          if(Number(curElem.amount) > 0){
            set_balance(balance - Number(curElem.amount) )
            set_income(income - Number(curElem.amount))
            
          }
          else if(Number(curElem.amount) < 0){
            set_balance(balance + Math.abs(Number(curElem.amount)))
            set_expense(expense + Number(curElem.amount))
          }


          
        }
        return (index !== id )
      })
    })


  }




  return (
    <div className="app_main">
      <div className="app_second_main">
        <div className="app_box">
          
            <App_name/>
            <Balance
              balance={Math.abs(balance)}
            />
            <Income_expense
              income={Math.abs(income)}
              expense={Math.abs(expense)}
            />
            <History
              transaction_array={t_details_array}
              onDeleteBtn={Delete_Btn}
            />
            <Transactions
              onClick= {()=>Add_transaction()}
              name_onChange={input_handler}
              amount_onChange={input_handler}
              name_value={t_details.name}
              amount_value={t_details.amount}
            />
            
            
            
          
        </div>
      </div>
    </div>
  );
}

export default App;
