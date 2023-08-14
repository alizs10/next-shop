import styled from "@emotion/styled";
import { Slider } from "@mui/material";

const StyledCustomization = styled(Slider)(({ theme }) => ({
    color: '#ef4444',
    height: '8px',
    '& .MuiSlider-root': {
        color: '#ef4444',
    },
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px rgba(239, 68, 68, 0.4)`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px rgba(239, 68, 68, 0.4)`,
        },
    },
    '& .MuiSlider-markLabel': {
        color: 'white'
    }

}));

export default function CustomSlider(props) {
    return <StyledCustomization {...props} />;
}