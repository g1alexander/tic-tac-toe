export interface Modal {
  showModal: boolean;
  title: string;
  message: Message;
  btnGray: string;
  btnYellow: string;
  isNextRound: boolean;
}

export interface Message {
  img: string;
  text: string;
  color: string;
}
