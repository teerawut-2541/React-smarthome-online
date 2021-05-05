import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addRoomAction } from "../../redux/action/modalAction";
import "./modal.css";
const AddRoom = () => {
  const { register, handleSubmit } = useForm();
   
  const stateIcon = useSelector((state) => state.icon);
  const { icon } = stateIcon;

  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  const addRoom = useSelector((state) => state.addRoom);
  const { status,message } = addRoom;

  const [pathIcon, setPathIcon] = useState('Icon')

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const dataRoom = {
      name:data.name,
      path_icon:pathIcon,
      home_id:userInfo.home_id
    }
    dispatch(addRoomAction(dataRoom));
  };

  return (
    <div className="addroom-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addroom">
          <div className="title-addroom">
            <h1>Add Room</h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name Room"
            className="input-romm"
            ref={register}
          />
          <span className="input-romm">{pathIcon}</span>
          <div className="but-addrom">
            <button type="submit">SAVE</button>
          </div>
        </div>
      </form>
      <div className="box-icon-addroom">
        <div className="icon-addroom">
          {icon && icon.map((item,key)=>{
            return(
              <img key={key} src={item.path_icon} alt='icon' onClick={()=>setPathIcon(item.path_icon)}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
