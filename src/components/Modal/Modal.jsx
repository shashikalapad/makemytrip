import React,{useState} from 'react'
import ReactDom from 'react-dom';
import './Modal.css'
import Payment from "../../Logo/payment.png"
const Modal = ({setData,data,modelData,index,fakeString}) => {
    const cancel = ()=>{
        let list = [...data]
       
        list[index].isAnkur = !list[index].isAnkur
        setData(list)       
    }
    
    console.log(modelData)
    const [success, setSuccess] = useState(false);
    const [Namecard,setNamecard] =useState("");
    const [Cardnum,setCardnum]=useState("");
    const [Exdate,setExdate]=useState(new Date());
    const [Cvv, setCvv] = useState("");
    let isNamecardEntered = false;
    let isCardnumEntered = false;
    let isExdateEntered = false;
    let isCvvEntered = false;
    const minDate = () => {

        const today = new Date().toISOString().split('T')[0];
        console.log(today);
        return today;
        
        };
        
    return (
        <>
            <div className='modalCss'>
                <div className='MMTmodal'>
                  {success  &&  <h3 style={{textAlign:"center",marginTop:"10px",}}> <img src={Payment} alt="Success" style={{width:"30px",height:"30px",borderRadius:"20px"}} /> Payment Successfull</h3>}
                        <div><h3 style={{textAlign:"center"}}>Fare Summary </h3></div>
                    <div className='Fare'>
                        <div className='baseFare'>
                            <div ><b>Base Fare </b></div>
                            <div id='numbers'>&#8377;{fakeString==="train" && modelData.price}{fakeString==="hotel" && modelData.price_per_night}{fakeString==="flight" && modelData.price}</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"20px"}}><b>Fee & Surcharges</b></div>
                            <div style={{marginRight:"20px"}}>&#8377;540</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"5px"}}><b>Total Amount</b></div>
                            <div id='numbers'>&#8377;{fakeString==="train" && parseInt(modelData.price)+parseInt(540)}{fakeString==="flight" && parseInt(modelData.price)+parseInt(540)}{fakeString==="hotel" && parseInt(modelData.price_per_night)+parseInt(540)}</div>
                        </div>
                    </div>
                    <div><h3 style={{textAlign:"center"}}>Payment Method </h3></div>
                    <div className='PaymentInput'>
                        <input type="text" placeholder='Name on Card' onSubmit={
                            ()=>{
                                if(Namecard.length!=16){
                                    alert("valid name on card")
                                   }                               
                                }         
                           
                        }

                        onChange={ (e) => {setNamecard(e.target.value);
                            // if(Namecard.length!==16){
                            //     alert("valid name on card")
                            // }
                        console.log(Namecard);}}required />
                    </div>
                    <div className='PaymentInput'>
                        <input type="text" placeholder='Card Number' 
                        onSubmit={
                            ()=>{
                                if(Cardnum.length!==16){
                                    alert("valid card number")
                                   }                               
                                }         
                           
                        }

                        onChange={ (e) => {setCardnum(e.target.value)
                            // if(Cardnum.length!==3){
                            //     alert("valid card number")
                            // }
                        console.log(Cvv)}}max="16"min="16" required/>
                    </div>
                    <div className='PaymentInput'>
                        <input type="date" placeholder='Expiry Date'
                       min={minDate()}
                        // onSubmit={
                        //     ()=>{
                        //         if(Exdate.length!==16){
                        //             alert("valid expiry date")
                        //            }                               
                        //         }         
                           
                        // }

                        onChange={ (e) => {setExdate(e.target.value)
                            // if(Exdate.length!==16){
                            //     alert("valid expiry date")
                            // }
                        console.log(Exdate)}} required />
                    </div>
                    <div className='PaymentInput'>
                        <input  type="text" placeholder='CVV' onSubmit={
                            ()=>{
                                if(Exdate.length!==16){
                                    alert("valid expiry date")
                                   }                               
                                }         
                           
                        }

                        onChange={ (e) => {setCvv(e.target.value)
                            // if(Cvv.length!==3){
                            //     alert("valid cvv")
                            // }
                        console.log(Cvv)}}
                        
                            max="3" min="3" required/>
                            
                        
                    </div>
                    <div className='btnPay'>
                        <button style={{backgroundColor:"rgb(220,53,69)"}} onClick={cancel}>Cancel</button>
                     
                       {Namecard!=null&&Cardnum!=null&& Exdate!=null&&Cvv!=null&&<button onClick={()=>{setSuccess(true)}}>Pay</button>}
                    </div>

                </div>
            </div>
        </>

    )

}

export default Modal