import React,{useState,useEffect} from 'react'
import axios from 'axios'

const AllTweet = () => {
    const [newTweet,setNewTweet] = useState('')
    const [tweets,setTweets] = useState([])
    const [success,setSucess] = useState(false)


     const getTweets = async () =>{
    try {
        const response = await axios.get('http://172.105.58.224:3582/tweet/all',{
          auth:{
            username:'shadique',
            password:'Shadique@123'
          }
        })
        const data= response.data
        if(data){
          setTweets(data)
          console.log(data);
        }
       
        
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response =  await axios.post('http://172.105.58.224:3582/tweet/new',{
        tweet:newTweet,
      },{
      auth:{
        username:'shadique',
        password:'Shadique@123'
      }
  })
  console.log(response.data);
 getTweets()
 setSucess(true)
    } catch (error) {
      console.log(error);
    }
  }  
    
  
  useEffect(()=>{
    getTweets()
  },[])

  return (
    <div className='all-tweet'>
        <form className='form tweet-form' onSubmit={handleSubmit}>
        <div className='form-row'>
        
        <textarea
            type='text'
            className='form-input'
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            id='newTweet'
            placeholder='Whats Happening?'
        />
        </div>
        <button type='submit' className='tweet-btn '>
        Tweet
        </button>
        {success && <p className='success'>Successfully Tweeted</p>}
        </form>
        <div className='tweets'>
          
       {tweets.map((data)=>{
          return(
            <div key={data.id} className='tweet'>
              <div className='tweet-head'>
                <div className='name-circle'>{data.author.username.charAt(0)}</div>
                <div className='tweet-user'>
                <p className='user'>{data.author.username}</p>
                
                </div>
               
              </div>
             
              <p className='tweet-text'>{data.tweet}</p>
            </div>  
          )})}
          
        </div>
    </div>
  )
}

export default AllTweet
