import { Image } from 'primereact/image';

export default function GitButton(){
    const onClick = () =>{
        window.open('https://primereact.org/image/')
    }

    return <div>
        <Image src='/gitlab.png' alt="Image" width="70" onClick={onClick}/>
    </div>
}