export default function Button({bdata,onclick,className}){




    return(
        <button onClick={onclick} className={className}>{bdata}</button>
    );
}