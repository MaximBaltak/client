import React from 'react'
import styles from'./Chat.module.css'
import Massege from './massege/Massege'

export default function Chat({masseges,text,valueText,change}) {
    

    return (
        <div className={styles.chat}>
         <h2>Добро пожаловать в чат</h2>
         <ul>
             {masseges.map(el=><li key={Math.floor(Math.random()*1000000000000)}><Massege masseg={el}/></li>)}  
        </ul>
        <textarea onKeyPress={text} onChange={change} cols="30" rows="10" value={valueText} placeholder='нажмите Enter для отправки сообщения' />   
        </div>
    )
}
