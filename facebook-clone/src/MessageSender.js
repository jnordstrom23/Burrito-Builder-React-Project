import React, {useState} from 'react'
import "./MessageSender.css"
import {Avatar} from "@mui/material"
import VideocamIcon from "@mui/icons-material/VideoCameraBack"
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary"
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useStateValue} from "./StateProvider";
import db from "./firebase"
import firebase from "firebase/compat/app"
import Modal from 'react-modal'


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("")
    const [checked, setChecked] = useState("")

    const[OpenModal, setOpenModal] = useState(false);

    const setOpenModalAsTrue =()=>{
        setOpenModal(true)
    }

    const setOpenModalAsFalse =()=>{
        setOpenModal(false)
    };


    const handleSubmit =(e) =>{
        e.preventDefault()
    
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username : user.displayName,
            image: imageUrl,
            checked: checked
        })
    
        setImageUrl("")
        setInput("")
      }

  return (
    <form>
    <div className="messageSender">
        <div className="messageSender__top">
            <Avatar src={user.photoURL}/>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="messageSender__input" 
                    placeholder= {"What's on your mind, "+ user.displayName +" ?"}/>
                <input 
                    
                    value={imageUrl}
                    onChange={e=> setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)"/> 

               
        </div>

        <div className="messageSender__bottom">
            
            <div className="messageSender__option">
                <VideocamIcon style= {{color: "red"}} />
                <h3>Live Video</h3>
            </div>
            
            <div className="messageSender__option">
                <PhotoLibraryIcon onClick={setOpenModalAsTrue} style= {{color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            
            <Modal isOpen={OpenModal} className="modal__fileSelecter">
            <div class= "modal-card">
                <input 
                    className= "modal___input"
                    type= "file"
                    accept= "file"
                />
                </div>
            </Modal>
        <div className="messageSender__option2">
            
                <label className="custom-checkbox">
                <input 
                    className="checkmark"
                    type = "checkbox"
                    checked = {checked}
                    onChange={e=> setChecked(e.target.checked)} />
                    <span></span> 
                    </label>
                    <h3 className="add__story">Add Story? </h3>
                <button className="formButton" onClick={handleSubmit} type="submit">Post</button>
                </div>
            </div>
            

        </div>

    </form>
  )
}

export default MessageSender