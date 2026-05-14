import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";


function UserChatCard({chat}) {
  const { message, auth } = useSelector((state) => state);
  const otherUser = auth.user?.id===chat.users[1].id ? chat.users[0] : chat.users[1];
  const userInitials = `${otherUser?.fname?.[0] || "U"}${otherUser?.lname?.[0] || ""}`.toUpperCase();
  
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              fontSize: "1.5rem",
              bgcolor: "#191c29",
              color: "rgb(88,199,250)",
            }}
          >
            {userInitials}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={auth.user?.id===chat.users[1].id?chat.users[0].fname+" "+chat.users[0].lname:chat.users[1].fname+" "+chat.users[1].lname}
        subheader={auth.user?.id===chat.users[1].id?"@"+chat.users[0].fname.toLowerCase()+"_"+chat.users[0].lname.toLowerCase():"@"+chat.users[1].fname.toLowerCase()+"_"+chat.users[1].lname.toLowerCase()}
      ></CardHeader>
    </Card>
  );
}

UserChatCard.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default UserChatCard;