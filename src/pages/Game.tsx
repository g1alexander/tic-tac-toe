// import { useLocation } from "react-router-dom";

import Header from "@components/game/Header";
import Grid from "@components/game/Grid";
import Score from "@components/game/Score";

function Game() {
  // const modal = useContext(ModalContext);

  // const handleTest = () => {
  //   modal?.setModal({
  //     showModal: true,
  //     title: "oh no, you lost…",
  //     message: {
  //       text: "player 2 wins!",
  //       img: IconO,
  //     },
  //     btnYellow: "restart game?",
  //     btnGray: "no, cancel",
  //   });
  // };
  // const location = useLocation();

  // console.log(location.state);

  return (
    <>
      <Header />

      <Grid />

      <Score />
    </>
  );
}

export default Game;
