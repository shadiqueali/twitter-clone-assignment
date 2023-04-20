import React,{useEffect,useState} from 'react'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';

const MyTweet = () => {
    const [datas,setDatas] = useState([])
    
    const displayMyTweet =async()=>{
        try {
            const response = await axios.get('http://172.105.58.224:3582/tweet/my-all',{
              auth:{
                username:'shadique',
                password:'Shadique@123'
              }
            })
            const data= response.data
            if(data){
                console.log(data);
            setDatas(data)
            }
            
           
           
            
        } catch (error) {
          console.log(error);
        }
      }

      const deleteTweet=async(id)=>{
        console.log('delete tweet');
        try {
            const response = await axios.delete(`http://172.105.58.224:3582/tweet/${id}`, { auth:{
                username:'shadique',
                password:'Shadique@123'
        }})
          console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        const tweets =datas.filter((data)=>data.id!==id)
        setDatas(tweets)
      }
    

    useEffect(()=>{
        displayMyTweet()
    },[])

  return (
    <div className='my-tweets'>
        <h1>My Tweets</h1>
        {datas.map((data)=>{
        
            return(
                <div key={data.id} className='my-tweet'>
                    <div>
                    <div className='name-circle'>{data.author.username.charAt(0)}</div>
                   
                    </div>
                    <p className='my-tweet-text'>{data.tweet}</p>
                    <div className='delete-icon' onClick={()=>deleteTweet(data.id)}>
                        <DeleteIcon/>
                    </div>
                    
                </div>
            )
        })}

    </div>
  )
}

export default MyTweet