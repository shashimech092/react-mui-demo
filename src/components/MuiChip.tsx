import React, {useState} from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
    const [chips, setChip] = useState(['chip1', 'chip2', 'chip3'])
    const handleDelete=(chipToDelete: string)=>{
        setChip(chips=>chips.filter(chip=>chip!=chipToDelete))
    }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="chip outline"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("Delete handler called")}
      />
      {
        chips.map((chip)=>(
            <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
        ))
      }
    </Stack>
  );
};

export default MuiChip;
