import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    
    return [
        {
            id: uuidv4(),
            name: "Home Court",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",           
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
            color: ["#6f3723", "#fffebb"], 
            active: true,
            
        },
        {
            id: uuidv4(),
            name: "Pipin Peralte Enamorado",
            artist: "Carmelino Seguro",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",           
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
            color: ["#6f3723", "#fffebb"], 
            active: false,
            
        },
        {
            id: uuidv4(),
            name: "Love Triangle",
            artist: "Claudio Caprin",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",           
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
            color: ["#6f3723", "#fffebb"], 
            active: false,
            
        }
    ]
}

export default chillHop;