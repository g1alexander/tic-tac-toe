export interface Modal {
  showModal: boolean;
  title: string;
  message: Message;
  btnGray: string;
  btnYellow: string;
}

export interface Message {
  img: string;
  text: string;
}
