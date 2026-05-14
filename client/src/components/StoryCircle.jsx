import {Avatar} from '@mui/material';

function StoryCircle() {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem", bgcolor: "#191c29", color: "rgb(88,199,250)" }}
        >
          S
        </Avatar>
        <p>Helen</p>
      </div>
    </div>
  );
}

export default StoryCircle;