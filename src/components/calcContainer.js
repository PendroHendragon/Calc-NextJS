
import Button from "./button";
import { useState } from "react";


export default function Calc() {
    const [inputValue, setInputValue] = useState("");
    const [dot, setDot] = useState(false);
    const [text, setText] = useState("");
    const [bolOp, setBolOp] = useState("")


    function op(data) {
        const ope = data;
        setBolOp(ope);
        setDot(false)

    }

    function digitaInput() {

        const newValue = inputValue;


        setInputValue(eval(newValue))
        setText("")
        setDot(false)



    }

    function dotted() {
        if (dot == false) {
            if (inputValue != "") {
                setInputValue(inputValue + ".");
                setDot(true);

            }

        }
    }


    return (

        <div>
            <input className="input" type='text' onChange={(e) => { setInputValue(e.target.value) }} readOnly placeholder="Your calcs ..." value={inputValue} />
            <div className='calc'>
                <div className='row'>
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "7"), setBolOp("") }} bdata="7" />
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "8"), setBolOp("") }} bdata="8" />
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "9"), setBolOp("") }} bdata="9" />
                    <Button onclick={() => op("+")} bdata="+" />

                </div>
                <div className='row'>
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "4"), setBolOp("") }} bdata="4" />
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "5"), setBolOp("") }} bdata="5" />
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "6"), setBolOp("") }} bdata="6" />
                    <Button onclick={() => op("-")} bdata="-" />

                </div>
                <div className='row'>
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "1"), setBolOp("") }} bdata="1" />
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "2"), setBolOp("") }} bdata="2" />
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "3"), setBolOp("") }} bdata="3" />
                    <Button onclick={() => op("*")} bdata="*" />


                </div>
                <div className='row'>
                    <Button onclick={() => { setInputValue(inputValue + bolOp + "0"), setBolOp("") }} bdata="0" />
                    <Button onclick={dotted} bdata="." />
                    <Button onclick={() => { setInputValue(""), setText("") }} bdata="c" />
                    <Button onclick={() => op("/")} bdata="/" />

                </div>
                <div className='row'>
                    <Button onclick={digitaInput} bdata="=" className='equal' />
                </div>

            </div>

        </div>
    );
}