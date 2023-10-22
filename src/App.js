import React, {useState} from "react";
import Letter from "./components/Letter";
import MainInfo from "./components/MainInfo";
import SouthIcon from "@mui/icons-material/South";
import MainText from "./components/MainText";
import MapBlock from "./components/MapBlock";

function App() {
	const [clicked, setClicked] = useState(false);
	const onClick = () => {
		setClicked(true);
	}
	return (
		<div className="App">
			{clicked? <>
				<MainInfo/>
				<MainText/>
				<MapBlock/>
				</>
				: <Letter onClick={onClick} />}
			{clicked && <p className='text-purple-500 animate-bounce sticky bottom-[50px] text-center '><SouthIcon/></p>}
		</div>
	);
}

export default App;
